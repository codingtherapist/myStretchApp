document.addEventListener('DOMContentLoaded', () => {
  const $nav = document.getElementById('nav');
  const $navBurger = document.getElementById('nav-burger');
  const $navCancel = document.getElementById('nav-cancel');
  const $navSearch = document.getElementById('nav-search');
  const $navSearchBtn = document.getElementById('nav-search-button');
  const $navSearchBar = document.getElementById('nav-search-bar');
  const $navSearchCancel = document.getElementById('nav-search-cancel');
 // Add a click event on each of them
  $navBurger.addEventListener('click', () => {
    $nav.classList.toggle('is-active');
    $navCancel.classList.toggle('is-active');
  });
  $navCancel.addEventListener('click', () => {
    $nav.classList.toggle('is-active');
    $navCancel.classList.toggle('is-active');
  });  
  $navSearchBtn.addEventListener('click', () => {
    $navSearch.classList.toggle('is-hidden');
    $navSearchCancel.classList.toggle('is-hidden');
    $navSearchBtn.classList.toggle('is-hidden');
    $navSearchBar.classList.toggle('is-hidden');
    $navSearchBar.focus();
  });
  $navSearchCancel.addEventListener('click', () => {
    $navSearch.classList.toggle('is-hidden');
    $navSearchCancel.classList.toggle('is-hidden');
    $navSearchBtn.classList.toggle('is-hidden');
    $navSearchBar.classList.toggle('is-hidden');
  });

  $navSearchBar.addEventListener('blur', ()=>{
    $navSearch.classList.toggle('is-hidden');
    $navSearchCancel.classList.toggle('is-hidden');
    $navSearchBtn.classList.toggle('is-hidden');
    $navSearchBar.classList.toggle('is-hidden');
  })
});