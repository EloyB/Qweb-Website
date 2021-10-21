import React from "react";
import Footer from "./Footer";
import Navbar from "../Navigation/navbar";

export default function Layout({ children }) {
  return (
    <div className="font-poppins bg-gray-50 overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
