import React from 'react';
import './Expcar.css';

const Expcard = ({ details }) => {
  return (
    <div className='expcard'>
      <h4>{details.title}</h4>
      <div className="workduration">
        {details.date}
      </div>
      <ul className='responsibility'>
        {details.responsibility.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Expcard;
