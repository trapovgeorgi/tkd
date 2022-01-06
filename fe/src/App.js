import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Layout/Dashboard";
import LoginPage from "./pages/LoginPage";

function App() {
	
	return (
		<Dashboard>
			<Routes>
				<Route exact path="/login" element={<LoginPage />} />
			</Routes>
		</Dashboard>
	);
}

export default App
