# 爱彼迎接口文档

https://documenter.getpostman.com/view/12387168/2s7YfKDwcn

## home

### 折扣优惠

http://codercba.com:1888/airbnb/api/home/discount

Example Request

折扣优惠

View More

```js
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://codercba.com:1888/airbnb/api/home/discount", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

GET

### 热门推荐

http://codercba.com:1888/airbnb/api/home/hotrecommenddest

Example Request

热门推荐

View More

```js
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://codercba.com:1888/airbnb/api/home/hotrecommenddest", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

GET

### 高分房源

http://codercba.com:1888/airbnb/api/home/highscore

Example Request

高分房源

View More

```js
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://codercba.com:1888/airbnb/api/home/highscore", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

GET

### 高性价比

http://codercba.com:1888/airbnb/api/home/goodprice

Example Request

高性价比

View More

```js
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://codercba.com:1888/airbnb/api/home/goodprice", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

GET

### plus房源

http://codercba.com:1888/airbnb/api/home/plus

Example Request

plus房源

View More

```js
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://codercba.com:1888/airbnb/api/home/plus", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

GET

### 向往城市

http://codercba.com:1888/airbnb/api/home/longfor

Example Request

向往城市

View More

```javascript
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://codercba.com:1888/airbnb/api/home/longfor", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

## entire

### 全部数据

http://codercba.com:1888/airbnb/api/entire/list?offset=0&size=20

PARAMS

* offset
* size

Example Request

全部数据

View More

```javascript
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://codercba.com:1888/airbnb/api/entire/list?offset=0&size=20", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
