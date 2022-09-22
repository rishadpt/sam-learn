const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();

const tableName = process.env.SAMPLE_TABLE;

const addItems = async (item) => {

  var params = {
    TableName: tableName,
    Item: item,
  };

  return dynamodb.putItem(params).promise();
};

module.exports = {
  addItems,
};
