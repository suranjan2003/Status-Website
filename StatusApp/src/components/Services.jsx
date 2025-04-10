import React, { useEffect, useState } from "react";
import axios from "axios";
import AddServiceModal from "./AddServiceModal";
import EditServiceModal from "./EditServiceModal";
import { useServiceStore } from "../store/service";

const Services = () => {
	// const [services, setServices] = useState([]);
	const { services, fetchServices } = useServiceStore();

	const [showAddServiceModal, setShowAddServiceModal] = useState(false);
	const [showEditServiceModal, setShowEditServiceModal] = useState(false);
	const [selectedService, setSelectedService] = useState(null);
	const [newService, setNewService] = useState({
		name: "",
		description: "",
		status: "Operational",
		organization_id: "",
	});

	const statusStyles = {
		Operational: "bg-green-100 text-green-700",
		Degraded: "bg-yellow-100 text-yellow-700",
		Partial_Outage: "bg-orange-100 text-orange-700",
		Major_Outage: "bg-red-100 text-red-700",
	};

	// Replace with your backend URL
	const API_URL = "http://localhost:5000/api/services";

	useEffect(() => {
		fetchServices();
	}, []);

	// const fetchServices = async () => {
	// 	try {
	// 		const response = await axios.get(API_URL);
	// 		console.log("Fetched services:", response.data);
	// 		setServices(response.data.data);
	// 	} catch (error) {
	// 		console.error("Error fetching services:", error);
	// 	}
	// };

	const handleOpenAddModal = () => setShowAddServiceModal(true);

	const handleCloseAddModal = () => {
		setShowAddServiceModal(false);
		setNewService({
			name: "",
			description: "",
			status: "Operational",
			organization_id: "",
		});
	};

	const handleOpenEditModal = (service) => {
		setSelectedService(service);
		setShowEditServiceModal(true);
	};

	const handleCloseEditModal = () => {
		setShowEditServiceModal(false);
		setSelectedService(null);
	};

	const {addService}=useServiceStore()
	const handleAddNewService = async (e) => {
		e.preventDefault();
		// try {
		// 	const response = await axios.post(API_URL, newService);
		// 	setServices([...services, response.data]);
		// 	handleCloseAddModal();
		// } catch (error) {
		// 	console.error("Error adding new service:", error);
		// }
		const {success,message}=await addService(newService)
		if(success){
			alert(message);
			fetchServices();
			handleCloseAddModal();
		}
	};

	const { editService } = useServiceStore();

const handleSaveEditedService = async (e) => {
	e.preventDefault();
	const { success, message } = await editService(selectedService._id, selectedService);
	if (success) {
		alert(message);
		fetchServices();
		handleCloseEditModal();
	} else {
		alert(message || "Update failed");
	}
};

	const {deleteService}=useServiceStore()
	const handledeleteModal = async (serviceId) => {
		const {success, message}= await deleteService(serviceId);
		if(success){
			alert(message);
			fetchServices();
		}
	}

	return (
		<div className="p-2 md:p-6 bg-white shadow-md rounded-md">
			<div className="flex justify-between items-center px-2 md:px-6 py-4 border-b bg-gray-50">
				<h2 className="text-lg md:text-2xl font-bold text-gray-700">Service Management</h2>
				<button
					onClick={handleOpenAddModal}
					className="bg-blue-600 text-white text-sm md:text-base m-2 px-1 md:px-3 py-2 rounded-md hover:bg-blue-700 shadow-md transition"
				>
					+ Add Service
				</button>
			</div>

			<div className="overflow-x-auto">
				{services.length === 0 ? (
					<p className="text-gray-600 px-6 py-4">No services available.</p>
				) : (
					<table className="min-w-full text-sm">
						<thead>
							<tr className="bg-gray-100 text-left">
								<th className="px-6 py-3 text-gray-600 font-medium">Name</th>
								<th className="px-6 py-3 text-gray-600 font-medium">Description</th>
								<th className="px-6 py-3 text-gray-600 font-medium">Status</th>
								<th className="px-6 py-3 text-gray-600 font-medium">Organization</th>
								<th className="px-6 py-3 text-gray-600 font-medium">Actions</th>
							</tr>
						</thead>
						<tbody>
							{services.map((service) => (
								<tr
									key={service._id}
									className="border-t hover:bg-gray-50 transition duration-200"
								>
									<td className="px-6 py-3">{service.name}</td>
									<td className="px-6 py-3">{service.description}</td>
									<td className="px-6 py-3">
										<span
											className={`px-3 py-1 rounded-full text-xs font-semibold ${
												statusStyles[service.status]
											}`}
										>
											{service.status}
										</span>
									</td>
									<td className="px-6 py-3">{service.organization_id}</td>
									<td className="flex gap-1 px-6 py-3">
										<button
											onClick={() => handleOpenEditModal(service)}
											className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition text-xs"
										>
											Edit
										</button>
										<button
											onClick={() => handledeleteModal(service._id)}
											className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition text-xs"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>

			{showAddServiceModal && (
				<AddServiceModal
					newService={newService}
					setNewService={setNewService}
					handleAddNewService={handleAddNewService}
					handleCloseAddModal={handleCloseAddModal}
				/>
			)}

			{showEditServiceModal && (
				<EditServiceModal
					selectedService={selectedService}
					setSelectedService={setSelectedService}
					handleSaveEditedService={handleSaveEditedService}
					handleCloseEditModal={handleCloseEditModal}
				/>
			)}
		</div>
	);
};

export default Services;
