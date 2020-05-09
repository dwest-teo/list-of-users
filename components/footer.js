// @flow
import React from 'react';
import Icon from './icons';

const Footer = () => (
  <footer>
    <small>
      <b>UserList</b>, literally just a list of users.
    </small>
    <div className="footer-links">
      <a href="https://github.com">
        <Icon name="github" fill="#fff" size={24} />
        <span>Code on GitHub</span>
      </a>
    </div>
    <style jsx>{`
      footer {
        padding: 2rem 1rem;
        background-color: #357edd;
        color: #fff;
        text-align: center;
      }
      small {
        display: block;
        font-size: 0.875rem;
      }
      .footer-links {
        margin-top: 1rem;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
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
      span {
        margin-left: 0.5rem;
        font-size: 0.75rem;
      }
      @media screen and (min-width: 30em) and (max-width: 60em) {
        footer {
          padding-left: 4rem;
          padding-right: 4rem;
        }
      }
      @media screen and (min-width: 60em) {
        footer {
          padding-left: 8rem;
          padding-right: 8rem;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
