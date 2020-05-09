// @flow
import React from 'react';
import Head from 'next/head';

const About = () => (
  <article>
    <Head>
      <title>About | UserList</title>
    </Head>
    <h1>About</h1>
    <p>
      This project was built by Donny West for Mad Mobile. Additional details
      regarding the project are available in the README file in the GitHub repo.
    </p>
    <style jsx>{`
      article {
        padding: 1rem;
      }
      p {
        max-width: 30em;
        line-height: 1.5;
      }
      @media screen and (min-width: 30em) {
        article {
          padding: 4rem;
        }
      }
    `}</style>
  </article>
);

export default About;
