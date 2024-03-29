"use client";
import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Comments from "./Comments";

import { Post } from "@/app/(main)/page";

export interface CommentType {
  id: number;
  userId: number;
  postId: number;
  content: string;
  createdAt: number;
}

const Issue = ({ post }: { post: Post }) => {
  const [isCommentsClicked, setIsCommentsClicked] = useState(false);
  const [comments, setComments] = useState<CommentType[]>();

  const handleUpVote = async () => {
    const data = {
      postId: post.id,
      userId: 1,
      choice: true,
    };
    await fetch("http://localhost:4000/post/addvote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          const error = data;
          return Promise.reject(error);
        }
        alert("upvoted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDownVote = async () => {
    const data = {
      postId: post.id,
      userId: 1,
      choice: false,
    };
    await fetch("http://localhost:4000/post/addvote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          const error = data;
          return Promise.reject(error);
        }
        alert("downvoted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    async function test() {
      try {
        const res = await fetch(
          `http://localhost:4000/comment/getAllcomments/${post.id}`,
          {
            method: "GET",
          }
        );
        const commentData = (await res.json()) as CommentType[];
        console.log(commentData);
        setComments(commentData);
      } catch (error) {
        console.log(error);
      }
    }
    test();
  }, []);

  return (
    <Card
      sx={{
        display: "flex",
        width: "80%",
        margin: "auto",
        borderRadius: "18px",
      }}
      elevation={5}
    >
      <CardMedia
        component="img"
        sx={{ width: "50%" }}
        image={post.image}
        alt="Live from space album cover"
      />
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            height: "100%",
            position: "relative",
          }}
        >
          {!isCommentsClicked ? (
            <>
              <Box className="flex gap-2 ml-auto">
                <Chip
                  label="Track Progress"
                  color="primary"
                  variant="outlined"
                />
                <Chip label="Status" color="success" variant="outlined"></Chip>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Avatar alt="Cindy Baker" src="/sampleAvatar.jpg" />
                <Typography component="div" variant="h5">
                  Varshith Pawar
                </Typography>
              </Box>

              <Typography
                sx={{
                  maxHeight: "150px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                variant="body1"
                color="text.secondary"
                component="div"
              >
                {post?.description}
              </Typography>
              <Stack direction="row" spacing={1.5}></Stack>
              <Stack direction="row" spacing={1.5}>
                <img src="/arrowup.svg" alt="arrow" onClick={handleUpVote} />
                <img
                  src="/arrowdown.svg"
                  alt="arrow"
                  onClick={handleDownVote}
                />

                <Chip
                  label="Comments"
                  color="primary"
                  variant="outlined"
                  className="cursor-pointer"
                  onClick={() => {
                    setIsCommentsClicked(true);
                  }}
                />
              </Stack>
            </>
          ) : (
            <Comments
              postId={post.id}
              comments={comments}
              setIsCommentsClicked={setIsCommentsClicked}
            />
          )}
        </CardContent>
      </Box>
    </Card>
  );
};

export default Issue;
