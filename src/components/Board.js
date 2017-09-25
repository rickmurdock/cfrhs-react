import React from 'react';
import contacts from '../data/contacts';

const Board = () => {
  let boardMembers = contacts.filter(contact => contact.board === true);
  let boardMembers1 = boardMembers.slice(0,5);
  let boardMembers2 = boardMembers.slice(5);
  
  let boardColumn1 = boardMembers1.map((board1, index) => {  
    return (
      <div key={index}>
        <h5>{board1.position}</h5>
        <p>{board1.name}</p>
      </div>
    );
  });

  let boardColumn2 = boardMembers2.map((board2, index) => {  
    return (
      <div key={index}>
        <h5>{board2.position}</h5>
        <p>{board2.name}</p>
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <h2 className="text-center page-title my-3">Board of Directors</h2>
      <div className="row my-3">
        <div className="col-md-3"></div>
        <div className="col-md-4">
          {boardColumn1}
        </div>
        <div className="col-md-3">
          {boardColumn2}
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Board;