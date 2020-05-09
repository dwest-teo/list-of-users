// @flow
import React from 'react';
import Link from 'next/link';

const Header = () => (
  <nav>
    <Link href="/">
      <a className="home-link">UserList</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>

    <style jsx>{`
      nav {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        background-color: #357edd;
      }
      a {
        display: inline-block;
        font-size: 0.875rem;
        color: #fff;
        text-decoration: none;
        transition: color 0.15s ease-in;
      }
      a:hover,
      a:focus {
        opacity: 0.5;
      }
      a:active {
        opacity: 0.8;
      }
      a:focus {
        outline: 1px dotted currentColor;
      }
      .home-link {
        font-weight: bold;
        color: #fff;
      }
      @media screen and (min-width: 30em) {
        nav {
          padding: 2rem;
        }
        a {
          font-size: 1rem;
        }
      }
    `}</style>
  </nav>
);

export default Header;
