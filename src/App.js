import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./main.jsx";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			
		</Routes>
	);
}

export default App;
