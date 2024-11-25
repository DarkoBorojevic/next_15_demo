'use client';

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <>
      <div>About</div>
      <button
        onClick={() => router.push("/")}  
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        go Home
      </button>
    </>
    
  )
}

export default About