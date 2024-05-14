const path = require('path');
const { COMPATIBILITY: { BACKWARD }, SchemaRegistry, SchemaType } = require('@kafkajs/confluent-schema-registry');

const registry = new SchemaRegistry({ host: 'http://localhost:8081' });

// Upload a schema to the registry
const schema = `
{ 
  "type": "record", 
  "name": "RandomTest2", 
  "namespace": "examples",
  "fields": [
    { "type": "string", "name": "fullName" }, 
    { "type": "string", "name": "firstName" },
    { "type": "string", "name": "lastName" }] 
}
`;

const test = async () => {
  const { id } = await registry.register({ type: SchemaType.AVRO, schema }, { compatibility: BACKWARD });

// Encode using the uploaded schema
  const payload = { fullName: 'John Doe', firstName: 'John', lastName: 'Doe' };
  const encodedPayload = await registry.encode(id, payload);

  console.log(`Gia tri encode:`, encodedPayload);

// Decode the payload
  const decodedPayload = await registry.decode(encodedPayload);
  console.log(decodedPayload)
}

test();

