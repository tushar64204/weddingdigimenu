import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}

			<Route path="/main" exact element={<Main />} />
			
			<Route path="/" element={<Navigate replace to="/main" />} />
		</Routes>
	);
}

export default App;
