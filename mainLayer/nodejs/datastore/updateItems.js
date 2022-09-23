const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();

const tableName = process.env.SAMPLE_TABLE;

const updateItems = async (item) => {
  
  var params = {
    TableName: tableName,
    Key: { id: item.id },
  };
  const expression = item.updateExpression()
  
  return docClient.update(params,expression).promise();
};

module.exports = {
  updateItems,
};
