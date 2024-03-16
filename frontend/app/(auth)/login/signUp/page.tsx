"use client";
import Logo from "@/components/Logo";
import { useState } from "react";

import { redirect, useRouter } from "next/navigation";

const LoginForm = () => {
  const [aadhar, setAadhar] = useState("");
  const [otp, setOtp] = useState("");

  const router = useRouter();

  const handleSubmit = async () => {
    await fetch("http://localhost:4000/aadhaar/verfifyUser/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uId: aadhar,
        otp,
      }),
    })
      .then(async (res) => {
        const data = await res.json();

        alert("sucess");
        if (!res.ok) {
          const error = data;

          return Promise.reject(data);
        }
        console.log("hello");
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <h1 style={{ marginBottom: "40px", fontSize: "2.5em" }}>SIGN IN</h1>
          <input
            value={aadhar}
            onChange={(e) => {
              setAadhar(e.target.value);
            }}
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
            placeholder="Enter the PASS"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
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
            onClick={handleSubmit}
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
          <Logo
            message="Already have an account? Sign in"
            linkText="Register"
            link="signIn"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
