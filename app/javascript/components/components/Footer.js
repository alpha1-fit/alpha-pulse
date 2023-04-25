import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <Link to="/about">
        <Button>αJoel</Button>
      </Link>
      <Link to="/about">
        <Button>αYahyα </Button>
      </Link>
      <Link to="/about">
        <Button>αChris</Button>
      </Link>
      <Link to="/about">
        <Button>αDennis</Button>
      </Link>
    </div>
  );
};

export default Footer;
