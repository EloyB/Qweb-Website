import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return <div className="font-poppins overflow-x-hidden"><Navbar/>{children}</div>;
}
