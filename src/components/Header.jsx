import React from 'react'
import logoIcon from '../styles/images/circleLogo.svg';
import logoText from '../styles/images/walkseeTextVector.svg';

const Header = () => {
    return(
        <>
            <header className="header_Container">
                <img className="logoIcon" src={logoIcon} alt="logo" />
                <img className="logoText" src={logoText} alt="logo" />
            </header>
        </>
    );
}
export default  Header;