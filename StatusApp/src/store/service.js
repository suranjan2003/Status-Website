import {create} from 'zustand';

export const useServiceStore = create((set) => ({
	services: [],
	setServices: (services) => set({ services }),
	addService: async (newService) => {
		if (!newService) return {success: false, error: "Service is required"};
		const res = await fetch("/api/services", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newService),
		})
		const data = await res.json();
		set((state) => ({
			services: [...state.services, data.data],
		}));
		return {success: true, message: "Service added successfully"};
	},
	deleteService: async (serviceId) => {
		if (!serviceId) return {success: false, error: "Service ID is required"};
		const res = await fetch(`/api/services/${serviceId}`, {
			method: "DELETE",
		})
		const data = await res.json();
		if(!data.success) return {success: false, error: data.error};
		set((state) => ({
			services: state.services.filter(service => service.id !== serviceId),
		}));
		return {success: true, message: "Service deleted successfully"};
	},
	editService: async (serviceId, updatedService) => {
		if (!serviceId || !updatedService) {
			return { success: false, error: "Service ID and updated service are required" };
		}
		try {
			const res = await fetch(`/api/services/${serviceId}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedService),
			});
			const data = await res.json();
	
			if (!data.success) return { success: false, error: data.message };
	
			set((state) => ({
				services: state.services.map((service) =>
					service._id === serviceId ? data.data : service
				),
			}));
	
			return { success: true, message: "Service updated successfully" };
		} catch (error) {
			console.error("editService error:", error);
			return { success: false, error: "Failed to update service" };
		}
	},
	fetchServices: async () => {
		try {
			const res = await fetch('/api/services');
			const data = await res.json();

			if (!data.success) {
				console.error('Error fetching services:', data.message);
				set({ services: [] }); // optional fallback
				return;
			}

			set({ services: data.data });
		} catch (error) {
			console.error('Fetch services error:', error);
			set({ services: [] }); // optional fallback
		}
	}
	
}));

