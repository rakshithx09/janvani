"use client"
import Image from "next/image";
import Issue from "../../components/Issue";
import { useEffect, useState } from "react";


export interface Post {
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
  const [posts, setPosts] = useState<Post[]>();
  useEffect(() => {
    async function test() {
      try {
        const res = await fetch(`http://localhost:4000/post/getallposts/1`, {
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
      {posts && posts.map((post) => <Issue key={post.id} post={post} />)}
    </>


  );
}
