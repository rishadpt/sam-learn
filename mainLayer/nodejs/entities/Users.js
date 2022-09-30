const { generateUid } = require("./Util.js");

class Users {
  constructor(data) {
    this.id = data.id || generateUid();
    this.name = data.name;
    this.category = data.category;
  }

  tableName = process.env.SAMPLE_TABLE;

  getCategoryExpression() {
    return {
      TableName: this.tableName,
      IndexName: "GSI",
      KeyConditionExpression:
        "#GS1PK = :gs1pk AND begins_with (#GS1SK, :gs1sk)",
      ExpressionAttributeNames: {
        "#GS1PK": "GS1PK",
        "#GS1SK": "GS1SK",
      },
      ExpressionAttributeValues: {
        ":gs1pk": this.gs1pk(),
        ":gs1sk": `category#{this.category}`,
      },
    };
  }

  updateExpression() {
    return {
      UpdateExpression: "set #ns = :n,#cy = :c",
      ExpressionAttributeNames: {
        "#ns": "name",
        "#cy": "category",
      },
      ExpressionAttributeValues: {
        ":n": this.name,
        ":c": this.category,
      },
    };
  }

  pk() {
    return `id`;
  }

  sk() {
    return `id#${this.id}`;
  }
  gs1pk() {
    return `category`;
  }

  gs1sk() {
    return `category#${this.category}`;
  }
  gs1() {
    return {
      GS1PK: this.gs1pk(),
      GS1SK: this.gs1sk(),
    };
  }

  key() {
    return {
      PK: this.pk(),
      SK: this.sk(),
    };
  }

  toAddItem() {
    const item = {
      ...this.key(),
      ...this.gs1(),
      name: this.name,
      category: this.category,
    };
    console.log(item);
    return item;
  }
}

module.exports = {
  Users,
};
