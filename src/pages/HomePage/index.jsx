import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import Articles from '../../components/Articles/Articles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { objectToArrayWithKey, objectToArray } from '../../utils/common';

const HomePage = ({ settings, onMobile }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const limit = 15; // this should be modified
  const [startAt, setStartAt] = useState('');
  const [queries, setQueries] = useState(['orderByChild=date', `limitToLast=${limit}`]);
  const [types, setTypes] = useState([]);
  
  useEffect(() => {
    if (settings) {
      setTypes(objectToArrayWithKey(settings.types));
    }
  }, [settings]);

  useEffect(() => {
    setSelectedTypes(objectToArray(types));
  }, [types]);

  if (!isLoaded(settings)) {
    return <CircularProgress size='50' color='secondary' />;
  }

  const changeQueryArticles = (startArticleId) => {
    setStartAt(startArticleId);
    setQueries(['orderByChild=date', `endAt=${startArticleId}`, `limitToLast=${limit}`]);
  };

  const isInSelectedTypes = (currentSelectedType) => {
    for (const type of selectedTypes) {
      if (type.key === currentSelectedType.key) {
        return true;
      }
    }
    return false;
  };

  const modifySelectedTypes = (type) => {
    setSelectedType(type);
    if (isInSelectedTypes(type)) {
      setSelectedTypes((oldTypes) => oldTypes.filter((oldType) => oldType.key !== type.key));
    } else {
      setSelectedTypes((oldTypes) => [...oldTypes, type]);
    }
  };

  return (
    <Fragment>
      <FilterButtons onMobile={onMobile} modifySelectedTypes={modifySelectedTypes} types={types} />
      <Articles
        queries={queries}
        startAt={startAt}
        changeQueryArticles={changeQueryArticles}
        maxArticlesPerPage={settings.maxArticlesPerPage}
        limit={limit}
        types={settings.types}
        type={selectedType}
        setSelectedTypes={setSelectedTypes}
        selectedTypes={selectedTypes}
      />
    </Fragment>
  );
};

// };

const enhance = compose(
  firebaseConnect(() => [{ path: 'settings' }]),
  connect((state) => ({
    settings: state.firebase.data.settings,
  })),
);

export default enhance(HomePage);
