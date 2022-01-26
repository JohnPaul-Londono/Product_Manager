const mongoose = require("mongoose");

const ProductManagerSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require: [true, "Title must be 3 Characters Long "],
			minLength: [3, "Title must be 3 Characters Long "]
		},
		price: {
			type: Number,
			require: [true, "Must Be more then $0.00 "],
			min: [0]
		},
		description: {
			type: String,
			require: [true, "Description must be 3 Characters Long "],
			minLength: [3, "Description must be 3 Characters Long "]
		}

	},
	{ timestamps: true }
);

const Products = mongoose.model("Products", ProductManagerSchema);

module.exports = Products;