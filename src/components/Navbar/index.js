import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Avatar from "react-avatar";
import Dropdown from "react-bootstrap/Dropdown";
export const Navbar = () => {
  let navigate = useNavigate();

  const LogoutHandler = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    window.location.reload()();
  };
  const goBack = () => {
    navigate("/");
  };
  const { isAuth, name } = useAuth();
  return (
    <>
      <nav className="app__navbar">
        <div className="app__title" onClick={goBack}>
          My<span>Jobs</span>
        </div>

        {/* <Link to={user.id}>{user.name}</Link> */}
        {isAuth ? (
          <div style={{ display: "flex" }}>
            <Avatar className="mr-2" name={name} size="45" round={true} />
            <Dropdown>
              <Dropdown.Toggle
                split
                style={{ color: "white" }}
                variant="outline"
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Dropdown.Item onClick={LogoutHandler}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <div className="app_button">
            <Link to="/Login">
              <a href="#login" as={Link}>
                Login / Signup
              </a>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};
