import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="mt-24 text-center">
      <h2>Not Found</h2>
      <p>Cound not find requested resource</p>

      <Link href="/" className="text-blue-500 cursor-pointer mt-20">
        Go back to home page!
      </Link>
    </div>
  );
};

export default NotFound;
