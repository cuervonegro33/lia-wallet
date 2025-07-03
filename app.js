const API_URL = 'https://script.google.com/macros/s/AKfycbyGO_Oy4wtv0xDvrRM1dICLNUFtxQUCVdhOI3c2SqxX0XqA9WbICBkLoyNOsQbulF_0qw/exec';

async function registrar() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'registrar', username, password })
  });
  const data = await res.json();
  alert(data.success ? 'Registrado correctamente' : data.msg);
}

async function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'login', username, password })
  });
  const data = await res.json();
  if (data.success) {
    document.getElementById('balance').innerText = data.balance;
  } else alert(data.msg);
}
