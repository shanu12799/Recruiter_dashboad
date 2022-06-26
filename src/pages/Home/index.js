import "./style.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="app__home">
        <div className="app__home_title">
          <h2>
            Welcome to <br />
            My<span>Jobs</span>
          </h2>
          <div className="app_home_button">
            <Link to="/Jobs">
              <a href="Login">Get Started</a>
            </Link>
          </div>
        </div>
        <div className="app__home_Image">
          <img src="/home.png" alt="home" />
        </div>
      </div>
      <div className="app__home_section">
        <div className="app_home_container">
          <h3>Why Us</h3>
          <div className="app_home_cards">
            <div className="cards">
              <h3>
                Get More <br />
                Visibility
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="cards">
              <h3>
                Organize Your
                <br /> Candidates
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="cards">
              <h3>
                Verify Their
                <br /> Abilities
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
        <div className="app_home_container_company">
          <h3>Companies Who Trust Us</h3>
          <div className="app__home_companies">
            <img src="solaytic.png" alt="company" />
            <img src="kanba.png" alt="company" />
            <img src="lighting.png" alt="company" />
            <img src="ztos.png" alt="company" />
            <img src="kanba.png" alt="company" />
          </div>
          <div className="app__home_companies_down">
            <img src="goldline.png" alt="company" />
            <img src="ideaa.png" alt="company" />
            <img src="liva.png" alt="company" />
            <img src="velocity-9.png" alt="company" />
          </div>
        </div>
      </div>
    </>
  );
};
