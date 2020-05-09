// @flow
import React, { memo } from 'react';
import Link from 'next/link';
import Icon from './icons';
import Avatar from './avatar';

export type CardType = {
  name: {
    first: string,
    last: string,
  },
  email: string,
  phone: string,
  location: {
    city: string,
    state: string,
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  },
  login: {
    uuid: string,
  },
};

const Card = ({ name, email, phone, location, picture, login }: CardType) => (
  <article>
    <Link href="/edit/[id]" as={`/edit/${login.uuid}`}>
      <a className="edit-button">
        <Icon name="edit" fill="#fff" size={24} viewBox="0 0 512 640" />
      </a>
    </Link>
    <div className="background">
      <h1>
        {name.first} {name.last}
      </h1>
    </div>
    <div className="content">
      <Avatar
        src={picture.medium}
        alt={`${name.first} ${name.last}'s avatar`}
      />
      <p>{email}</p>
      <p>{phone}</p>
      <p>
        {location.city}, {location.state}
      </p>
    </div>

    <style jsx>{`
      article {
        position: relative;
        max-width: 100%;
        flex-basis: 100%;
        margin: 1rem 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        overflow: hidden;
        text-align: center;
      }
      .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #357edd;
        z-index: -1;
      }
      .content {
        padding: 0.5rem;
        margin-top: 2rem;
      }
      .edit-button {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        z-index: 1;
      }
      h1 {
        font-size: 1.5rem;
        padding: 1.5rem 0 4rem;
        margin: 0;
        color: #fff;
        line-clamp: 1;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        color: #777;
        margin: 0.5rem 0;
      }
      @media screen and (min-width: 30em) {
        article {
          max-width: calc(33% - 1rem);
          flex-basis: calc(33% - 1rem);
        }
      }
      @media screen and (min-width: 60em) {
        article {
          max-width: calc(25% - 1rem);
          flex-basis: calc(25% - 1rem);
        }
      }
    `}</style>
  </article>
);

export default memo<*>(Card);
