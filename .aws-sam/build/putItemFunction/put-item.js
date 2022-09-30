const { addItems } = require("/opt/nodejs/datastore/addItems");
const { Users } = require("/opt/nodejs/entities/Users");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    throw new Error(
      `postMethod only accepts POST method, you tried: ${event.httpMethod} method.`
    );
  }
  const body = JSON.parse(event.body);
  const item = new Users(body);
  try {
    const result = await addItems(item);
    const response = {
      statusCode: 200,
      body: JSON.stringify(body),
    };
    console.info(
      `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
    );
    return response;
  } catch (e) {
    const response = {
      statusCode: 502,
      body: JSON.stringify(e),
    };
    return response;
  }

  // All log statements are written to CloudWatch
};
