"use client"
import { useEffect, useState } from "react";
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

interface Department { id: string, name: string, scope: string, password: string }

const ReportForm = () => {

    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }, (error) => {
                console.error('Error getting geolocation:', error);
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [department, setDepartment] = useState('');
    const [category, setCategory] = useState('');
    const [url, setUrl] = useState('/sampleIssue.jpg');

    const [depList, setDepList] = useState<Department[]>([]);

    useEffect(() => {
        fetch("http://localhost:4000/department/getalldepartments/")
            .then(res => res.json())
            .then(data => {
                setDepList(data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    const handleSubmit = async () => {
        await fetch("http://localhost:4000/post/createpost/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                description,
                image: url,
                complaintType: category,
                departmentId: department,
                userId: 1,
                latitude,
                longitude
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
                image={url}
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
                    <form onSubmit={handleSubmit}
                        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                    >
                        <TextField id="title" label="Title" variant="outlined" required
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value);
                                setTitle(event.target.value);
                            }} />
                        <TextField id="description" label="Description" variant="outlined" required
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }} />
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
                                {depList.map(dep => <MenuItem value={dep.id}>{dep.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" required>
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select labelId="category-label" id="category" value={category}
                                onChange={(event) => {
                                    setCategory(event.target.value);
                                }}
                                label="Category">
                                <MenuItem value="assosiation">assosiation</MenuItem>
                                <MenuItem value="group">group</MenuItem>
                                <MenuItem value="individual">individual</MenuItem>
                            </Select>
                        </FormControl>
                        <label htmlFor="raised-button-file" className="bg-white">
                            <UploadButton endpoint="imageUploader" className="bg-white"
                                onClientUploadComplete={(res) => {
                                    setUrl(res[0].url);
                                }}
                                onUploadError={(error: Error) => {
                                    alert(`ERROR! ${error.message}`);
                                }} />
                        </label>
                        <Button
                            variant="contained"
                            type="submit"
                            className="text-black hover:text-white"
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
