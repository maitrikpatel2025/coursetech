import React from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';
import ButtonOne from '../Button/Button0ne/ButtonOne';
import SearchBox from '../SearchBox/SearchBox';
import ButtonTwo from '../Button/ButtonTwo/ButtonTwo';

const NavBar = (props) => {
return(
    <header className="NavBar">
        <nav className="NavBar_Navigation">
            <div className="NavBar_Logo">
                <Logo/>
            </div>
            <div>
                <span>
                    <i className="bars icon"></i>
                </span>
            </div>
            <div className="Navbar_Dropdown">
                <ButtonOne/>
            </div>
            <div className="NavBar_Searchbox"> 
                <SearchBox/>
            </div>
            <div className="Navbar_Navigation_item">
                <ul>
                    <ButtonTwo/>
                    <ButtonTwo/>
                    <ButtonOne/>
                    <ButtonOne/>
                </ul>
            </div>
        </nav>
    </header>
)
}
export default NavBar;