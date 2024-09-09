"use client";
import Navigation from "@/components/home/Navigation";
import Main from "@/components/home/Main";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex h-full">
      <Navigation />
      <Main />
    </div>
  );
}
