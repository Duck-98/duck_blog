import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { GiPlasticDuck, GiHamburgerMenu } from 'react-icons/gi';
import Hamburger from 'hamburger-react';
import { Nav, A } from './style';

const Layout = () => {
  const [Open, setOpen] = useState(true);

  const router = useRouter();
  return (
    <Nav>
      <div className="navbar_logo">
        Duck's Blog
        <GiPlasticDuck fontSize="30px" />
      </div>
      {Open && (
        <>
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
          <ul className="navbar_icons ">
            <li>
              <AiFillGithub fontSize="30px" href="https://github.com/Duck-98" />
            </li>
            <li>
              <AiFillInstagram fontSize="30px" />
            </li>
          </ul>
        </>
      )}

      <a className="navbar_btn" onClick={() => setOpen(!Open)}>
        <GiHamburgerMenu />
      </a>
    </Nav>
  );
};

export default Layout;
