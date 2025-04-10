import React, { useEffect } from "react";
import { useServiceStore } from "../store/service";

const statusStyles = {
  Operational: "bg-green-100 text-green-700",
  Degraded: "bg-yellow-100 text-yellow-700",
  Partial_Outage: "bg-orange-100 text-orange-700",
  Major_Outage: "bg-red-100 text-red-700",
};

const Home = () => {
  const { services, fetchServices } = useServiceStore();

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">Service Dashboard</h1>

      <div className="rounded-lg shadow-lg border border-gray-200 bg-white overflow-hidden">
        {services.length === 0 ? (
          <p className="text-gray-600 px-6 py-6 text-center">No services available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-6 py-3 font-medium text-gray-700">Service</th>
                  <th className="text-left px-6 py-3 font-medium text-gray-700">Status</th>
                  <th className="text-left px-6 py-3 font-medium text-gray-700">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={service._id}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-3 text-gray-800">{service.name}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-3 py-1 rounded-full font-semibold text-xs ${
                          statusStyles[service.status]
                        }`}
                      >
                        {service.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-gray-500 text-sm">{new Date(service.updatedAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
