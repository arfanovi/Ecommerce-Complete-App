const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        discount: { type: Boolean, required: true },
        discount_price: { type: Number, required: true },
        image: { type: String, required: true },
        stock:{type:Boolean,required:true},
        star:{type:Number,required:true},
        remarks:{type:String,required:true},
        categoryIDd: { type: mongoose.Schema.Types.ObjectId, ref: "categories", required: true },
        brandID: { type: mongoose.Schema.Types.ObjectId, ref: "brands", required: true },
},
    {
        timestamps: true,
        versionKey: false,
    },

);

const ProductModel = mongoose.model("products", DataSchema);
module.exports = ProductModel;