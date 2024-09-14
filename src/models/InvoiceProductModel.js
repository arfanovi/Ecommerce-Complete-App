const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({


    userID: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
    invoiceID: { type: mongoose.Schema.Types.ObjectId, ref: "invoices", required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    total: { type: Number, required: true },

},
    {
        timestamps: true,
        versionKey: false,
    },

);

const InvoiceProductModel = mongoose.model("invoiceproducts", DataSchema);
module.exports = InvoiceProductModel;