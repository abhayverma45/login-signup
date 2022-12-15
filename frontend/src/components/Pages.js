import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalState } from "../GlobalState";
import Aboutme from "./Aboutme";
import Home from "./Home";
import Logout from "./Logout";
import NotFound from "./NotFound";

import SignUp from "./Signup";

const Pages = () => {
  const state = useContext(GlobalState);
  const [loginstate, setLoginstate] = state.loginstate;
  return (
    <>
      {loginstate ? (
        <Routes>
        <Route path="/" element={<SignUp />} />
          <Route path="/login-signup-frontend/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login-signup-frontend/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) }
    </>
  );
};
export default Pages;
