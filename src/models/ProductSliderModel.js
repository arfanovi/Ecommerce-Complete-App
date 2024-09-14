const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: Number, required: true },

        productID: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },

},
    {
        timestamps: true,
        versionKey: false,
    },

);

const ProductSliderModel = mongoose.model("productsliders", DataSchema);
module.exports = ProductSliderModel;