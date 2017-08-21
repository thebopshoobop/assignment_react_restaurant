import React from "react";

const PageSection = ({ type, title, children, id }) => {
  return (
    <div id={id} className={`panel panel-${type}`}>
      <div className="panel-heading">
        <h2>
          {title}
        </h2>
      </div>
      <div className="panel-body">
        {children}
      </div>
    </div>
  );
};

export default PageSection;
