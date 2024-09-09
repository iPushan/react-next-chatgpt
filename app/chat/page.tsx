import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Chat App",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className="p-10 bg-red-500">
      <h1>Hello Chat</h1>
    </main>
  );
}
