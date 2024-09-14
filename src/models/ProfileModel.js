const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    cus_address: { type: String, required: true },
    cus_city: { type: String, required: true },
    cus_country: { type: String, required: true },
    cus_name: { type: String, required: true },
    cus_phone: { type: String, required: true },
    cus_postcode: { type: String, required: true },
    cus_state: { type: String, required: true },
    ship_address: { type: String, required: true },
    ship_city: { type: String, required: true },
    ship_country: { type: String, required: true },
    ship_name: { type: String, required: true },
    ship_phone: { type: String, required: true },
    ship_postcode: { type: String, required: true },
    ship_state: { type: String, required: true },

},
    {
        timestamps: true,
        versionKey: false,
    },

);

const ProfileModel = mongoose.model("profiles", DataSchema);
module.exports = ProfileModel;