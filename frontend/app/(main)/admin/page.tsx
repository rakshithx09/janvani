"use client"
import React, { useEffect, useState } from "react";
import AdminIssue from "@/components/AdminIssue";
import { Post } from "../page";
import { divIcon } from "leaflet";
const Dashboard = () => {

  const [posts, setPosts] = useState<Post[]>();
  useEffect(() => {
    async function test() {
      try {
        const res = await fetch(`http://localhost:4000/post/getposts/2`, {
          "method": "GET"
        });
        const postData = await res.json() as Post[];
        console.log(postData);
        setPosts(postData);
      } catch (error) {
        console.log(error);
      }
    }
    test();
  }, [])

  return (
    <>
    {posts && posts.map((post) =>  <AdminIssue key={post.id} /> )}
    </>
    
  );
};

export default Dashboard;
