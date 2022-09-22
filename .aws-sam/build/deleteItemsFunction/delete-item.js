const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();
const tableName = process.env.SAMPLE_TABLE;


exports.deleteItemFunction = async (event)=>{
    if (event.httpMethod !== 'DELETE'){
        throw new Error(`Delete METHOD only accepts Delete method, you tried: ${event.httpMethod} method.`);
    }

   var params = {
        TableName : tableName,
        Key:{id : event.pathParameters.id}
    }

    await docClient.delete(params).promise()

    const response = {
        statusCode: 200,
        body: JSON.stringify({message:"user is Deleted successfully"})
    };
    return response
}