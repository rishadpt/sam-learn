const { Users } = require("/opt/nodejs/entities/Users");
const { deleteItems } = require("/opt/nodejs/datastore/deleteItems");

exports.handler = async (event) => {
  if (event.httpMethod !== "DELETE") {
    throw new Error(
      `Delete METHOD only accepts Delete method, you tried: ${event.httpMethod} method.`
    );
  }
  const items = new Users(event.pathParameters);

  await deleteItems(items);

  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: "user is Deleted successfully" }),
  };
  return response;
};
