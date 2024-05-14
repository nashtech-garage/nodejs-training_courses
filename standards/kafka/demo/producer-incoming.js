const { Kafka } = require('kafkajs');
const randomstring = require('randomstring');
const {SchemaType, readAVSCAsync, SchemaRegistry} = require("@kafkajs/confluent-schema-registry");
const path = require("path");

const kafka = new Kafka({
  clientId: 'kafka-fund',
  brokers: ['localhost:9092'],
});

const startProducer = async () => {
  try {
    const registry = new SchemaRegistry({ host: 'http://localhost:8081' })

    const schema = await readAVSCAsync(path.join(__dirname, 'schema.avsc'))
    const { id } = await registry.register({ type: SchemaType.AVRO, schema: JSON.stringify(schema) })

    // Encode using the uploaded schema
    // const payload = { fullName: 'John Doe', firstName: 'John', lastName: 'Doe' };
    const payload = { fullName: 'Tran Minh', firstName: 'John', lastName: 'Doe' };
    const encodedPayload = await registry.encode(id, payload);

    console.log(`Gia tri encode:`, encodedPayload);


    const producer = kafka.producer();

    await producer.connect();
    console.log('Bat dau publish message');
    await producer.send({
      topic: 'incoming',
      messages: [
        {
          key: "123",
          value: encodedPayload
        },
      ],
    });
    console.log('Da publish message');
    await producer.disconnect();
  } catch (err) {
    console.log(`Producer got errors: ${err}`)
  }
}
startProducer().then(_ => console.log('Done'));