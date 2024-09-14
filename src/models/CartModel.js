const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({

    productID: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    quantity: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    

},
    {
        timestamps: true,
        versionKey: false,
    },

);

const CartModel = mongoose.model("carts", DataSchema);
module.exports = CartModel;