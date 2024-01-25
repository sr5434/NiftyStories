"use client";
import Navbar from "./components/navbar";
import Post from "./components/post";
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

async function getPosts(): Promise<{"PostID": string, "User": string, "Content": string, "Timestamp": string, "parentPost": string | null}[]> {
  const res = await fetch('http://localhost:3000/api/getPosts', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',  
  });
  if (!res.ok) {
    console.log("Something went wrong. Please reload.");
    return [];
  } else{
    const jsonRes = await res.json();
    posts = jsonRes.result;
    return posts;
  }
  
}

let posts = getPosts();

export default async function Home() {
  return (
    <div>
      <SignedIn>
        <Navbar isHome={true}/>
        <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
          <h1 className="text-5xl font-extrabold">Blockparty</h1>
          {(await posts).map((post: {"PostID": string, "User": string, "Content": string, "Timestamp": string, "parentPost": string | null}) => (
            <Post postData={post}/>
          ))}
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
    </div>
  )
}