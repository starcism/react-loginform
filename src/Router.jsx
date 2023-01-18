import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignUp";
import SignUp from "./pages/SignIn";

const Router = () => {
    return (
        <Routes>
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
        </Routes>
    );
}

export default Router;