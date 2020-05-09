// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import withRedux from '../../core/redux';
import Avatar from '../../components/avatar';
import EditForm from '../../components/edit-form';

type Props = {
  id: string,
};

const EditUser = ({ id }: Props) => {
  const user = useSelector(state => state.users.find(u => u.login.uuid === id));
  const { picture, name } = user;

  return (
    <div className="content-wrapper">
      <Head>
        <title>
          Edit {name.first} {name.last} | UserList
        </title>
      </Head>
      <div className="header content-section">
        <h1>Edit User</h1>
        <Avatar
          src={picture.medium}
          alt={`${name.first} ${name.last}'s avatar`}
        />
        <span>
          {name.first} {name.last}
        </span>
      </div>
      <div className="content-section">
        <EditForm {...user} />
      </div>

      <style jsx>{`
        .content-wrapper {
          *zoom: 1;
          padding: 4rem 1rem;
        }
        .content-wrapper:before,
        .content-wrapper:after {
          content: ' ';
          display: table;
        }
        .content-wrapper:after {
          clear: both;
        }
        .content-section {
          float: none;
          max-width: 30em;
          line-height: 1.5;
        }
        .header {
          display: flex;
          flex-flow: column nowrap;
        }
        h1 {
          margin: 0;
          line-height: 1.25;
          padding-left: 0.5rem;
        }
        span {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #777;
          padding-left: 0.5rem;
        }
        @media screen and (min-width: 30em) {
          .content-wrapper {
            padding: 4rem;
          }
          .content-section {
            float: left;
            width: 50%;
          }
          .header {
            padding-right: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

EditUser.getInitialProps = async ({ query }: { query: Object }) => {
  const { id } = await query;

  return { id };
};

export default withRedux(EditUser);
