import React from "react";

const PageHeader = ({ title, imgSrc, id }) => {
  return (
    <header id={id} className="header jumbotron">
      <h1>
        {title}
      </h1>
      <img className="img-responsive" src={imgSrc} alt="" />
    </header>
  );
};

export default PageHeader;
