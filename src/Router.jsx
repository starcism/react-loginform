import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signup";
import SignUp from "./pages/Signin";
import Home from "./pages/Home";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
        </Routes>
    );
}

export default Router;