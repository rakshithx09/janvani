import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

const Profile = () => {
  return (
    <main>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#e4e6e9",
          margin: "auto",
          padding: "2rem",
          display: "flex",
          borderRadius: "77px",
          height: "50rem",
          maxHeight: "270rem",
          gap: "50px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              margin: "auto",
            }}
          >
            <Avatar
              alt="Cindy Baker"
              src="/sampleAvatar.jpg"
              sx={{ width: "80px", height: "80px" }}
            />
            <Typography component="div" variant="h5" sx={{ color: "#333" }}>
              Varshith Pawar
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              margin: "auto",
            }}
          >
            <Box
              sx={{
                bgcolor: "#969696",
                borderRadius: "18px",
                padding: "0.5rem 1rem",
              }}
            >
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Ph No: +919108546675
              </Typography>
            </Box>

            <Box
              sx={{
                bgcolor: "#969696",
                borderRadius: "18px",
                padding: "0.5rem 1rem",
              }}
            >
              {" "}
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Pincode: 574150
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: "#969696",
              borderRadius: "18px",
              padding: "1rem",
              width: "100%",
            }}
          >
            <Typography variant="body1" sx={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus fuga cum eveniet accusantium amet dolorum cupiditate.
              Quam, necessitatibus libero. Voluptatum doloribus esse culpa qui
              nam fugit, ipsum enim, repellat minima veniam, totam nihil. Eius
              veniam debitis vero. Perspiciatis iure veritatis facilis
              distinctio labore dolor odio impedit quis! Cumque, voluptates
              nihil?
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "#969696",
              borderRadius: "18px",
              padding: "0.5rem 1rem",
              width: "80%",
              margin: "auto",
            }}
          >
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Occupation
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            borderLeft: "2px solid black",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <Box
            sx={{
              height: "200px",
              width: "200px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#969696",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Avatar
              sx={{ width: "150px", height: "150px" }}
              alt="Cindy Baker"
              src="/map_sheildgold.svg"
            />
          </Box>
          <Typography variant="h4" sx={{ color: "#333" }}>
            Gold III
          </Typography>
          <Typography variant="h5" sx={{ color: "#333" }}>
            Number of issues reported: 50
          </Typography>
          <Typography variant="h5" sx={{ color: "#333" }}>
            Number of issues solved: 50
          </Typography>
        </Box>
      </Box>
    </main>
  );
};

export default Profile;
