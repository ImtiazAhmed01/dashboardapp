// // /* eslint-disable @next/next/no-async-client-component */
// // "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// // interface User {
// //     id: number;
// //     name: string;
// //     username: string;
// //     email: string;
// //     phone: string;
// //     website: string;
// //     company: { name: string; catchPhrase: string };
// //     address: { city: string; street: string };
// // }

// // // Fetch single user
// // async function getUser(id: string): Promise<User | null> {
// //     try {
// //         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
// //             cache: "no-store",
// //         });
// //         if (!res.ok) return null;
// //         return res.json();
// //     } catch {
// //         return null;
// //     }
// // }

// // export default async function UserPage({ params }: { params: { id: string } }) {
// //     const user = await getUser(params.id);

// //     if (!user) {
// //         return (
// //             <div className="p-6 text-center">
// //                 <h1 className="text-2xl font-bold text-red-600">User not found</h1>
// //                 <Link href="/" className="text-blue-600 underline mt-4 block">
// //                     ← Back to Dashboard
// //                 </Link>
// //             </div>
// //         );
// //     }

// //     return (
// //         <motion.div
// //             className="p-6 max-w-3xl mx-auto"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //         >
// //             {/* Card */}
// //             <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-lg">
// //                 <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
// //                     <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
// //                         {user.name}
// //                     </h1>

// //                     <div className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
// //                         <p>
// //                             <strong className="text-purple-600">👤 Username:</strong>{" "}
// //                             @{user.username}
// //                         </p>
// //                         <p>
// //                             <strong className="text-purple-600">📧 Email:</strong> {user.email}
// //                         </p>
// //                         <p>
// //                             <strong className="text-purple-600">📱 Phone:</strong> {user.phone}
// //                         </p>
// //                         <p>
// //                             <strong className="text-purple-600">🌐 Website:</strong>{" "}
// //                             <a
// //                                 href={`http://${user.website}`}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                                 className="text-blue-500 underline"
// //                             >
// //                                 {user.website}
// //                             </a>
// //                         </p>
// //                         <p>
// //                             <strong className="text-purple-600">🏢 Company:</strong>{" "}
// //                             {user.company.name} –{" "}
// //                             <span className="italic">{user.company.catchPhrase}</span>
// //                         </p>
// //                         <p>
// //                             <strong className="text-purple-600">📍 Address:</strong>{" "}
// //                             {user.address.street}, {user.address.city}
// //                         </p>
// //                     </div>

// //                     {/* Back Button */}
// //                     <div className="mt-8 text-center">
// //                         <Link href="/">
// //                             <motion.button
// //                                 whileHover={{ scale: 1.05 }}
// //                                 whileTap={{ scale: 0.95 }}
// //                                 className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md"
// //                             >
// //                                 ← Back to Dashboard
// //                             </motion.button>
// //                         </Link>
// //                     </div>
// //                 </div>
// //             </div>
// //         </motion.div>
// //     );
// // }

// // import { motion } from "framer-motion";
// // import Link from "next/link";

// interface User {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     phone: string;
//     website: string;
//     company: { name: string; catchPhrase: string };
//     address: { city: string; street: string };
// }

// // Server-side fetch
// async function getUser(id: string): Promise<User | null> {
//     try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//             cache: "no-store",
//         });
//         if (!res.ok) return null;
//         return res.json();
//     } catch {
//         return null;
//     }
// }

// export default async function UserPage({
//     params,
// }: {
//     params: Promise<{ id: string }>;
// }) {
//     const { id } = await params; // ✅ unwrap the Promise

//     const user = await getUser(id);

//     if (!user) {
//         return (
//             <div className="p-6 text-center">
//                 <h1 className="text-2xl font-bold text-red-600">User not found</h1>
//                 <Link href="/" className="text-blue-600 underline mt-4 block">
//                     ← Back to Dashboard
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <motion.div
//             className="p-6 max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//             <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-lg">
//                 <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
//                     <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
//                         {user.name}
//                     </h1>

//                     <div className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
//                         <p>
//                             <strong className="text-purple-600">👤 Username:</strong>{" "}
//                             @{user.username}
//                         </p>
//                         <p>
//                             <strong className="text-purple-600">📧 Email:</strong> {user.email}
//                         </p>
//                         <p>
//                             <strong className="text-purple-600">📱 Phone:</strong> {user.phone}
//                         </p>
//                         <p>
//                             <strong className="text-purple-600">🌐 Website:</strong>{" "}
//                             <a
//                                 href={`http://${user.website}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-500 underline"
//                             >
//                                 {user.website}
//                             </a>
//                         </p>
//                         <p>
//                             <strong className="text-purple-600">🏢 Company:</strong>{" "}
//                             {user.company.name} –{" "}
//                             <span className="italic">{user.company.catchPhrase}</span>
//                         </p>
//                         <p>
//                             <strong className="text-purple-600">📍 Address:</strong>{" "}
//                             {user.address.street}, {user.address.city}
//                         </p>
//                     </div>

//                     <div className="mt-8 text-center">
//                         <Link href="/">
//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md"
//                             >
//                                 ← Back to Dashboard
//                             </motion.button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }


// src/app/users/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: { name: string; catchPhrase: string };
    address: { city: string; street: string };
}

export default function UserPage() {
    const { id } = useParams<{ id: string }>(); // ✅ works in client
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${id}`
                );
                if (!res.ok) throw new Error("Not found");
                const data = await res.json();
                setUser(data);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [id]);

    if (loading)
        return (
            <div className="p-6 text-center text-lg">Loading user details…</div>
        );

    if (!user)
        return (
            <div className="p-6 text-center">
                <h1 className="text-2xl font-bold text-red-600">User not found</h1>
                <Link href="/" className="text-blue-600 underline mt-4 block">
                    ← Back to Dashboard
                </Link>
            </div>
        );

    return (
        <motion.div
            className="p-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-lg">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
                    <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                        {user.name}
                    </h1>

                    <div className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
                        <p>
                            <strong className="text-purple-600">👤 Username:</strong>{" "}
                            @{user.username}
                        </p>
                        <p>
                            <strong className="text-purple-600">📧 Email:</strong> {user.email}
                        </p>
                        <p>
                            <strong className="text-purple-600">📱 Phone:</strong> {user.phone}
                        </p>
                        <p>
                            <strong className="text-purple-600">🌐 Website:</strong>{" "}
                            <a
                                href={`http://${user.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                {user.website}
                            </a>
                        </p>
                        <p>
                            <strong className="text-purple-600">🏢 Company:</strong>{" "}
                            {user.company.name} –{" "}
                            <span className="italic">{user.company.catchPhrase}</span>
                        </p>
                        <p>
                            <strong className="text-purple-600">📍 Address:</strong>{" "}
                            {user.address.street}, {user.address.city}
                        </p>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/users">
                            <motion.button
                                whileHover={{ scale: 1.05, rotate: -1 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md"
                            >
                                ← Back to Dashboard
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
