// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import './App.css'
// import Home from "./pages/Home";
// import Admin from "./pages/Admin";

// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/admin" element={<Admin/>} />
//       </Routes>
//     </Router>
//   )
// }

// export default App

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />

				<Route path="/" element={<Home />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
};

export default App;
