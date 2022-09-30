const { getbyId } = require("/opt/nodejs/datastore/getbyId");
const { Users } = require("/opt/nodejs/entities/Users");

exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    throw new Error(
      `getMethod only accept GET method, you tried: ${event.httpMethod}`
    );
  }


  const id =  new Users(event.pathParameters);
  const data = await getbyId(id);
  const item = data.Item;

  const response = {
    statusCode: 200,
    body: JSON.stringify(item),
  };

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
