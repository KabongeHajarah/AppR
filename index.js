//index.js
// importing the react and react-dom package

import React from 'react'
import ReactDOM from 'react-dom'

const jsxElement = <h1>This is a JSX element</h1>
const rootElement = document.getElementById('root')

ReactDOM.render(jsxElement, rootElement)

const title = <h2>Getting Started React</h2>

const header = (
    <header>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
    </header>
  )
 // JSX element, main
const main = (
    <main>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </main>
  )
  
  // JSX element, footer
  const footer = (
    <footer>
      <p>Copyright 2020</p>
    </footer>
  )
  
  // JSX element, app, a container or a parent
  const app = (
    <div>
      {header}
      {main}
      {footer}
    </div>
  )

ReactDOM.render(header, rootElement)