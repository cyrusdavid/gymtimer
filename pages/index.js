import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import '../css/style.css'

momentDurationFormatSetup(moment)

const App = dynamic(() => import('../components/app'), { ssr: false })

const Home = () => {
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
      <App/>
    </div>
  )
}

export default Home
