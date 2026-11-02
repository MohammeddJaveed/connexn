'use client'
import Link from "next/link"
import React, { use, useState } from "react";
import Button from "../shared/button";
import { Form } from "../shared/form";
import { useRouter } from "next/navigation";


export default function LoginForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    
    console.log("Form submitted");
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    // try{
    //      if (!email || !password) {
    //         console.log("Email or password is missing");
    //         return;
    //     }
    //   const Response = await fetch("/api/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ email, password }),
    //     });
    //    if(!Response.ok){
    //     console.error("Login failed");
    //    }
    //    const data = await Response.json();
    //    console.log("Login successful:", data);

    // }catch(error){
    //     console.error("Login error:", error);
    // }
        setIsLoading(false);
    console.log("Email:", email);
    console.log("Password:", password);
   router.push("/home");


}
    return (
 <main className="flex min-h-screen flex-col items-center justify-center p-24">
  <div className="flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-lg p-8 shadow-md w-full max-w-md">
    <h1 className="text-3xl font-bold text-indigo-600">Login</h1>
    <Form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"

        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
      <div className="text-sm text-gray-600">
        Don't have an account?{" "}
        <Link href="/register" className="text-indigo-600 hover:underline ">
          Register
        </Link>
      </div>
    </Form>
  </div>
</main>
    );
}
 