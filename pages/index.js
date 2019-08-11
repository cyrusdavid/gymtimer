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
import Welcome from '../components/welcome'
import Storage from '../store/storage-local'

momentDurationFormatSetup(moment)

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      store: createStore()
    }
  }

  componentDidMount() {
    const storage = new Storage()
    const store = createStore({
      durations: storage.get('durations') || void 0
    })
    this.setState({
      store
    })
  }

  render() {
    const { store } = this.state

    return (
      <div>
        <Head>
          <title>Gym Timer</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="manifest" href="/static/manifest.json"/>
          <meta name="theme-color" content="#FFFFFF"/>
          <link rel="apple-touch-icon" href="/static/icon-512.png"/>
          <meta charset="utf-8"/>
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
              <Welcome/>
            </div>
          </div>
        </Provider>
      </div>
    )
  }
}

export default Home
