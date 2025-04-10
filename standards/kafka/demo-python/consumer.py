from venv import logger
from kafka import KafkaConsumer
import msgpack
import json

# To consume all messages in a topic from the beginning without committing offsets
# consumer = KafkaConsumer('my-topic',
#                          group_id='my-group',
#                          bootstrap_servers=['localhost:9092'], 
#                          auto_offset_reset='earliest', 
#                          enable_auto_commit=False)
# for message in consumer:
#     # message value and key are raw bytes -- decode if necessary!
#     # e.g., for unicode: `message.value.decode('utf-8')`
#     print ("%s:%d:%d: key=%s value=%s" % (message.topic, message.partition,
#                                           message.offset, message.key,
#                                           message.value))

# consume earliest available messages, don't commit offsets
# KafkaConsumer(auto_offset_reset='earliest', enable_auto_commit=False)

def parse_json(m):
    try:
        print(m, m.decode('ascii'))
        return json.loads(m.decode('ascii'))
    except json.JSONDecodeError:
        logger.error("Error decoding JSON")
        print("Error decoding JSON")
        return None

# consume json messages
consumer = KafkaConsumer(
    'my-topic',
    group_id='my-group',
    bootstrap_servers=['localhost:9092'],
    value_deserializer=parse_json)


for message in consumer:
    if message.value is None:
        continue
    data = message.value
    print(message)
    print(data["key"], "-" + data["value"])

# # consume msgpack
# KafkaConsumer(value_deserializer=msgpack.unpackb)

# # StopIteration if no message after 1sec
# KafkaConsumer(consumer_timeout_ms=1000)

# # Subscribe to a regex topic pattern
# consumer = KafkaConsumer()
# consumer.subscribe(pattern='^awesome.*')

# # Use multiple consumers in parallel w/ 0.9 kafka brokers
# # typically you would run each on a different server / process / CPU
# consumer1 = KafkaConsumer('my-topic',
#                           group_id='my-group',
#                           bootstrap_servers='my.server.com')
# consumer2 = KafkaConsumer('my-topic',
#                           group_id='my-group',
#                           bootstrap_servers='my.server.com')