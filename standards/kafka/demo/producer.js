const { Kafka } = require('kafkajs');
const randomstring = require('randomstring');

const kafka = new Kafka({
  clientId: 'kafka-fund',
  brokers: ['localhost:9092'],
});

const startProducer = async () => {
  try {
    const producer = kafka.producer();

    await producer.connect();
    console.log('Bat dau publish message');
    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: randomstring.generate() },
      ],
    });
    console.log('Da publish message');
    await producer.disconnect();
  } catch (err) {
    console.log(`Producer got errors: ${err}`)
  }
}
startProducer().then(_ => console.log('Done'));