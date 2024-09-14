const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({


    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },

},
    {
        timestamps: true,
        versionKey: false,
    },

);

const FeaturesModel = mongoose.model("", DataSchema);
module.exports = InvoiceProductModel;