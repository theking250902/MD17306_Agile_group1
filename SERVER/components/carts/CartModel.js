const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    id: { type: ObjectId }, // khóa chính
    name: {type: String}, // kiểu dữ liệu},
    price:{type:Number},
    quantity:{type:Number},
    image:{type:String},
    id_user:{type:String},
});
module.exports = mongoose.models.cart || mongoose.model('cart', schema);
// cart -----> cart