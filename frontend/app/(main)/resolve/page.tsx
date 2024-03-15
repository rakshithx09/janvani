import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              Varshith Pawar H R
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          ></Box>
          <Box
            sx={{
              bgcolor: "rgb(234,229,229,13%)",
              boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
              borderRadius: "18px",
              padding: "1rem",
            }}
          >
            <Typography variant="body1" sx={{ color: "black" }}>
              A water pipeline near my home has ruptured, leading to a
              significant disruption in our water supply. This unforeseen event
              has prompted immediate attention to address the issue and restore
              normalcy to our daily routines.
            </Typography>

            <Chip
              label="Resolved"
              color="primary"
              variant="outlined"
              sx={{ marginTop: "2rem" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "25px",
              overflow: "hidden",
            }}
          >
            <img
              src="/download.jpeg"
              alt="Your Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>

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
              Varshith Pawar H R
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          ></Box>
          <Box
            sx={{
              bgcolor: "rgb(234,229,229,13%)",
              boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
              borderRadius: "18px",
              padding: "1rem",
            }}
          >
            <Typography variant="body1" sx={{ color: "black" }}>
              A water pipeline near my home has ruptured, leading to a
              significant disruption in our water supply. This unforeseen event
              has prompted immediate attention to address the issue and restore
              normalcy to our daily routines.
            </Typography>
            <Chip
              label="Resolved"
              color="primary"
              variant="outlined"
              sx={{ marginTop: "2rem" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "25px",
              overflow: "hidden",
            }}
          >
            <img
              src="/is1.jpeg"
              alt="Your Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>

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
              Varshith Pawar H R
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          ></Box>
          <Box
            sx={{
              bgcolor: "rgb(234,229,229,13%)",
              boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
              borderRadius: "18px",
              padding: "1rem",
            }}
          >
            <Typography variant="body1" sx={{ color: "black" }}>
              A water pipeline near my home has ruptured, leading to a
              significant disruption in our water supply. This unforeseen event
              has prompted immediate attention to address the issue and restore
              normalcy to our daily routines.
            </Typography>
            <Chip
              label="Resolved"
              color="primary"
              variant="outlined"
              sx={{ marginTop: "2rem" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "25px",
              overflow: "hidden",
            }}
          >
            <img
              src="/download.jpeg"
              alt="Your Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>

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
              Varshith Pawar H R
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          ></Box>
          <Box
            sx={{
              bgcolor: "rgb(234,229,229,13%)",
              boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
              borderRadius: "18px",
              padding: "1rem",
            }}
          >
            <Typography variant="body1" sx={{ color: "black" }}>
              A water pipeline near my home has ruptured, leading to a
              significant disruption in our water supply. This unforeseen event
              has prompted immediate attention to address the issue and restore
              normalcy to our daily routines.
            </Typography>
            <Chip
              label="Resolved"
              color="primary"
              variant="outlined"
              sx={{ marginTop: "2rem" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "25px",
              overflow: "hidden",
            }}
          >
            <img
              src="/is2.jpeg"
              alt="Your Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
