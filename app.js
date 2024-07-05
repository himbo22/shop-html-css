function showRegisterForm() {
  document.getElementById('modal-id').style.display = 'flex'
  document.getElementById('auth-form-register-id').style.display = 'block'
  document.getElementById('auth-form-login-id').style.display = 'none'
}

function showLoginForm() {
  document.getElementById('modal-id').style.display = 'flex'
  document.getElementById('auth-form-register-id').style.display = 'none'
  document.getElementById('auth-form-login-id').style.display = 'block'
}

function hideAuthForm() {
  document.getElementById('modal-id').style.display = 'none'
}

