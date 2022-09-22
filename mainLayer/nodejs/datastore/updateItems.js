const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();

const tableName = process.env.SAMPLE_TABLE;

const updateItems = async (item) => {
  
  var params = {
    TableName: tableName,
    Key: { id: item.id },
    UpdateExpression: "set #ns= :n,#cy= :c",
    ExpressionAttributeValues: {
      ":n": item.name,
      ":c": item.category,
    },
    ExpressionAttributeNames: {
      "#ns": "name",
      "#cy": "category",
    },
  };

  return docClient.update(params).promise();
};

module.exports = {
  updateItems,
};
