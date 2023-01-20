(function () {
    const username = document.querySelector('input[name=username]')
    const password = document.querySelector('input[name=password]')
    const loginBtn = document.querySelector('.btn')
    fetch()

    const handleLogin = () => {
        console.log({ username: username.value, password: password.value })
    }

    const resetForm = () => {
        username.value = ''
        password.value = ''
    }

    loginBtn.addEventListener('click', handleLogin)
})()