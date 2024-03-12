const input = document.getElementById ('link-input')
const linkForm = document.getElementById ('link-form')
const errMsg = document.getElementById ('err-msg')

linkForm.addEventListener ('submit', formSubmit)

function formSubmit(e){
e.preventDefault ()
if(input.value === ''){
    errMsg.innerHTML = 'Please enter something'
    input.classList.add('border-red')
}
else {
    errMsg.innerHTML = 'Please enter something'
    input.classList.remove('border-red')
    alert(Success)
}
}