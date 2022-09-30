const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();

const tableName = process.env.SAMPLE_TABLE;

const deleteItems = async (item) => {
  console.log(item);
  var params = {
    TableName: tableName,
    Key: item.key(),
  };
  return docClient.delete(params).promise();
};

module.exports = {
  deleteItems,
};
