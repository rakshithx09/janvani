import React, { useState } from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, Button, TextField, Avatar } from "@mui/material";
import Comment from "./Comment";

import { CommentType } from "./Issue";

interface Props {
  setIsCommentsClicked: SetIsCommentsClicked;
}
interface Props {
  postId:number,
  comments: CommentType[] | undefined; // An array of Comment objects
  setIsCommentsClicked: (newValue: boolean) => void;
}
type SetIsCommentsClicked = (newValue: boolean) => void;





const Comments: React.FC<Props> = ({ postId,comments ,setIsCommentsClicked }) => {

  
  const [comment,setComment] =useState("");

  const handleComment=async () => {
    await fetch(`http://localhost:4000/comment/addcomment/${postId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            description:comment,
            userId:1
        })
    }).then(async (res) => {
        alert("sucess")
        if (!res.ok) {
            return Promise.reject()
        }
    }).catch((err) => {
        console.log(err)
    })
  };

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
        {
          comments?.map((comment)=>{
            return <Comment key={comment.id} comment={comment}/>
          })
        }
        
      </Box>
      <div className="flex justify-between">
        <TextField
          variant="outlined"
          placeholder="Type your comment here..."
          sx={{ width: "70%" }}
          value={comment}
          onChange={(event)=>{setComment(event.target.value)}}
        />
        <Button
          onClick={handleComment}
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
