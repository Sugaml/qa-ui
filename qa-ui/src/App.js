import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import MainRouter from './Routes/MainRoutes';
import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react'

const {store,persistor} = configureStore();

function App() {
  return (
    <Provider store={store}>   
     <PersistGate persistor={ persistor }>
    <Fragment>
        <MainRouter />
    </Fragment>
    </PersistGate>
</Provider>
  );
}

export default App;
