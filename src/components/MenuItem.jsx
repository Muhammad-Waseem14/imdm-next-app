import Link from "next/link";
import React from "react";

function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link className="hover:text-amber-500" href={address}>
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
