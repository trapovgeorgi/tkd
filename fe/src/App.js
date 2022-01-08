import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Layout/Dashboard";
import ArchivePage from "./pages/ArchivePage";
import LoginPage from "./pages/LoginPage";

function App() {
	
	return (
		<Dashboard>
			<Routes>
				<Route exact path="/login" element={<LoginPage />} />
				<Route exact path="/archive" element={<ArchivePage />} />
			</Routes>
		</Dashboard>
	);
}

export default App
