const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();
const tableName = process.env.SAMPLE_TABLE;

const getbyId = async (id) => {
  var params = {
    TableName: tableName,
    Key: { id: id },
  };

  return docClient.get(params).promise();
};

module.exports = {
  getbyId,
};
