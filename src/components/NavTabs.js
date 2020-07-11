import React from "react";

function NavTabs(props) {
    return (
        <thead className="nav nav-tabs">

            <th className="nav-item">
                <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
                    About
        </a>
            </th>


            <th className="nav-item">
                <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
                    Contact
        </a>
            </th>
            <th className="nav-item">
                <a href="#portfolio" onClick={() => props.handlePageChange("Portfolio")} className="nav-link">
                    Portfolio
        </a>
            </th>
        </thead>

    );
}

export default NavTabs;
