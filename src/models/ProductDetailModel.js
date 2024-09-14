const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
        img1: { type: String, required: true },
        img2: { type: String, required: true },
        img3: { type: String, required: true },
        img4: { type: String, required: true },
        img5: {typeof:String},
        img6: {typeof:String},
        img7: {typeof:String},
        img8: {typeof:String},

        des: { type: String, required: true },
        color: { type: String, required: true },
        size: { type: String, required: true },

        productID: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
},
    {
        timestamps: true,
        versionKey: false,
    },

);

const ProductDetailModel = mongoose.model("productdetails", DataSchema);
module.exports = ProductDetailModel;