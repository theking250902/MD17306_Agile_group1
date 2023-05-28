const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    id: { type: ObjectId }, // khóa chính
    name: {type: String}, // kiểu dữ liệu},
    author:{type:String},
    content:{type:String},
    price:{type:Number},
    image:{type:String},
    category:{type:ObjectId,ref:'category'},
});
module.exports = mongoose.models.product || mongoose.model('product', schema);
// product -----> products