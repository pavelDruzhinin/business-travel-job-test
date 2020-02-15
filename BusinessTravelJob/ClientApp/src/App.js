import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import './scss/main.scss';
import ToursTableComponent from './components/ToursTable';

//set default locale for datepickers
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ru } from 'date-fns/locale';
registerLocale('ru', ru);
setDefaultLocale('ru');

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="m-4">
      <Provider store={store}>
        <ToursTableComponent />
      </Provider>
    </div>
  );
}

export default App;