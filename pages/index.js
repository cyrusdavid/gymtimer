import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import Time from '../components/time'
import createStore from '../store/create-store'
import Reset from '../components/reset'
import SettingsPane from '../components/settings-pane'
import DurationList from '../components/duration-list'
import '../css/style.css'

momentDurationFormatSetup(moment)

const store = createStore()

function Home() {
  return (
    <div>
      <Head>
        <title>Gym Timer</title>
      </Head>
      <Provider store={store}>
        <div className="flex fixed top-0 left-0 right-0 bottom-0 items-center justify-center">
          <div className="w-app relative overflow-hidden p-2">
            <Time/>
            <div className="flex flex-wrap">
              <DurationList/>
              <Reset/>
            </div>
            <SettingsPane/>
          </div>
        </div>
      </Provider>
    </div>
  )
}

export default Home
