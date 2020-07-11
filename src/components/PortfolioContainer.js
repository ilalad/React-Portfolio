import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

class PortfolioContainer extends Component {
    state = {
        currentPage: "About",

    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
        this.setState({ page: About })
    };

    render() {
        return (
            <div>
                <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />

            </div>
        );
    }
}

export default PortfolioContainer;
