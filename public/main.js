const signUpButton = document.getElementById('signUpBtn')
const nameSignUp = document.getElementById('nameInput')
const emailSignUp = document.getElementById('emailInput')

signUpButton.addEventListener('click', (event) => {
    event.preventDefault()

    const body = {
        signup: nameSignUp.value,
        signup: emailSignUp.value,
    }
    axios.post('http://localhost:4000/api/signup', body).then((result)=> {
        console.log(result.data)
    }).catch((err) => {
        console.log(err)
    })
})