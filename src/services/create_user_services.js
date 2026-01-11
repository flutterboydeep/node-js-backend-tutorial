const user = require("../models/user_model");
exports.createUser = async (data) => {
    console.log("your data is for create user ", data);
    const rerurnData = user.insertOne(data);
    return rerurnData;
}