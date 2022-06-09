import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { GiPlasticDuck, GiHamburgerMenu } from 'react-icons/gi';
import { Nav, A, NavbarBox, HeaderStyle } from './style';

const Header = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  return (
    <HeaderStyle>
      <Nav>
        <div className="navbar_logo">
          <GiPlasticDuck fontSize="35px" />
          Duck's Blog
        </div>
        <NavbarBox open={open}>
          <ul className="navbar_menu">
            <li>
              <A href="">Intro</A>
            </li>
            <li>
              <A href="">Blog</A>
            </li>
            <li>
              <A href="">Project</A>
            </li>
            <li>
              <A href="">Contact</A>
            </li>
          </ul>
        </NavbarBox>
        <NavbarBox open={open}>
          <ul className="navbar_icons">
            <li className="git">
              <A href="https://github.com/Duck-98">
                <AiFillGithub fontSize="30px" />
              </A>
            </li>
            <li className="Insta">
              <A href="https://www.instagram.com/duck.__.kn/">
                <AiFillInstagram fontSize="30px" />
              </A>
            </li>
          </ul>
        </NavbarBox>
        <a className="navbar_btn" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </a>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
