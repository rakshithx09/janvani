import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "janvani",
  description: "an issue reporting website made by team 410 Gone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="ml-[12rem] py-[2rem] w-[80%] flex flex-col gap-8">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "102px",
          maxHeight: "110px",
          padding: "2rem 8px",
          marginTop: "3rem",
          marginBottom: "4rem",
          marginLeft: "10rem",
          marginRight: "10rem",
          bgcolor: "white", //rgba(134,148,188,0.4)",
          borderRadius: "55px",
          boxShadow: "3px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box>
          <Avatar
            alt="Cindy Baker"
            src="/frame.svg"
            sx={{
              width: "230px",
              borderRadius: "0",
              marginLeft: "5rem",
              height: "5rem",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "40px" }}>
          <Box>
            <link rel="stylesheet" href="" />
          </Box>
          <Box>
            <Box
              sx={{
                //border: "2px solid black",

                borderRadius: "50px",
                padding: "1rem",
                boxShadow: "2px 4px rgba(0, 0, 0, 0.2) ",
                background:
                  "linear-gradient(to right, rgba(74, 179, 247, 0.3), rgba(130, 204, 255, 0.3), rgba(184, 195, 201, 0.3))",
                marginTop: "4px",
                overflowX: "auto",
                animation: "scrollAnimation 10s linear infinite",
              }}
            >
              <p>Welcome back Varsith R Pawar</p>
            </Box>
          </Box>
          <Link className="cursor-pointer" href="/profile">
            <Avatar
              alt="Cindy Baker"
              src="/sampleavatar.jpg"
              sx={{
                height: "70px",
                width: "70px",
                marginLeft: "auto",
                marginRight: "2rem",
              }}
            />
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          background: "white",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "column", // Stack boxes vertically
          alignItems: "center", // Center boxes horizontally
          justifyContent: "center", // Center boxes vertically
          boxShadow: "2px 4px rgba(0, 0, 0, 0.2)",
          gap: "2rem",
        }}
        className="h-[60%] w-[6rem] fixed left-[4rem] top-1/2 transform -translate-y-1/2"
      >
        {/* First inner Box */}
        <Box
          sx={{
            width: "70px",
            height: "70px",
            backgroundColor: "#3E3636",
            marginBottom: "10px", // Add margin between boxes
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/">
            <img
              src="finance.svg"
              alt="tick"
              style={{ width: "50px", height: "40px" }}
            />
          </Link>
        </Box>

        {/* Second inner Box */}
        <Box
          sx={{
            width: "70px",
            height: "70px",
            backgroundColor: "#3E3636",
            marginBottom: "10px", // Add margin between boxes
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/issues/new">
            <img
              src="vector.svg"
              alt="tick"
              style={{ width: "30px", height: "30px" }}
            />
          </Link>
        </Box>

        {/* Third inner Box */}
        <Box
          sx={{
            width: "70px",
            height: "70px",
            backgroundColor: "#3E3636",
            marginBottom: "10px", // Add margin between boxes
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="/map">
            <img
              src="pins-53 1.svg"
              alt="tick"
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "22px",
                marginBottom: "10px",
              }}
            />
          </a>
        </Box>

        {/* Fourth inner Box */}
        <Box
          sx={{
            width: "70px",
            height: "70px",
            backgroundColor: "#3E3636",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="#">
            <img
              src="mdi_tick-outline.svg"
              alt="tick"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </Box>
      </Box>

      {children}
    </section>
  );
}
