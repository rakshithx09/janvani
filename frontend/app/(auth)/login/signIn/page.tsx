import Logo from "@/components/Logo";
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
          padding: "10px", // Reduced padding
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="login"
          style={{
            width: "50%",
            backgroundColor: "#fafafa",
            borderRadius: "10px",
            textAlign: "center",
            paddingTop: "50px", // Adjusted paddingTop
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h1 style={{ marginBottom: "40px", fontSize: "2.5em" }}>Sign IN</h1>
          <input
            type="String"
            placeholder="ENTER YOUR AADHAR NUMBER"
            style={{
              width: "80%",
              maxWidth: "300px",
              padding: "10px",
              marginBottom: "30px",
              border: "none",
              backgroundColor: "#eeeeef",
            }}
          />
          <p></p>
          <input
            type="password"
            placeholder="Enter the OTP"
            style={{
              width: "80%",
              maxWidth: "300px",
              padding: "10px",
              marginBottom: "30px",
              border: "none",
              backgroundColor: "#eeeeef",
            }}
          />
          <p></p>
          <button
            style={{
              width: "80%",
              maxWidth: "300px",
              padding: "10px",
              border: "none",
              backgroundColor: "#9526a9",
              color: "#fff",
              fontSize: "20px",
              cursor: "pointer",
              transition: "0.3s all ease-in-out",
            }}
          >
            Log in
          </button>
          <hr
            style={{ width: "30%", margin: "30px auto", borderColor: "#ddd" }}
          />
        </div>


        <div

          style={{
            width: "50%",
            marginLeft: "20px",
            backgroundColor: "#fafafa",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Logo message="Do you have a account? Then Sign in" linkText="sign up" link="signUp" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
