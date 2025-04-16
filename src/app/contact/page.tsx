"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                "service_k5e306h",
                "template_o3ag3yo",
                form.current,
                "qDUHz4jJcfdXrK5WG"
            )
            .then(() => setStatus("Message sent successfully!"))
            .catch(() => setStatus("Failed to send message. Please try again later."));

            form.current.reset();
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f9] py-10 px-4">
            <div className="max-w-2xl w-full text-center mb-10">
                <p className="text-sm uppercase tracking-widest text-gray-500">Connect</p>
                <h1 className="text-4xl font-bold text-gray-900 mt-2">We&apos;d love to hear from you</h1>
                <p className="mt-4 text-gray-600">
                    Whether you have questions, thoughts about our work, or would like a signed copy of <span className="italic">OIDP - Onli In Da Pilipines</span>, send us a message below.
                </p>
            </div>

            <div className="relative bg-gradient-to-br from-[#001F3F] via-[#C92F2F] to-[#FFD700] p-1 rounded-xl shadow-lg max-w-xl w-full">
                <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(1,22,39,0.2) 0%,rgba(201,47,47,0.2) 40%,rgba(255,215,0,0.2) 80%)] rounded-full blur-[100px]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/0 rounded-xl backdrop-blur-xl z-0" />
                <form ref={form} onSubmit={sendEmail} className="relative z-10 bg-white p-8 rounded-xl space-y-6 shadow-md">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" required className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder:text-gray-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" required className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder:text-gray-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea name="message" rows={4} required className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder:text-gray-500" />
                    </div>
                    <button type="submit" className="w-full bg-[#C92F2F] hover:bg-[#a62626] text-white font-semibold py-2 rounded-md transition">
                        Send Message
                    </button>
                    {status && <p className="text-sm text-green-600 mt-2">{status}</p>}
                </form>
            </div>
        </div>
    );
}
