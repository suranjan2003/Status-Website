import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { dataAction } from "../store";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function LoginPage() {
	const navigate = useNavigate();
	// const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");

	const handleSignIn = async () => {
		setError(""); // Reset error message

		try {
			const storedToken = localStorage.getItem("adminToken");
			if (storedToken) {
				navigate("/dashboard");
				return;
			}

			const response = await fetch("http://localhost:4321/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				throw new Error("Invalid email or password"); // Stop execution
			}

			const data = await response.json();

			if (!data.accessToken) {
				throw new Error("Authentication failed: No token received");
			}

			// Store token in localStorage
			localStorage.setItem("adminToken", data.accessToken);
			console.log("Stored Token:", localStorage.getItem("adminToken"));

			// Store user info in Redux
			dispatch(dataAction.setAdminUser({ email }));

			// Navigate only if authentication is successful
			navigate("/dashboard");
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#022c22] relative px-4 sm:px-0">
			{/* Login Box */}
			<div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm relative z-10">
				{/* Brand Image */}
				<div className="mb-5 flex items-center justify-center">
					<h1>Status App</h1>
				</div>

				{/* Sign In Header */}
				<h2 className="text-center text-green-700 text-2xl sm:text-3xl font-bold mb-6">
					Sign In
				</h2>

				{/* Email Input */}
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)} // Update email state
					className="w-full py-2 px-3 mb-4 bg-gray-300 rounded text-black placeholder-gray-400 focus:ring-2 focus:ring-green-600 focus:outline-none"
				/>

				{/* Password Input with Show Password */}
				<div className="mb-4 flex items-center relative">
					<input
						type={showPassword ? "text" : "password"}
						placeholder="P@ssword"
						value={password}
						onChange={(e) => setPassword(e.target.value)} // Update password state
						className="w-full py-2 pl-3 pr-10 bg-gray-300 rounded text-black placeholder-gray-400 focus:ring-2 focus:ring-green-600 focus:outline-none"
					/>
					<button
						type="button"
						className="absolute right-3 text-xl text-[#4cae34] hover:text-[#022c22] focus:outline-none"
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? <IoMdEye /> : <IoMdEyeOff />}
					</button>
				</div>

				{/* Error Message */}
				{error && <p className="text-red-500 text-sm mb-4">{error}</p>}

				{/* Sign-In Button */}
				<button
					onClick={handleSignIn} // Handle sign-in logic
					className="w-full py-2 bg-[#4cae34] hover:bg-[#022c22] text-white font-semibold rounded transition-all duration-200"
				>
					Sign In
				</button>
			</div>
		</div>
	);
}

export default LoginPage;
