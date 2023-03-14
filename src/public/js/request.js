async function postData(url = '', data = {}, options) {
  let headers =   {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  }
  const token = sessionStorage.getItem('token')
  headers['Authorization'] = 'Bearer ' + token
  if (options && options.headers) {
    for (let key in options.headers) {
      headers[key] = options.headers[key]
    }
  }
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: headers,
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


// 登录
const loginApi = (data) => {
  return postData('/api/v1/login', data)
}

// 注册
const registerApi = (data) => {
  return postData('/api/v1/register', data)
}

// 获取信息
const getInfoApi = (data) => {
  return postData('/api/v1/getInfo', data)
}
