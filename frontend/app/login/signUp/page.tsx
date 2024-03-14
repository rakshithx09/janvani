import React from "react";

const LoginForm = () => {
  return (
    <div
      style={{
        backgroundColor: "#e9ebee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "auto",
          padding: "20px",
          height: "100%",
        }}
      >
        <div
          className="login"
          style={{
            width: "50%",
            float: "left",
            backgroundColor: "#fafafa",
            borderRadius: "10px 0 0 10px",
            textAlign: "center",
            paddingTop: "100px",
          }}
        >
          <h1 style={{ marginBottom: "40px", fontSize: "2.5em" }}>Log in</h1>
          <input
            type="email"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "30px",
              border: "none",
              backgroundColor: "#eeeeef",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "30px",
              border: "none",
              backgroundColor: "#eeeeef",
            }}
          />
          <br />
          <input
            type="checkbox"
            style={{ float: "left", marginRight: "5px" }}
          />
          <span style={{ float: "left" }}>Remember me</span>
          <a
            href="#"
            style={{
              float: "right",
              textDecoration: "none",
              color: "#000",
              transition: "0.3s all ease-in-out",
            }}
          >
            Forgot password?
          </a>
          <button
            style={{
              width: "100%",
              margin: "30px 0",
              padding: "10px",
              border: "none",
              backgroundColor: "#9526a9",
              color: "#fff",
              fontSize: "20px",
              cursor: "pointer",
              transition: "0.3s all ease-in-out",
            }}
          >
            log in
          </button>
          <hr style={{ width: "30%", display: "inline-block" }} />
          <p style={{ display: "inline-block", margin: "0px 10px 30px" }}>
            Or Connect With
          </p>
          <hr style={{ width: "30%", display: "inline-block" }} />
          <ul style={{ listStyle: "none", marginBottom: "40px" }}>
            <li
              style={{
                display: "inline-block",
                marginRight: "30px",
                cursor: "pointer",
              }}
            >
              <i className="fab fa-facebook-f fa-2x"></i>
            </li>
            <li
              style={{
                display: "inline-block",
                marginRight: "30px",
                cursor: "pointer",
              }}
            >
              <i className="fab fa-twitter fa-2x"></i>
            </li>
            <li
              style={{
                display: "inline-block",
                marginRight: "30px",
                cursor: "pointer",
              }}
            >
              <i className="fab fa-github fa-2x"></i>
            </li>
            <li
              style={{
                display: "inline-block",
                marginRight: "30px",
                cursor: "pointer",
              }}
            >
              <i className="fab fa-linkedin-in fa-2x"></i>
            </li>
          </ul>
          <div className="clearfix"></div>
          <span className="copyright">&copy;2019</span>
        </div>
        <div
          className="register"
          style={{
            width: "50%",
            float: "right",
            backgroundImage: "linear-gradient(135deg, #23212f 5%, #9526a9 95%)",
            color: "#fff",
            borderRadius: "0 10px 10px 0",
            textAlign: "center",
            padding: "100px 0",
          }}
        >
          <i className="fas fa-user-plus fa-5x"></i>
          <h2
            style={{ margin: "30px 0", fontSize: "50px", letterSpacing: "3px" }}
          >
            Hello,friend!
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "30px" }}>
            Enter your personal details and start journey with us
          </p>
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid #FFF",
              borderRadius: "20px",
              padding: "10px 20px",
              color: "#fff",
              fontSize: "20px",
              textTransform: "uppercase",
              transition: "0.2s all  ease-in-out",
            }}
          >
            Register <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
