import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Articles from '../../components/Articles/Articles';
import CircularProgress from '@material-ui/core/CircularProgress';

const HomePage = ({ settings }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [limit, setLimit] = useState(15);
  const [startAt, setStartAt] = useState('');
  const [queries, setQueries] = useState(['orderByChild=date', `limitToLast=${limit}`]);

  useEffect(() => {
    if (settings) {
      setSelectedTypes(settings.types);
    }
  }, [settings]);

  if (!isLoaded(settings)) {
    return <CircularProgress size='50' color='secondary' />;
  }

  const changeQueryArticles = (startArticleId) => {
    console.log('TCL: HomePage -> settings', settings);
    console.log('TCL: changeStartArticles -> startArticleId', startArticleId);
    setStartAt(startArticleId);
    setQueries(['orderByChild=date', `endAt=${startArticleId}`, `limitToLast=${limit}`]);
  };

  const modifySelectedTypes = (type) => {
    setSelectedType(type);
    if (selectedTypes.includes(type)) {
      setSelectedTypes((oldTypes) => oldTypes.filter((oldType) => oldType !== type));
    } else {
      setSelectedTypes((oldTypes) => [...oldTypes, type]);
    }
    console.log(selectedTypes);
  };

  return (
    <Fragment>
      <FilterButtons modifySelectedTypes={modifySelectedTypes} types={settings.types} />
      <Articles
        queries={queries}
        startAt={startAt}
        changeQueryArticles={changeQueryArticles}
        limit={limit}
        type={selectedType}
        setSelectedTypes={setSelectedTypes}
        selectedTypes={selectedTypes}
      />
    </Fragment>
  );
};

// };

const enhance = compose(
  firebaseConnect(() => [{ path: 'settings/types' }]),
  connect((state) => ({
    settings: state.firebase.data.settings,
  })),
);

export default enhance(HomePage);
