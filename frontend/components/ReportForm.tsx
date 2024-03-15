"use client";
import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { UploadButton } from "../utils/uploadthing";

const ReportForm = () => {
  // const [title, setTitle] = useState('');
  //const [description, setDescription] = useState('');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [landmark, setLandmark] = useState("");
  const [department, setDepartment] = useState("");
  const [group, setGroup] = useState("");
  const [category, setCategory] = useState("");
  const [severity, setSeverity] = useState("");
  const [url, setUrl] = useState("");
  const handleSubmit = async () => {
    const data = {
      title,
      description,
      image: url,
      complaintType: category,
      departmentId: department,
      userId: 1,
    };
    await fetch("http://localhost:4000/post/createpost/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        alert("sucess");
        console.log(res);
        if (!res.ok) {
          const error = data;
          return Promise.reject(error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Card
      sx={{
        display: "flex",
        width: "80%",
        margin: "auto",
        borderRadius: "18px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "50%", borderRadius: "18px 0 0 18px" }}
        image="/sampleIssue.jpg"
        alt="Issue image"
      />
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography variant="h5" component="div" gutterBottom>
            Report/Post Form
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              required
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                setTitle(event.target.value);
              }}
            />
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              required
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <TextField
              id="landmark"
              label="Landmark"
              variant="outlined"
              required
              value={landmark}
              onChange={(event) => {
                setLandmark(event.target.value);
              }}
            />
            <FormControl variant="outlined" required>
              <InputLabel id="department-label">Department</InputLabel>
              <Select
                labelId="department-label"
                id="department"
                label="Department"
                value={department}
                onChange={(event) => {
                  setDepartment(event.target.value);
                }}
              >
                <MenuItem value="department1">Department 1</MenuItem>
                <MenuItem value="department2">Department 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" required>
              <InputLabel id="group-label">Group</InputLabel>
              <Select
                labelId="group-label"
                id="group"
                value={group}
                onChange={(event) => {
                  setGroup(event.target.value);
                }}
                label="Group"
              >
                <MenuItem value="group1">Group 1</MenuItem>
                <MenuItem value="group2">Group 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" required>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
                label="Category"
              >
                <MenuItem value="category1">Category 1</MenuItem>
                <MenuItem value="category2">Category 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" required>
              <InputLabel id="severity-label">Severity</InputLabel>
              <Select
                labelId="severity-label"
                id="severity"
                value={severity}
                onChange={(event) => {
                  setSeverity(event.target.value);
                }}
                label="Severity"
              >
                <MenuItem value="severity1">Severity 1</MenuItem>
                <MenuItem value="severity2">Severity 2</MenuItem>
              </Select>
            </FormControl>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  console.log("Files: ", res);
                  setUrl(res[0].url);
                  alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </label>
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "#007bff", color: "white" }}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ReportForm;
