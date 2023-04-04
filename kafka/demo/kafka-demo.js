const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'kafka-fund',
  brokers: ['localhost:9092'],
});

const startProducer = async () => {
  try {
    const producer = kafka.producer();

    await producer.connect();
    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: 'Hello KafkaJS user!' },
      ],
    });
    await producer.disconnect();
    console.log('Done Start Producer');
  } catch (err) {
    console.log(`Producer got errors: ${err}`)
  }
}

const startConsumer = async () => {
  try {
    const consumer = kafka.consumer({ groupId: 'test-group' });

    await consumer.connect();
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message, heartbeat }) => {
        console.log({
          receive_value: message.value.toString(),
          headers: message.headers,
        });
      },
    });
  } catch (err) {
    console.log(`Consumer got errors: ${err}`)
  }
}

const startDemo = async () => {
  await startProducer();
  await startConsumer();
}

startDemo().then(_ => console.log('Done'));
