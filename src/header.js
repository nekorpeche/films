import React from 'react';
import './header.css';
import Recherche from './Recherche';


const Header = () => {
    return (
<header className="masthead">
  <div className="container h-10">
    <div className="row h-100 align-items-center">
        <div className="col-12 text-center">
            <div className="lead"><Recherche /></div>
        </div>
    </div>
  </div>
</header>
        
    );
};
export default Header;


