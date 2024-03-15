"use client"
import Image from "next/image";
import Issue from "../../components/Issue";
import { useEffect } from "react";


interface Post {
  id: number;
  title: string;
  description: string;
  image?: string;
  complaintType: 'association' | 'group' | 'individual';
  department: 'engineering' | 'public health' | 'revenue' | 'town planning';
  userId: number;
  createdAt: number;
}

export default function Home() {
  useEffect(() => {
    async function test() {
      try {
        const res = await fetch(`http://localhost:4000/posts/getAllPosts/1`);
        const postData = await res.json() as Post;
        console.log(postData);
      } catch (error) {
        console.log(error);
      }
     
      
    }
    test();
  }, [])
  return (
    <><Issue ></Issue>
      <Issue></Issue>
      <Issue></Issue>
    </>


  );
}
