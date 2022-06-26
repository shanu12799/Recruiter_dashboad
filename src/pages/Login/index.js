import { useState } from "react";

import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export const Login = ({ setToken }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validate, setValidate] = useState({ email: false, password: false });
  const [flag, setFlag] = useState(false);

  const { setIsAuth, setName } = useAuth();

  const sendData = async e => {
    setFlag(false);
    e.preventDefault();
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) === false
    ) {
      setValidate({ ...validate, email: true });
      return;
    } else {
      setValidate({ ...validate, email: false });
    }
    if (password == null) {
      setValidate({ ...validate, password: true });
      return;
    } else {
      setValidate({ ...validate, password: false });
    }

    const formData = {
      email: email,
      password: password
    };
    try {
      const { data } = await axios.post(
        "https://jobs-api.squareboat.info/api/v1/auth/login",
        formData
      );
      if (data.code === 200) {
        setToken(data.data.token);
        setIsAuth(true);
        localStorage.setItem("Auth", JSON.stringify(true));
        localStorage.setItem("Name", JSON.stringify(data.data.name));
        setName(data.data.name);
        navigate("/Jobs", { replace: true });
      } else {
        setFlag(true);
      }
    } catch (err) {
      setFlag(true);
    }
  };

  return (
    <>
      <div className="app_login-bg1"></div>
      <div className="app_login-bg2"></div>
      <div className="app__login__card">
        <h3>Login</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={e => setEmail(e.target.value)}
            />
            {validate.email ? (
              <Form.Text style={{ color: "red" }}>Invalid email</Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            {validate.password ? (
              <Form.Text style={{ color: "red" }}>Please Password</Form.Text>
            ) : null}
            {flag ? (
              <Form.Text style={{ color: "red", textAlign: "left" }}>
                Incorrect Email or Password
              </Form.Text>
            ) : null}
          </Form.Group>
          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              className="custom-button"
              onClick={e => sendData(e)}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
