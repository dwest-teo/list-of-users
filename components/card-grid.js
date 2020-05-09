// @flow
import React, { Fragment, memo, useState } from 'react';
import Card, { type CardType } from './card';
import TextInput from './text-input';
import Button from './button';
import containsString from '../core/utils/contains-string';
import compareLastNames from '../core/utils/compare-last-names';

export type Users = {
  users: Array<CardType>,
};

const CardGrid = ({ users }: Users) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [displayUsers, setDisplayUsers] = useState(
    users.sort(compareLastNames)
  );

  const handleOnChange = (event: SyntheticInputEvent<>) => {
    const term = event.target.value;

    // I explored a number of alternatives that iterated over the fields in
    // the user object, but ended up explicitly defining each field to search
    // as any other method I tried resulted in pretty poor performance
    const newDisplayUsers = users.filter(user => {
      if (
        containsString(term, user.name.first.toLowerCase()) ||
        containsString(term, user.name.last.toLowerCase()) ||
        containsString(term, user.email.toLowerCase()) ||
        containsString(term, user.phone.toLowerCase()) ||
        containsString(term, user.location.city.toLowerCase()) ||
        containsString(term, user.location.state.toLowerCase())
      ) {
        return true;
      }

      return false;
    });

    setSearchTerm(term);
    setDisplayUsers(newDisplayUsers);
  };

  const handleSortButtonClick = () => {
    // React won't update if we just .reverse() the existing array in-place
    // using .slice() here to make a quick clone of the array
    const newDisplayUsers = displayUsers.slice().reverse();
    setSortAscending(!sortAscending);
    setDisplayUsers(newDisplayUsers);
  };

  return (
    <Fragment>
      <div className="grid-header">
        <h1>Users</h1>
        <div className="search-control-container">
          <div className="search-bar-wrapper">
            <TextInput
              name="search"
              label="Search"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </div>
          <Button onClick={handleSortButtonClick}>
            Sort by Last Name {sortAscending ? '↓' : '↑'}
          </Button>
        </div>
      </div>
      <section>
        {displayUsers.map(user => (
          <Card
            key={user.login ? user.login.uuid : user.email}
            name={user.name}
            email={user.email}
            phone={user.phone}
            location={user.location}
            picture={user.picture}
            login={user.login}
          />
        ))}
      </section>
      <style jsx>{`
        h1 {
          margin: 2rem 0;
          line-height: 1.25;
        }
        .grid-header {
          margin: 0 1rem;
        }
        .search-control-container {
          display: flex;
        }
        .search-bar-wrapper {
          flex: 1 1 auto;
          margin-right: 1rem;
        }
        section {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          margin-bottom: 2rem;
        }
        @media screen and (min-width: 30em) {
          section {
            padding: 0.5rem;
          }
          .search-bar-wrapper {
            margin-right: 2rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default memo<*>(CardGrid);
