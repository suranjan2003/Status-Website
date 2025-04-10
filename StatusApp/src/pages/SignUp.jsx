// import React, { useState } from "react";
// import { IoMdEye, IoMdEyeOff } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

// function SignUp() {
// 	const navigate = useNavigate();

// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [confirmPassword, setConfirmPassword] = useState("");
// 	const [showPassword, setShowPassword] = useState(false);
// 	const [error, setError] = useState("");
// 	const [success, setSuccess] = useState("");

// 	const handleSignup = async () => {
// 		setError("");
// 		setSuccess("");

// 		if (password !== confirmPassword) {
// 			setError("Passwords do not match");
// 			return;
// 		}

// 		try {
// 			const response = await fetch("http://localhost:4321/api/signup", {
// 				method: "POST",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify({ email, password }),
// 			});

// 			if (!response.ok) {
// 				const errorData = await response.json();
// 				throw new Error(errorData.message || "Signup failed");
// 			}

// 			setSuccess("Account created successfully!");
// 			setTimeout(() => navigate("/login"), 1500); // Redirect after success
// 		} catch (err) {
// 			setError(err.message);
// 		}
// 	};

// 	return (
// 		<div className="flex items-center justify-center min-h-screen bg-[#022c22] relative px-4 sm:px-0">
// 			<div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm relative z-10">
// 				<div className="mb-5 flex items-center justify-center">
// 					<h1>Status App</h1>
// 				</div>

// 				<h2 className="text-center text-green-700 text-2xl sm:text-3xl font-bold mb-6">
// 					Sign Up
// 				</h2>

// 				{/* Email Input */}
// 				<input
// 					type="email"
// 					placeholder="Email"
// 					value={email}
// 					onChange={(e) => setEmail(e.target.value)}
// 					className="w-full py-2 px-3 mb-4 bg-gray-300 rounded text-black placeholder-gray-400 focus:ring-2 focus:ring-green-600 focus:outline-none"
// 				/>

// 				{/* Password Input */}
// 				<div className="mb-4 flex items-center relative">
// 					<input
// 						type={showPassword ? "text" : "password"}
// 						placeholder="P@ssword"
// 						value={password}
// 						onChange={(e) => setPassword(e.target.value)}
// 						className="w-full py-2 pl-3 pr-10 bg-gray-300 rounded text-black placeholder-gray-400 focus:ring-2 focus:ring-green-600 focus:outline-none"
// 					/>
// 					<button
// 						type="button"
// 						className="absolute right-3 text-xl text-[#4cae34] hover:text-[#022c22] focus:outline-none"
// 						onClick={() => setShowPassword(!showPassword)}
// 					>
// 						{showPassword ? <IoMdEye /> : <IoMdEyeOff />}
// 					</button>
// 				</div>

// 				{/* Confirm Password Input */}
// 				<div className="mb-4 flex items-center relative">
// 					<input
// 						type={showPassword ? "text" : "password"}
// 						placeholder="Confirm Password"
// 						value={confirmPassword}
// 						onChange={(e) => setConfirmPassword(e.target.value)}
// 						className="w-full py-2 pl-3 pr-10 bg-gray-300 rounded text-black placeholder-gray-400 focus:ring-2 focus:ring-green-600 focus:outline-none"
// 					/>
// 				</div>

// 				{/* Error/Success Message */}
// 				{error && <p className="text-red-500 text-sm mb-4">{error}</p>}
// 				{success && <p className="text-green-600 text-sm mb-4">{success}</p>}

// 				{/* Sign-Up Button */}
// 				<button
// 					onClick={handleSignup}
// 					className="w-full py-2 bg-[#4cae34] hover:bg-[#022c22] text-white font-semibold rounded transition-all duration-200"
// 				>
// 					Create Account
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// export default SignUp;

import React from 'react'

const SignUp = () => {
  return (
	<div>SignUp</div>
  )
}

export default SignUp