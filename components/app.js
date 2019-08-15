import React from 'react'
import { Provider } from 'react-redux'
import store from 'store2'
import createStore from '../store/create-store'
import { STORE_KEY } from '../store/constants';
import Time from './time'
import Reset from './reset'
import SettingsPane from './settings-pane'
import DurationList from './duration-list'
import Welcome from './welcome'

const reduxStore = createStore(store(STORE_KEY))

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="flex fixed top-0 left-0 right-0 bottom-0 items-center justify-center">
        <div className="w-app relative overflow-hidden p-2">
          <Time/>
          <div className="flex flex-wrap">
            <DurationList/>
            <Reset/>
          </div>
          <SettingsPane/>
          <Welcome/>
        </div>
      </div>
    </Provider>
  )
}

export default App
