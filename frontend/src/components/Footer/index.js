import React from 'react';
import {Link} from "@material-ui/core";

const Footer = () => {
    return (
        <footer className="app-footer justify-content-center">
            <span className="d-inline-block">
                Powered by MAZ Systems &copy; 2020 | <Link href={"mailto:geekashu@gmail.com"}>geekashu@gmail.com</Link> | Ashish Kumar Saini
            </span>
        </footer>
    );
};

export default Footer;
