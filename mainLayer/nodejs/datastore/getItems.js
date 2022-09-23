const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();

const tableName = process.env.SAMPLE_TABLE;

const getItems = async () => {
  
  var params = {
    TableName: tableName,
  };

  return docClient.scan(params).promise();
};

module.exports = {
  getItems,
};
