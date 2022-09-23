
class Users {

    constructor(data){
        this.name = data.name;
        this.id = data.id;
        this.category = data.category;
    }

    updateExpression(){
        return {
            UpdateExpression: "set #ns= :n,#cy= :c",
            ExpressionAttributeValues: {
              ":n": this.name,
              ":c": this.category,
            },
            ExpressionAttributeNames: {
              "#ns": "name",
              "#cy": "category",
            },
        }
    }

}



module.exports = {
    Users
}