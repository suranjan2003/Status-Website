import React from "react";

const AddServiceModal = ({
	newService,
	setNewService,
	handleAddNewService,
	handleCloseAddModal,
}) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-10">
			<div className="bg-white m-2 p-6 rounded-md shadow-md max-w-96 relative">
				<h3 className="text-lg font-bold mb-4">Add New Service</h3>
				<form className="space-y-4" onSubmit={handleAddNewService}>
					<input
						type="text"
						placeholder="Service Name"
						value={newService.name}
						onChange={(e) =>
							setNewService({ ...newService, name: e.target.value })
						}
						className="w-full border px-3 py-2 rounded"
						required
					/>
					<textarea
						placeholder="Description"
						value={newService.description}
						onChange={(e) =>
							setNewService({ ...newService, description: e.target.value })
						}
						className="w-full border px-3 py-2 rounded"
						required
					/>
					<select
						value={newService.status}
						onChange={(e) =>
							setNewService({ ...newService, status: e.target.value })
						}
						className="w-full border px-3 py-2 rounded"
					>
						<option value="Operational">Operational</option>
						<option value="Degraded">Degraded</option>
						<option value="Partial_Outage">Partial Outage</option>
						<option value="Major_Outage">Major Outage</option>
					</select>
					<input
						type="text"
						placeholder="Organization ID"
						value={newService.organization_id}
						onChange={(e) =>
							setNewService({ ...newService, organization_id: e.target.value })
						}
						className="w-full border px-3 py-2 rounded"
					/>
					<div className="flex justify-end space-x-2">
						<button
							type="button"
							onClick={handleCloseAddModal}
							className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
						>
							Add
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddServiceModal;
