export function getAuthForm() {
    return `
       <form class="mui-form" id="auth-form">
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="email" id="email" required>
                    <label class="textask" for="email">Email</label>
                </div>
                
                
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="password" id="password" required>
                    <label class="textask" for="password">Пароль</label>
                </div>

                <button type="submit"
                       
                        class="mui-btn mui-btn--raised mui-btn--primary"
                    >
                Войти
                </button>
            </form>
    `
}


export function authWithEmailPassword(email, password) {
    const apiKey = 'AIzaSyAclPEu2nMQVYJcOvLcOCVN6Ih1bi8osAI'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body:JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(respons => respons.json())
        .then(data => data.idToken)
    console.log(data)
}
