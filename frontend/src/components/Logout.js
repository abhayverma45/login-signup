import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../GlobalState";

const Logout = () => {
  const navigate = useNavigate();
  const state = useContext(GlobalState);
  const [loginstate, setLoginstate] = state.loginstate;
  useEffect(() => {
    localStorage.setItem("firstLogin", false);
    setLoginstate(false);
    navigate("/signup");
  }, []);
  return (
    <>
      <h1>Logging Out...</h1>
    </>
  );
};
export default Logout;
