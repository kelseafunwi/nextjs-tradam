import Link from "next/link";
import {Button} from "@/components/ui/button";
import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link className="text-2xl font-bold text-purple-600" href={"#how-it-works"}>How it works</Link>

                <div className="flex space-x-4">
                    <Link className="text-gray-700 hover:text-purple-600" href={"#features"}>Features</Link>
                    <Link className="text-gray-700 hover:text-purple-600" href={"#how-it-works"}>How it works</Link>
                    <Button variant="outline">Sign Up</Button>
                    <Button>Login</Button>
                </div>
            </div>
        </nav>
    );
}