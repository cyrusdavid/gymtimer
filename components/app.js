import React from 'react'
import { Provider } from 'react-redux'
import store from 'store2'
import createStore from '../store/create-store'
import { STORE_KEY } from '../store/constants'
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
        <div className="h-full md:h-auto flex flex-col w-app relative overflow-hidden p-2">
          <div className="duration-list flex-1 md:flex md:flex-wrap md:flex-none">
            <Time/>
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
