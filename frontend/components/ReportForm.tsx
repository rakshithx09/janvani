import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
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
          padding: "1rem",
        }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Typography variant="h5" component="div" gutterBottom>
            Report Form
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
              pattern="[0-9]{10}"
              helperText="Format: 10 digits without spaces or dashes"
            />
            <TextField
              id="landmark"
              label="Landmark"
              variant="outlined"
              required
            />
            <RadioGroup name="department" defaultValue="">
              <Typography variant="subtitle1" component="div">
                Department:
              </Typography>
              <FormControlLabel
                value="department1"
                control={<Radio />}
                label="Department 1"
              />
              <FormControlLabel
                value="department2"
                control={<Radio />}
                label="Department 2"
              />
              {/* Add more departments as needed */}
            </RadioGroup>
            <RadioGroup name="group" defaultValue="">
              <Typography variant="subtitle1" component="div">
                Group:
              </Typography>
              <FormControlLabel
                value="group1"
                control={<Radio />}
                label="Group 1"
              />
              <FormControlLabel
                value="group2"
                control={<Radio />}
                label="Group 2"
              />
              {/* Add more groups as needed */}
            </RadioGroup>
            <RadioGroup name="category" defaultValue="">
              <Typography variant="subtitle1" component="div">
                Category:
              </Typography>
              <FormControlLabel
                value="category1"
                control={<Radio />}
                label="Category 1"
              />
              <FormControlLabel
                value="category2"
                control={<Radio />}
                label="Category 2"
              />
              {/* Add more categories as needed */}
            </RadioGroup>
            <RadioGroup name="severity" defaultValue="">
              <Typography variant="subtitle1" component="div">
                Severity:
              </Typography>
              <FormControlLabel
                value="severity1"
                control={<Radio />}
                label="Severity 1"
              />
              <FormControlLabel
                value="severity2"
                control={<Radio />}
                label="Severity 2"
              />
              {/* Add more severity levels as needed */}
            </RadioGroup>
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
