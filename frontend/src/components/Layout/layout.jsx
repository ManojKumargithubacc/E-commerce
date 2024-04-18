import React from "react";
import Header from "./Header/header.jsx";
import Footer from "./Footer/footer.jsx";


function Layout({ children}) {
  return (
    <div>

      <Header />
      <main style={{ minHeight: "75vh" }}>
        {children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
