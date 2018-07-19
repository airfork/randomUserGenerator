// https://randomuser.me/api/
const btn = document.querySelector('#btn');
const fullName = document.querySelector('#fullname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const city = document.querySelector('#city');
const avatar = document.querySelector('#avatar');
btn.addEventListener('click', () => {
  fetch('https://randomuser.me/api/')
  .then((res) => {
    return res.json();
  }).then((data) => {
    const results = data.results[0];
    fullName.textContent = `${results.name.first.charAt(0).toUpperCase() + results.name.first.slice(1)} ${results.name.last.charAt(0).toUpperCase() + results.name.last.slice(1)}`;
    username.textContent = `${results.login.username}`;
    email.textContent = `${results.email}`;
    city.textContent = `${results.location.city.charAt(0).toUpperCase() + results.location.city.slice(1)}`;
    avatar.src = `${results.picture.medium}`;
  })
});