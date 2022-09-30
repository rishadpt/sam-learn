const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();


const tableName = process.env.SAMPLE_TABLE;

const addItems = async (item) => {
 
  var params = {
    TableName: tableName,
    Item: item.toAddItem(),
  };
  
  return docClient.put(params).promise();
};

module.exports = {
  addItems
};
