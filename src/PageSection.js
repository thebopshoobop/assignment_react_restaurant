import React from "react";


const PageSection = ({type, title, children, id}) => {
  return (
    <div id={id} class={`panel panel-${type}`}>
      <div class="panel-heading"><h2>{title}</h2></div>
      <div class="panel-body">
        {children}
      </div>
    </div>
  )
}

export default PageSection;
