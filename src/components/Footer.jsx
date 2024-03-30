import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center h-40 text-base lg:text-lg lg:h-72">
      <p>&copy; {new Date().getFullYear()}</p>
      <p className="text-center">Designed and developed by Vanshaj Bhatnagar</p>
    </div>
  );
}

export default Footer;
