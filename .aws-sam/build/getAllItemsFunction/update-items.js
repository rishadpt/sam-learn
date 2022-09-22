const { updateItems } = require("/opt/nodejs/datastore/updateItems");

exports.updateItems = async (event) => {
  if (event.httpMethod !== "PUT") {
    throw new Error(
      `PUT METHOD only accepts PUT method, you tried: ${event.httpMethod} method.`
    );
  }

  const body = JSON.parse(event.body);

  const item = {
    id: body.id,
    name: body.name,
    category: body.category,
  };
  const result = await updateItems(item);

  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: "user is updated successfully" }),
  };

  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );

  return response;
};
