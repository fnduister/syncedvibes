import React, { useState } from 'react';
import { Search, SearchIconStyled, InputBaseStyled } from './styled';
import SearchIcon from '@material-ui/icons/Search';
import { withFirebase } from 'react-redux-firebase';
import throttle from 'lodash.throttle';
import { setSearchValue } from './reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

const SearchBox = ({ firebase, setNewSearchValue }) => {
  const [textSearched, setTextSearched] = useState('');
  const handleChange = (value) => {
    setNewSearchValue(value);
    setTextSearched(value);
    query();
  };

  const query = throttle(
    () => {
      firebase
        .database()
        .ref('articles/')
        .orderByChild('title')
        .startAt(textSearched)
        .endAt(textSearched + '\uf8ff')
        .once('value', (data) => {
          console.log(data.val());
        });
    },
    10000,
    { trailing: false },
  );

  return (
    <Search>
      <SearchIconStyled>
        <SearchIcon />
      </SearchIconStyled>
      <InputBaseStyled
        placeholder='Search…'
        type='text'
        value={textSearched}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </Search>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNewSearchValue: (newValue) => {
      dispatch(setSearchValue(newValue));
    },
  };
};

const enhance = compose(withFirebase, connect(null,mapDispatchToProps));

export default enhance(SearchBox);
