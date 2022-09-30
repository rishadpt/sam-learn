const { updateItems } = require("/opt/nodejs/datastore/updateItems");
const { Users } = require("/opt/nodejs/entities/Users");

exports.handler = async (event) => {
  if (event.httpMethod !== "PUT") {
    throw new Error(
      `PUT METHOD only accepts PUT method, you tried: ${event.httpMethod} method.`
    );
  }
  try{
    const body = JSON.parse(event.body);
    const item = new Users(body)
    const result = await updateItems(item);
    console.log("BODY TESTING",event.body)
    const response = {
      statusCode: 200,
      body: JSON.stringify({ message: "user is updated successfully"}),
    };
  
    console.info(
      `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
    );
  
    return response;
  }catch(e) {
    const response = {
      statusCode: 503,
      body: JSON.stringify({ message: "failed to update user",Error:e}),
    };
    return response;
  }

};
