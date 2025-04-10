import React from "react";

const services = [
  { name: "Website", status: "Operational", updatedAt: "5 mins ago" },
  { name: "API", status: "Degraded", updatedAt: "10 mins ago" },
  { name: "Database", status: "Operational", updatedAt: "30 mins ago" },
];

const statusStyles = {
	Operational: "bg-green-100 text-green-700",
	Degraded: "bg-yellow-100 text-yellow-700",
	Partial_Outage: "bg-orange-100 text-orange-700",
	Major_Outage: "bg-red-100 text-red-700",
};

const Home = () => {
  return (
    <div className="p-6 space-y-4">

      <div className="bg-green-100 text-green-800 py-4 px-6 text-center rounded-md font-semibold text-lg">
        Dashboard
      </div>

      <div className="border rounded-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Service</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {services.map(({ name, status, updatedAt }) => (
              <tr key={name} className="border-t">
                <td className="px-4 py-2">{name}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full font-medium text-xs ${statusStyles[status]}`}
                  >
                    {status}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-500">{updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
