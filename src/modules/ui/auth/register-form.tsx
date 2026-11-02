'use client';
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { Form } from "../shared/form";
import Button from "../shared/button";

export default function RegisterForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        try{
            // if(!email || !password || !username){
            //     console.error("Username, email or password is missing");
            //     return;
            // }
            // const Response = await fetch("/api/register", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ username, email, password }),
            // });
            // if(!Response.ok){
            //     console.error("Registration failed");
            // }
            // const data = await Response.json();
            // console.log("Registration successful:", data);

            setIsLoading(false);

        console.log("Form submitted");
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
            router.push("/home"); 
            

        }catch(error){
            setIsLoading(false);
            console.error("Registration error:", error);
        }

    }
    return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-lg p-8 shadow-md w-full max-w-md">
            <h1 className="text-3xl font-bold text-indigo-600">Register</h1>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />
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
                <Button type = "submit" disabled={isLoading}>
                    {isLoading ? "Registering..." : "Register"}
                </Button>
                <div className="text-sm text-gray-500">
                    Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Login</a>
                </div>
            </Form>
        </div>
    </main>
    );
}