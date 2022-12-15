import "./styleabout.css";
import Img from "./profile.jpeg";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-7">
            <div class="card p-3 py-4">
              <div class="text-center">
                <img src={Img} width="100" class="rounded-circle" />
              </div>

              <div class="text-center mt-3">
                <span class="bg-secondary p-1 px-4 rounded text-white">
                  Pro
                </span>
                <h5 class="mt-2 mb-0">Abhay Kumar Verma</h5>
                <br />
                <span>I AM A FULLSTACK WEB DEVELOPER BASED ON MERN STACK</span>

                <div class="px-4 mt-1">
                  <p class="fonts">
                    "I am a positive, enthusiastic and competent Web Developer
                    who has built up a diverse range of skills, qualities and
                    attributes that guarantee I will perform highly in this
                    role.I’m looking for a position where I can continue to
                    exercise those skills."
                  </p>
                </div>
                <center>SKILLS</center>

                <ul class="social-list">
                  <li>
                    <i>HTML,CSS,REACTJS,NODE.JS,EXPRESS.JS,MONGODB,BOOTSTRAP</i>
                  </li>
                  {/* <li>
                    <i>NODE.JS</i>
                  </li> */}
                  {/* <li>
                    <i>JAVA SCRIPT</i>
                  </li>
                  <li>
                    <i>MONGODB</i>
                  </li>
                  <li>
                    <i>EXPRESS</i>
                  </li>
                  <li>
                    <i>BOOTSTRAP</i>
                  </li> */}
                </ul>

                {/* <div class="buttons">
                  <button class="btn btn-outline-primary px-4">Message</button>
                  <button class="btn btn-primary px-4 ms-3">Contact</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      
      <Footer />
    </>
  );
};
export default About;
