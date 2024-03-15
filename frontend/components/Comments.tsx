import React from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, Button, TextField } from "@mui/material";

interface Props {
  setIsCommentsClicked: SetIsCommentsClicked;
}

type SetIsCommentsClicked = (newValue: boolean) => void;

const Comments: React.FC<Props> = ({ setIsCommentsClicked }) => {
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
          //border: "2px solid black",
          height: "200px",
          margin: "0.5rem 0",
          borderRadius: "8px",
          overflowY: "auto",
          padding: "0.5rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Display comments here */}
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Ut ac turpis vel nisi aliquet malesuada.</p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          <p>
            Sed et convallis nunc. Morbi finibus augue et metus laoreet, vitae
            varius velit sagittis.
          </p>
          <p>
            Vivamus posuere, ipsum ac efficitur malesuada, dolor velit commodo
            magna, non gravida nisi metus vel lacus.
          </p>
          <p>
            Quisque aliquam dolor sed turpis iaculis, a dignissim mauris
            suscipit.
          </p>
          <p>
            Sed ultricies, urna vitae scelerisque hendrerit, mauris dui
            efficitur metus, vel feugiat leo dolor in leo.
          </p>
          <p>Quisque ac neque vitae purus facilisis iaculis et a metus.</p>
          <p>Donec eu sollicitudin eros.</p>
          <p>Suspendisse potenti.</p>
        </div>
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
              // Override default hover effect
              backgroundColor: "#007bff", // Set the same background color to maintain consistency
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
