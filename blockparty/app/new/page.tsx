'use client';
import { useState } from 'react';
import React from "react";
import Navbar from "../components/navbar";
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function Home() {
  const [ post, setPost ] = useState("");
  const handleInput = async (e: any) => {
    const fieldValue = e.target.value;

    await setPost(fieldValue);
  }

  const submitHandler = async (e: any) => {
    e.preventDefault()
    await fetch('http://localhost:3000/api/newPost', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          'post': post
      })
    });
    alert("Post created!")
  }

  return (
    <div>
      <SignedIn>
        <Navbar isHome={false}/>
        <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
          <h1 className="text-5xl font-extrabold">Blockparty</h1>
          <form onSubmit={submitHandler}>
            <textarea
            name="linkInp"
            placeholder="What's on your mind?"
            value={post}
            onChange={handleInput}
            className="block p-2.5 w-full h-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button 
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-lg">
              Post
            </button>
          </form>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
    </div>
  )
}