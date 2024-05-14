const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'kafka-fund',
  brokers: ['localhost:9092'],
});

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

    // Uncomment to get from begin
    consumer.seek({ topic: 'test-topic', partition: 0, offset: '0' });

  } catch (err) {
    console.log(`Consumer got errors: ${err}`)
  }
}

startConsumer().then(_ => console.log('Done'));