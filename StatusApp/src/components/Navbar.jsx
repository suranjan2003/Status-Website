import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { dataAction } from "../store";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	// const dispatch = useDispatch();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleLogout = () => {
		setIsModalOpen(true); // Open the modal for the second confirmation
	};

	const handleCancelLogout = () => {
		setIsModalOpen(false); // Close the modal
	};

	const handleConfirmLogout = () => {
		setIsModalOpen(false);
		// localStorage.removeItem("adminToken");// Remove token from localStorage
		// dispatch(dataAction.setAdminUser(null)); // Clear user data from Redux
		navigate("/"); // Redirect to login page
	};

	const navItems = [
		{ path: "/", label: "Dashboard" },
		{ path: "/admin", label: "Admin" },
	];

	return (
		<>
			<header className="bg-gray-800 p-4 shadow-lg fixed top-0 left-0 w-full z-50 h-16">
				<div className="max-w-8xl mx-auto flex items-center justify-between">
					<div className="flex items-center gap-2">
						<h1 className="text-white text-xl md:text-2xl font-bold tracking-wide">StatusApp</h1>
					</div>
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="text-gray-200 hover:text-white focus:outline-none"
						>
							<FaBars size={20} />
						</button>
					</div>
					<ul className="hidden md:flex items-center gap-6">
						{navItems.map((item) => (
							<li key={item.path}>
								<a
									href={item.path}
									className={`text-base font-medium transition-colors duration-300 text-gray-200 hover:text-white hover:underline`}
								>
									{item.label}
								</a>
							</li>
						))}
						{/* Logout Button */}
						{/* <li>
							<button
								onClick={handleLogout}
								className="text-red-500 hover:text-red-700 font-semibold text-base"
							>
								Logout
							</button>
						</li> */}
					</ul>
				</div>
				{isMenuOpen && (
					<ul className="md:hidden flex flex-col mt-2 space-y-2 bg-gray-700 p-4 rounded-md shadow-md">
						{navItems.map((item) => (
							<li key={item.path}>
								<a
									href={item.path}
									className={`text-base font-medium block transition-colors duration-300 text-gray-200 hover:text-white hover:underline`}
								>
									{item.label}
								</a>
							</li>
						))}
						{/* Logout Button for Mobile View */}
						{/* <li>
							<button
								onClick={handleLogout}
								className="text-red-500 hover:text-red-700 font-semibold text-base"
							>
								Logout
							</button>
						</li> */}
					</ul>
				)}
			</header>

			{/* Logout Confirmation Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded shadow-lg text-black w-10/12 sm:w-3/4 md:w-2/3 lg:w-1/3">
						<h2 className="text-lg md:text-xl font-bold mb-4">
							Confirm Logout
						</h2>
						<p className="text-sm md:text-base">
							Are you sure you want to log out of your session?
						</p>
						<div className="mt-4 flex justify-end gap-4">
							<button
								onClick={handleCancelLogout}
								className="py-2 px-4 bg-gray-300 hover:bg-gray-400 rounded text-sm md:text-base font-medium"
							>
								Cancel
							</button>
							<button
								onClick={handleConfirmLogout}
								className="py-2 px-4 bg-red-600 hover:bg-red-500 text-white rounded text-sm md:text-base font-medium"
							>
								Confirm
							</button>
						</div>
					</div>
				</div>
			)}
			<div className="h-16" />
		</>
	);
};

export default Navbar;
