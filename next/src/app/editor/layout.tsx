import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <body>
        {/* Nav */}
        {children}
      </body>
      {/* Footer */}
    </>
  );
};

export default layout;
