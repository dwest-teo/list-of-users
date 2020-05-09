// @flow
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import withRedux from '../core/redux';
import CardGrid, { type Users } from '../components/card-grid';

const Home = ({ users }: Users) => (
  <Fragment>
    <Head>
      <title>UserList</title>
    </Head>
    <CardGrid users={users} />
  </Fragment>
);

export default withRedux(
  connect(state => ({
    users: state.users,
  }))(Home)
);
