import React from 'react';
import RootNavigation from './src/RootNavigation';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
