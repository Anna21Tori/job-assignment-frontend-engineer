import React from "react";
import Footer from "components/footer.component";
import Header from "components/header.component";

interface BaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout = (props: BaseLayoutProps) => {
  const { children } = props;

  return (
    <div className="app-container">
      <div className="wrapper">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default BaseLayout;
