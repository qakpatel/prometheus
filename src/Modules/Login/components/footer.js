import React from "react";

const Footer = () => {
    return (
        <section className="footerSection">
            Copyright ©
          <span className="copyrightText">
                {new Date().getFullYear()}  Prometheus School. All rights reserved.
          </span>
        </section>
    )
}

export default Footer;