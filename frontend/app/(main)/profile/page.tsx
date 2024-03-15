import React from "react";
import { Box, Typography, Avatar } from "@mui/material";


function getRank(score: number) {
  if (score < 2) {
    return {
      "name": "bronze III",
      "image": "bronzesheild.svg"
    }
  }
  if (score < 5) {
    return {
      "name": "bronze II",
      "image": "bronzesheild.svg"
    }
  }
  if (score < 8) {
    return {
      "name": "bronze I",
      "image": "bronzesheild.svg"
    }
  }
  if (score < 10) {
    return {
      "name": "silver III",
      "image": "silversheild.svg"
    }
  }
  if (score < 13) {
    return {
      "name": "silver II",
      "image": "silversheild.svg"
    }
  }

  if (score < 20) {
    return {
      "name": "silver I",
      "image": "silversheild.svg"
    }
  }
  if (score < 30) {
    return {
      "name": "Gold",
      "image": "goldsheild.svg"
    }
  }

  return {
    "name": "platinum",
    "image": "platinumsheild.svg"
  }
}

const Profile = () => {

  const noOfIssueReported = 89
  const rankDetails = getRank(noOfIssueReported)
  return (
    <main>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          padding: "2rem",
          display: "flex",
          borderRadius: "20px",
          gap: "2rem",
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
            }}
          >
            <Avatar
              alt="Cindy Baker"
              src="/sampleAvatar.jpg"
              sx={{ width: "80px", height: "80px" }}
            />
            <Typography variant="h5" sx={{ color: "#333" }}>
              Varshith Pawar
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Box
              sx={{
                borderRadius: "18px",
                padding: "0.5rem 1rem",
                bgcolor: "rgb(234,229,229,13%)",
                boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="body2" sx={{ color: "black" }}>
                Ph No: +919108546675
              </Typography>
            </Box>

            <Box
              sx={{
                bgcolor: "rgb(234,229,229,13%)",
                boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
                borderRadius: "18px",
                padding: "0.5rem 1rem",
              }}
            >
              <Typography variant="body2" sx={{ color: "black" }}>
                Pincode: 574150
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: "rgb(234,229,229,13%)",
              boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
              borderRadius: "18px",
              padding: "1rem",
            }}
          >
            <Typography variant="body1" sx={{ color: "black" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus fuga cum eveniet accusantium amet dolorum cupiditate.
              Quam, necessitatibus libero. Voluptatum doloribus esse culpa qui
              nam fugit, ipsum enim, repellat minima veniam, totam nihil. Eius
              veniam debitis vero. Perspiciatis iure veritatis facilis
              distinctio labore dolor odio impedit quis! Cumque, voluptates
              nihil? Here his display shud be there
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "rgb(234,229,229,13%)",
              boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
              borderRadius: "18px",
              padding: "0.5rem 1rem",
              width: "fit-content",
            }}
          >
            <Typography variant="body2" sx={{ color: "black" }}>
              Occupation
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
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
              background: "rgba(0, 0, 0, 0.2)",
            }}
          >
            <Avatar
              sx={{ width: "150px", height: "150px" }}
              alt="Cindy Baker"
              src={rankDetails?.image}
            />
          </Box>
          <Typography variant="h4" sx={{ color: "#333" }}>
            {rankDetails?.name}
          </Typography>
          <Typography variant="h5" sx={{ color: "#333" }}>
            Number of issues reported: {noOfIssueReported}
          </Typography>
          <Typography variant="h5" sx={{ color: "#333" }}>
            Number of issues solved: {noOfIssueReported}
          </Typography>
        </Box>
      </Box>
    </main>
  );
};

export default Profile;
