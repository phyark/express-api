(function () {
  const username = document.querySelector('input[name=username]')
  const password = document.querySelector('input[name=password]')
  const loginBtn = document.querySelector('.btn')

  // 登录
  const handleLogin = async () => {
    const formdata = {
      username: username.value,
      password: password.value
    }
    const res = await loginApi(formdata)
    if (res.code === 200) {
      console.log('登录成功', res.data)
      sessionStorage.setItem('token', res.data)
      getInfo()
    } else {
      handleRegister()
    }
  }

  const handleRegister = async () => {
    const formdata = {
      username: username.value,
      password: password.value
    }
    const res = await registerApi(formdata)
    if (res.code === 200) {
      console.log('注册成功')
      handleLogin()
    } else {
      alert(res.message || '注册失败')
    }
  }

  const getInfo = async () => {
    const res = await getInfoApi()
    if (res.code) {
      console.log(res.data)
    } else {
      alert(res.message || '查询信息失败')
    }
  }

  const resetForm = () => {
    username.value = ''
    password.value = ''
  }

  loginBtn.addEventListener('click', handleLogin)
})()