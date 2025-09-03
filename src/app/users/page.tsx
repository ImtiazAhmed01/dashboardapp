"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    company: { name: string };
}

export default function Home() {
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const filteredUsers = users.filter(
        (u) =>
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase())
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

            {/* Search */}
            <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-lg px-4 py-2 mb-6 w-full"
            />

            {/* User Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Username</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user) => (
                            <motion.tr
                                key={user.id}
                                whileHover={{ scale: 1.02 }}
                                className="border-b hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="p-3">
                                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                                </td>
                                <td className="p-3">@{user.username}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.phone}</td>
                                <td className="p-3">{user.company.name}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded-lg disabled:opacity-50"
                >
                    Prev
                </button>
                <p>
                    Page {currentPage} of {totalPages}
                </p>
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded-lg disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            {/* Footer */}
            <p className="mt-4 text-gray-500 text-sm">
                Showing {currentUsers.length} of {filteredUsers.length} users
            </p>
        </div>
    );
}
