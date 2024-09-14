const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({

    productID: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    rating: { type: Number, required: true },
    // comment: { type: String, required: true },

},
    {
        timestamps: true,
        versionKey: false,
    },

);

const ReviewModel = mongoose.model("reviews", DataSchema);
module.exports = ReviewModel;