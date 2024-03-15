import React from "react";
import { Box, Button, TextField, Avatar } from "@mui/material";
import { CommentType } from "./Issue";
const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <div
      className="flex items-start"
      style={{ marginLeft: "1rem", marginRight: "1rem" }}
    >
      <Avatar alt="Profile Picture" src="/profile-pic.jpg" />
      <div
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          maxWidth: "70%",
          marginLeft: "10px",
          marginBottom: "10px",
        }}
      >
        <p style={{ marginBottom: "0.2rem", fontSize: "0.9rem" }}>
          {comment.userId}
        </p>
        <p style={{ marginBottom: "0", fontSize: "13px" }}>{comment.content}</p>
      </div>
    </div>
  );
};

export default Comment;
