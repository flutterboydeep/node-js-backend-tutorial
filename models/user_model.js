
const mongos = require('mongoose');

const userSchema = mongos.Schema({
    username: String,
    address: [
        {
            location: String,
            city: String,
        }
    ]
});
module.exports = userSchema;