import io
import random
import avro.schema
from avro.io import DatumWriter
from kafka import KafkaProducer
from kafka.errors import KafkaError
import logging

# Kafka topic
TOPIC = "my-topic-avro"

# Path to user.avsc avro schema
SCHEMA_PATH = "users.avsc"
SCHEMA = avro.schema.parse(open(SCHEMA_PATH).read())

producer = KafkaProducer(bootstrap_servers=['localhost:9092'])

for i in range(10):
    writer = DatumWriter(SCHEMA)
    bytes_writer = io.BytesIO()
    encoder = avro.io.BinaryEncoder(bytes_writer)
    writer.write({"name": "Minh Tran", "favorite_color": "red", "favorite_number": random.randint(0, 10)}, encoder)
    raw_bytes = bytes_writer.getvalue()
    future = producer.send(TOPIC, raw_bytes)

    # Block for 'synchronous' sends
    try:
        record_metadata = future.get(timeout=10)
    except KafkaError:
        # Decide what to do if produce request failed...
        logging.exception()
        pass