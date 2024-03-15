import React from "react";
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

const ReportForm = () => {
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
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField id="name" label="Name" variant="outlined" required />
            <TextField
              id="phone"
              label="Phone Number"
              variant="outlined"
              required
              type="tel"
              helperText="Format: 10 digits without spaces or dashes"
            />
            <TextField
              id="landmark"
              label="Landmark"
              variant="outlined"
              required
            />
            <FormControl variant="outlined" required>
              <InputLabel id="department-label">Department</InputLabel>
              <Select
                labelId="department-label"
                id="department"
                label="Department"
              >
                <MenuItem value="department1">Department 1</MenuItem>
                <MenuItem value="department2">Department 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" required>
              <InputLabel id="group-label">Group</InputLabel>
              <Select labelId="group-label" id="group" label="Group">
                <MenuItem value="group1">Group 1</MenuItem>
                <MenuItem value="group2">Group 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" required>
              <InputLabel id="category-label">Category</InputLabel>
              <Select labelId="category-label" id="category" label="Category">
                <MenuItem value="category1">Category 1</MenuItem>
                <MenuItem value="category2">Category 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" required>
              <InputLabel id="severity-label">Severity</InputLabel>
              <Select labelId="severity-label" id="severity" label="Severity">
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
              <Button
                variant="contained"
                component="span"
                sx={{ backgroundColor: "#007bff", color: "white" }}
              >
                Upload Photo
              </Button>
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
