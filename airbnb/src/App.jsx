import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';

const App = memo(() => {
  return (
    <div>
      <div className="app">
        <div className="header">Header</div>
        <div className="content">
          {useRoutes(routes)}
        </div>
        <div className="footer">Footer</div>
      </div>
    </div>
  )
})

export default App