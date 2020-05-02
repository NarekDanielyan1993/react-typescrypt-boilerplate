import * as React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default Layout;
