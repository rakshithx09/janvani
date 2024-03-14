import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";

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
    <html lang="en">
      <body
        className={inter.className}
        style={{
          background:
            "linear-gradient(to right, rgba(74, 179, 247, 0.3), rgba(130, 204, 255, 0.3), rgba(184, 195, 201, 0.3))",
          paddingBottom: "3rem",
        }}
      >
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
            bgcolor: "rgba(134,148,188,0.4)",
            borderRadius: "55px",
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
              <Box
                sx={{
                  //border: "2px solid black",
                  background: "white",
                  borderRadius: "50px",
                  padding: "1rem",
                  //boxShadow: "2px 4px black",
                  marginTop: "4px",
                  overflowX: "auto",
                  animation: "scrollAnimation 10s linear infinite",
                }}
              >
                <p>Welcome back Your name should be added</p>
              </Box>
            </Box>
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
          </Box>
        </Box>
        <Box
          sx={{
            background: "rgba(134,148,188,0.4)",
            borderRadius: "50px",
          }}
          className="h-[60%] w-[7rem]    fixed left-[4rem] top-1/2 transform -translate-y-1/2 "
        ></Box>
        <section className="ml-[12rem] w-[80%] flex flex-col gap-8">
          {children}
        </section>
      </body>
    </html>
  );
}
