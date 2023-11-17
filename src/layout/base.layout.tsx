import React from "react"
import Footer from "components/footer.component"
import Header from "components/header.component"

interface BaseLayoutProps {
    children: React.ReactNode
}
const BaseLayout = (props: BaseLayoutProps) => {
    const {children} = props;

    return (
        <div className="container-fluid">
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default BaseLayout;