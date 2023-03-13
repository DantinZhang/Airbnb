import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import Header from 'components/app-header';
import Footer from 'components/app-footer';

const App = memo(() => {
  return (
    <div>
      <div className="app">
        <Header/>
        <div className="content">
          {useRoutes(routes)}
        </div>
        <Footer/>
      </div>
    </div>
  )
})

export default App