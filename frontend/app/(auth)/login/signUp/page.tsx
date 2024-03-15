import Logo from "@/components/Logo";

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
          <h1 style={{ marginBottom: "40px", fontSize: "2.5em" }}>REGISTER</h1>
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
          <Logo message="Already have an account? Sign in" linkText="sign in" link="signIn"/>
        </div>
        {/* <div
          className="register"
          style={{
            width: "50%",
            marginLeft: "20px",
            backgroundColor: "#fafafa",
            borderRadius: "10px",
            textAlign: "center",
            padding: "100px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          
          <img
            src="/logo-no-background.svg"
            alt="logo"
            // style={{
            //   height: "200px",
            //   marginLeft: "5rem",
            // }}

            className="w-full h-full object-cover object-center mb-8"
          />
          <p style={{ fontSize: "18px", marginBottom: "30px" }}>
            Do you have a account? Then Sign in
          </p>
          <button
            style={{
              backgroundColor: "#9526a9",
              border: "none",
              borderRadius: "20px",
              padding: "10px 20px",
              color: "#fff",
              fontSize: "20px",
              textTransform: "uppercase",
              transition: "0.2s all ease-in-out",
            }}
          >
            Sign IN <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default LoginForm;
