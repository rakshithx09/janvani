"use client"
import React from 'react'

const AdminIssue = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          borderRadius: "20px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src="/woman.jpg"
          alt="User's Profile"
          style={{ width: "200px", height: "200px", marginRight: "2rem" }}
        />
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Issue</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum libero quis odio aliquam, quis vehicula lectus vehicula.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              style={{
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
                backgroundColor: "#4caf50",
                color: "white",
              }}
            >
              Accept
            </button>
            <button
              style={{
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
                backgroundColor: "#f44336",
                color: "white",
              }}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminIssue