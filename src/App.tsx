import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AirportDetailPage } from "./pages/AirportDetailPage";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
    return (
        <>
            <Navigation></Navigation>
            <Routes>
                <Route path="/" element={<MainPage></MainPage>}></Route>
                <Route
                    path="/airport/:id"
                    element={<AirportDetailPage></AirportDetailPage>}
                ></Route>
            </Routes>
        </>
    );
}

export default App;
