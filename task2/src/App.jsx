
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "./Pages/Login";
import Header from "./Components/Header";

const App = () => {

    return (

        <BrowserRouter>

            <Routes>

                {/* Login */}
                <Route
                    path="/"
                    element={<Login />}
                />

                {/* Header */}
                <Route
                    path="/header"
                    element={<Header />}
                />

            </Routes>

        </BrowserRouter>

    );
};

export default App;
