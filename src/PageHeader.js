import React from "react";
import Image from "./Image";

const PageHeader = ({ title, imgSrc, id }) =>
  <header id={id} className="header jumbotron">
    <h1>
      {title}
    </h1>
    <Image src={imgSrc} />
  </header>;

export default PageHeader;
