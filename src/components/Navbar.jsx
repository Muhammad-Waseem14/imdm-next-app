import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-8">
      <NavbarItem title="Trending" param="fetchTranding" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
