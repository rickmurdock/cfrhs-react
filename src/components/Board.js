import React from 'react';

const Board = () => {
  return (
    <div className="container-fluid">
      <h2 className="text-center page-title my-3">Board of Directors</h2>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-4">
          <h5>President</h5>
          <p>Jerry Honetor</p>
          <h5>VP - Membership & Programs</h5>
          <p>Phil Piet</p>
          <h5>VP - Education & Public Relations</h5>
          <p>Irv Lipscomb</p>
          <h5>Secretary	</h5>
          <p>Joe Lehmann</p>
          <h5>Assistant Secretary</h5>
          <p>Jarrod Reynolds</p>
        </div>
        <div className="col-md-3">
          <h5>Treasurer</h5>
          <p>David Rhea</p>
          <h5>Assistant Treasurer</h5>
          <p>Roger Wilson</p>
          <h5>Museum Curator</h5>
          <p>Ken Murdock</p>
          <h5>Historian</h5>
          <p>Phil Cross</p>
          <h5>Immediate Past President</h5>
          <p>Bill Dusenbury</p>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Board;