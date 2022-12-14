const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();
const tableName = process.env.SAMPLE_TABLE;

const getbyId = async (item) => {
  var params = {
    TableName: tableName,
    Key: item.key()
  };

  return docClient.get(params).promise();
};

module.exports = {
  getbyId,
};
