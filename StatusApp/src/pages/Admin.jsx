import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';

const Admin = () => {
	const [activeSection, setActiveSection] = useState("services");

	return (
		<div id="admin" className="min-h-screen bg-gray-200">
			<div className="flex flex-col md:flex-row">
				<Sidebar activeSection={activeSection} setActiveSection={setActiveSection}  />

				{/* Main content */}
				<div className="flex-1 p-4 md:p-8">
					{activeSection === "services" && <Services />}
					{activeSection === "incidents" && (
						<div id="incidents">
							<h2 className="text-2xl font-bold mb-2">Incidents</h2>
							<p>Incident management UI goes here...</p>
						</div>
					)}
					{activeSection === "team-members" && (
						<div id="team-members">
							<h2 className="text-2xl font-bold mb-2">Team Members</h2>
							<p>Team member details go here...</p>
						</div>
					)}
					{activeSection === "settings" && (
						<div id="settings">
							<h2 className="text-2xl font-bold mb-2">Settings</h2>
							<p>Admin settings go here...</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Admin;
