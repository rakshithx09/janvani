import React from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, Button, TextField, Avatar } from "@mui/material";

import { Comment } from "./Issue";

interface Props {
  setIsCommentsClicked: SetIsCommentsClicked;
}
interface Props {
  comments: Comment[] | undefined; // An array of Comment objects
  setIsCommentsClicked: (newValue: boolean) => void;
}
type SetIsCommentsClicked = (newValue: boolean) => void;

const Comments: React.FC<Props> = ({ comments ,setIsCommentsClicked }) => {
  return (
    <>
      <div className="flex items-center gap-4 mb-2">
        <KeyboardReturnIcon
          className="cursor-pointer"
          onClick={() => {
            setIsCommentsClicked(false);
          }}
        />
        <h2 className="text-xl font-bold">Comments</h2>
      </div>
      <Box
        sx={{
          width: "100%",
          margin: "0.5rem 0",
          maxHeight: "300px",
          overflowY: "auto",
        }}
      >
        {/* Example comment with profile picture */}
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
              marginBottom: "6px",
              marginLeft: "10px",
            }}
          >
            <p
              style={{
                marginBottom: "0.2rem",
                fontSize: "0.9rem",
              }}
            >
              John Doe
            </p>
            <p style={{ marginBottom: "0", fontSize: "13px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* Example comment with profile picture */}
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
            }}
          >
            <p style={{ marginBottom: "0.2rem", fontSize: "0.9rem" }}>
              Jane Smith
            </p>
            <p style={{ marginBottom: "0", fontSize: "13px" }}>
              Ut ac turpis vel nisi aliquet malesuada.
            </p>
          </div>
        </div>

        {/* Add more comments as needed */}
      </Box>
      <div className="flex justify-between">
        <TextField
          variant="outlined"
          placeholder="Type your comment here..."
          sx={{ width: "70%" }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007bff",
            color: "white",
            marginLeft: "1rem",
            "&:hover": {
              backgroundColor: "#007bff",
            },
          }}
        >
          Comment
        </Button>
      </div>
    </>
  );
};

export default Comments;
