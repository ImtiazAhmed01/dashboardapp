import axios from "axios";

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: { lat: string; lng: string };
    };
    company: { name: string; catchPhrase: string; bs: string };
};

export async function fetchUsers(): Promise<User[]> {
    const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
    return res.data;
}

export async function fetchUserById(id: string | number): Promise<User> {
    const res = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.data;
}
