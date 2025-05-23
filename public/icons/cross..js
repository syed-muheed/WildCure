import { usePathname } from "next/navigation";
import React from "react";

const Cross = () => {
  const pathname = usePathname();
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 10.2623L18.0123 4.25L19.75 5.98775L13.7377 12L19.75 18.0123L18.0123 19.75L12 13.7377L5.98775 19.75L4.25 18.0123L10.2623 12L4.25 5.98775L5.98775 4.25L12 10.2623Z"
          fill={
            pathname == "/quality" ||
            pathname == "/manufacturing" ||
            pathname == "/contactus"  ||
            pathname == "/global" ||
            pathname == "/privacypolicy"||
            pathname == "/T&C"
              ? " #084BCE "
              : "#fff"
          }
        />
      </svg>
    </div>
  );
};

export default Cross;
