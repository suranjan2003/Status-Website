import Service from "../models/service.model.js";
import mongoose from "mongoose";
import express from "express";


export const getServices = async (req, res) => {
	try {
		const services = await Service.find();
		res.status(200).json({ success: true, data: services });
	} catch (error) {
		console.error("Error fetching services:", error.message);
		res.status(500).json({ success: false, message: error.message });
	}
}

export const createService = async (req, res) => {
	const service = req.body;

	const newService = new Service(service);

	try {
		await newService.save();
		res.status(201).json({success: true, data: newService});
	} catch (error) {
		console.log("Error creating service:", error.message);
		res.status(500).json({ success: false ,message: error.message });
	}
}

export const updateService = async (req, res) => {
	const { id } = req.params;
	const service = req.body;

	if (!id) {
		return res.status(400).json({ success: false, message: 'Service ID is required' });
	}
	if (!service) {
		return res.status(400).json({ success: false, message: 'Service data is required' });
	}
	try{
		const updatedService = await Service.findByIdAndUpdate(id, service, { new: true });
		res.status(200).json({success: true, data: updatedService});
	}catch (error) {
		console.log("Error updating service:", error.message);
		res.status(500).json({ success: false, message: error.message });
	}
}

export const deleteService = async (req, res) => {
	const { id } = req.params;

	try{
		const service = await Service.findByIdAndDelete(id);
		if (!service) {
			return res.status(404).json({ success: false, message: 'Service not found' });
		}
		res.status(200).json({ success: true, message: 'Service deleted successfully' });
	}catch (error) {
		console.log("Error deleting service:", error.message);
		res.status(500).json({ success: false, message: error.message });
	}
}