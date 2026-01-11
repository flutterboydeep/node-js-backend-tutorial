const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subTitle: { type: String, },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true, // lasrge data mai user ki posts ko milisencons mai fetch kr leta hai 
    },

},
    { timestamps: true }

);
module.exports = mongoose.model("Post", postSchema);