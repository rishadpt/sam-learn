const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();
const tableName = process.env.SAMPLE_TABLE;

exports.updateItems = async (event) => {
  if (event.httpMethod !== "PUT") {
    throw new Error(
      `PUT METHOD only accepts PUT method, you tried: ${event.httpMethod} method.`
    );
  }

  const body = JSON.parse(event.body);
  const id = body.id;
  const name = body.name;
  const category = body.category;

  var params = {
    TableName: tableName,
    Key: { id: id },
    UpdateExpression: "set #ns= :n,#cy= :c",
    ExpressionAttributeValues: {
      ":n": name,
      ":c": category,
    },
    ExpressionAttributeNames: {
      "#ns": "name",
      "#cy": "category",
    },
  };

  const result = await docClient.update(params).promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: "user is updated successfully" }),
  };

  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );

  return response;
};
