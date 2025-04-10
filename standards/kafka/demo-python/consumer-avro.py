import io
import avro.schema
import avro.io
from kafka import KafkaConsumer

# To consume messages
consumer = KafkaConsumer('my-topic-avro',
                         group_id='my-group',
                         bootstrap_servers=['localhost:9092'], 
                         auto_offset_reset='earliest', 
                         enable_auto_commit=False)

SCHEMA_PATH = "users.avsc"
SCHEMA = avro.schema.parse(open(SCHEMA_PATH).read())

print(SCHEMA)

for msg in consumer:
    bytes_reader = io.BytesIO(msg.value)
    decoder = avro.io.BinaryDecoder(bytes_reader)
    reader = avro.io.DatumReader(SCHEMA)
    user1 = reader.read(decoder)
    print(user1)