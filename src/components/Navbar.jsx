import React from 'react';

function Navbar({onSectionChange}) {
  return (
    <div className="nav-container">
      <nav className="navbar">
    <button className="nav-button font-size: 100px" onClick={() => onSectionChange('AboutMe')}>About Me</button>
    <button className="nav-button" onClick={() => onSectionChange('Experience')}>Experience</button>
    <button className="nav-button" onClick={() => onSectionChange('Recommended')}>Recommended</button>
  </nav>
    </div>
  );
}

export default Navbar;