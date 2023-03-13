import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import 'normalize.css';  //先引入模板
import 'assets/css/reset.css' //引入自定义样式
import store from '@/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Suspense fallback={<h3>路由加载中……请稍后……</h3>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </HashRouter>
);