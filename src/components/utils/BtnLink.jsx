import React from 'react';
import { Link } from 'react-router-dom';

const BtnLink = ({name,location,color}) => {
  return (
    <Link to={location} style={{['--color'] : color || "white"}} className="button">
      {name}
    </Link>
  );
};

export default BtnLink;