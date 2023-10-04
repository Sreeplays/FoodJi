const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    Order:{
        type:'String',
        required: true

    },
    OrderId:{
        type:'Number',
        required: true
    },
    CustomerName: {
        type:'String',
        required: true
    },
    CustomerAddress: {
        type:'String',
        required: true
    },
    DeliveryDate: {
        type:'String',
        required: true
    }
}, { timestamps: true })
module.exports = mongoose.model('Workout', ordersSchema);