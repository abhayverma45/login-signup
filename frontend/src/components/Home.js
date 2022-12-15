import { width } from "@mui/system";
import background from "./background.jpg";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div>
        <img style={{ height: "100%", width: "100%" }} src={background}></img>
      </div>

      <Footer />
    </>
  );
};
export default Home;
