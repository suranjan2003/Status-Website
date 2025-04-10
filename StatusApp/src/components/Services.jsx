import React, { useState } from "react";
import AddServiceModal from "./AddServiceModal";
import EditServiceModal from "./EditServiceModal";

const Services = () => {
  const [services, setServices] = useState([]);
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [showEditServiceModal, setShowEditServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // State for new service input fields
  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceDescription, setNewServiceDescription] = useState("");
  const [newServiceStatus, setNewServiceStatus] = useState("Operational");
  const [newOrganizationId, setNewOrganizationId] = useState("");


  const statusStyles = {
	Operational: "bg-green-100 text-green-700",
	Degraded: "bg-yellow-100 text-yellow-700",
	Partial_Outage: "bg-orange-100 text-orange-700",
	Major_Outage: "bg-red-100 text-red-700",
};

  const handleOpenAddModal = () => setShowAddServiceModal(true);
  const handleCloseAddModal = () => {
    setShowAddServiceModal(false);
    setNewServiceName("");
    setNewServiceDescription("");
    setNewServiceStatus("Operational");
    setNewOrganizationId("");
  };

  const handleOpenEditModal = (service) => {
    setSelectedService(service);
    setShowEditServiceModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditServiceModal(false);
    setSelectedService(null);
  };

  const handleAddNewService = (e) => {
    e.preventDefault();
    const newService = {
      id: Date.now(),
      name: newServiceName,
      description: newServiceDescription,
      status: newServiceStatus,
      organization_id: newOrganizationId,
    };
    setServices([...services, newService]);
    handleCloseAddModal();
  };

  const handleSaveEditedService = (e) => {
    e.preventDefault();
    setServices((prev) =>
      prev.map((service) =>
        service.id === selectedService.id ? selectedService : service
      )
    );
    handleCloseEditModal();
  };

  return (
    <div className="p-2 md:p-6 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center px-2 md:px-6 py-4 border-b bg-gray-50">
                <h2 className="text-lg md:text-2xl font-bold text-gray-700">
                    Service Management
                </h2>
                <button
                    onClick={handleOpenAddModal}
                    className="bg-blue-600 text-white text-sm md:text-base m-2 px-1 md:px-3 py-2 rounded-md hover:bg-blue-700 shadow-md transition"
                >
                    + Add Service
                </button>
            </div>
			<div className="overflow-x-auto">
      {services.length === 0 ? (
        <p className="text-gray-600">No services available.</p>
      ) : (
        <table className="min-w-full text-sm">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="px-6 py-3 text-gray-600 font-medium">Name</th>
                            <th className="px-6 py-3 text-gray-600 font-medium">Description</th>
                            <th className="px-6 py-3 text-gray-600 font-medium">Status</th>
                            <th className="px-6 py-3 text-gray-600 font-medium">Organization ID</th>
                            <th className="px-6 py-3 text-gray-600 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => (
                            <tr
                                key={index}
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
									<td className="px-6 py-3">
										<button
											onClick={() => handleOpenEditModal(service)}
											className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition text-xs"
										>
											Edit
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
          newServiceName={newServiceName}
          newServiceDescription={newServiceDescription}
          newServiceStatus={newServiceStatus}
          newOrganizationId={newOrganizationId}
          setNewServiceName={setNewServiceName}
          setNewServiceDescription={setNewServiceDescription}
          setNewServiceStatus={setNewServiceStatus}
          setNewOrganizationId={setNewOrganizationId}
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
