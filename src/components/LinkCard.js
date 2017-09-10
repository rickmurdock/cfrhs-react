import React from 'react';

const LinkCard = (props) => {
  return (
    <div className="card">
      <div className="card-header" role="tab" id={"heading" + props.card}>
        <h5 className="mb-0">
          <a data-toggle="collapse" data-parent="#accordion" href={"#collapse" + props.card} aria-expanded={props.expanded} aria-controls={"collapse" + props.card}>
            {props.title}
          </a>
        </h5>
      </div>
      <div id={"collapse" + props.card} className={"collapse " + props.show} role="tabpanel" aria-labelledby={"heading" + props.card}>
        <div className="card-block">
          <ul>
            {props.children}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;