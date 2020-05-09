// @flow
import React from 'react';
import Head from 'next/head';
import withRedux from '../core/redux';

const About = () => (
  <article>
    <Head>
      <title>About | UserList</title>
    </Head>
    <h1>About</h1>
    <p>
      This project was built by Donny West for Mad Mobile. Additional details
      regarding the project are available in the README file in the{' '}
      <a href="https://github.com/dwest-teo/list-of-users">GitHub repo</a>.
    </p>
    <p>
      I enjoyed working on this project, and I appreciate your time reviewing my
      work!
    </p>
    <style jsx>{`
      article {
        padding: 1rem;
      }
      p {
        max-width: 30em;
        line-height: 1.5;
      }
      a {
        text-decoration: none;
        color: #357edd;
        transition: opacity 0.15s ease-in;
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
      @media screen and (min-width: 30em) {
        article {
          padding: 4rem;
        }
      }
    `}</style>
  </article>
);

// although this page doesn't use any data from Redux, I'm still connecting it
// to the withRedux HOC to account for someone navigating directly to this page
export default withRedux(About);
