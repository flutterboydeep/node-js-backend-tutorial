const User = require('../models/user_model');

exports.getUser = async () => {
    console.log("get User funcion is running");
    return await User.find();
};