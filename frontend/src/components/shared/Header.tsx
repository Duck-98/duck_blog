import { useRouter } from 'next/router';
import Link from 'next/link';
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
          <Link href="/">
            <GiPlasticDuck fontSize="35px" />
            Duck's Blog
          </Link>
        </div>
        <NavbarBox open={open}>
          <ul className="navbar_menu">
            <li>
              <Link href="/intro">Intro</Link>
            </li>
            <li>
              <Link href="/posts/blog">Blog</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </NavbarBox>
        <NavbarBox open={open}>
          <ul className="navbar_icons">
            <li className="git">
              <Link href="https://github.com/Duck-98">
                <AiFillGithub fontSize="30px" />
              </Link>
            </li>
            <li className="Insta">
              <Link href="https://www.instagram.com/duck.__.kn/">
                <AiFillInstagram fontSize="30px" />
              </Link>
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
