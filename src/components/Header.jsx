import React from 'react';
import Profil from '../images/smekiboy.jpg';
import '../App.css';

const Header = () => {
  return (
    <div className="header">
      <img src={Profil} alt="profile" />
      <div className="title">Todo List</div>
    </div>
  );
};

export default Header;
