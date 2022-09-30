const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();

const tableName = process.env.SAMPLE_TABLE;

const updateItems = async (item) => {

  var params = {
    TableName: tableName,
    Key: item.key()
  };
  console.log("Loging params",params.Key,item.updateExpression())
  try{
    const expression = item.updateExpression()
    console.log(expression)
    return await docClient.update(params,expression).promise();
  }catch(e){
    console.log(e);
  }

};

module.exports = {
  updateItems,
};
