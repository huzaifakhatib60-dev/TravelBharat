import { useState } from "react";
import "./Login.css";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");

    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    if (!email || !password) {
      setStatus("Please enter email and password");
      return;
    }

    if (password.length < 6) {
      setStatus("Password must be at least 6 characters");
      return;
    }

    try {
      let url;
      let requestData;

      if (isRegister) {
        url = "/api/auth/register";

        requestData = {
          name: formData.name.trim(),
          email: email,
          password: password,
        };
      } else {
        url = "/api/auth/login";

        requestData = {
          email: email,
          password: password,
        };
      }

      console.log("Sending request to:", url);
      console.log("Email:", email);
      console.log("Password length:", password.length);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      console.log("Backend response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
      }

      setStatus(data.message);

      if (isRegister) {
        setIsRegister(false);

        setFormData({
          name: "",
          email: email,
          password: "",
        });
      } else {
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setStatus(error.message);
    }
  };

  const handleSwitch = () => {
    setIsRegister((prev) => !prev);

    setStatus("");

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="div">
      <div id="login">

        <h1>
          {isRegister ? "Create Account" : "Login"}
        </h1>

        <form onSubmit={handleSubmit}>

          {isRegister && (
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />

          <button
            type="submit"
            className="submit-btn"
          >
            {isRegister ? "Register" : "Login"}
          </button>

        </form>

        {status && (
          <p className="status">
            {status}
          </p>
        )}

        <div className="div2"></div>

        <p className="switch-text">
          {isRegister
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>

        <button
          type="button"
          className="submit-btn switch-btn"
          onClick={handleSwitch}
        >
          {isRegister ? "Login" : "Register"}
        </button>

      </div>
    </div>
  );
}

export default Login;