import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		auto: true,
	},
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	organization_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Organization",
		required: false,
	},
	// last_updated: {
	// 	type: Date,
	// 	default: Date.now,
	// },
	// created_at: {
	// 	type: Date,
	// 	default: Date.now,
	// },
},{
	timestamps: true, // created_at and updated_at fields
});

const Service = mongoose.model("Service", serviceSchema);
export default Service;