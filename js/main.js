'use strict';

{
const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const open4 = document.getElementById('open4');
const open5 = document.getElementById('open5');
const open6 = document.getElementById('open6');

const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modal4 = document.getElementById('modal4');
const modal5 = document.getElementById('modal5');
const modal6 = document.getElementById('modal6');

const mask = document.getElementById('mask');
const close = document.getElementById('close');


open1.addEventListener('click', () => {
  modal1.classList.remove('hidden');
  mask.classList.remove('hidden');
  close.classList.remove('hidden');
});

open2.addEventListener('click', () => {
  modal2.classList.remove('hidden');
  mask.classList.remove('hidden');
  close.classList.remove('hidden');
});

open3.addEventListener('click', () => {
  modal3.classList.remove('hidden');
  mask.classList.remove('hidden');
  close.classList.remove('hidden');
});

open4.addEventListener('click', () => {
  modal4.classList.remove('hidden');
  mask.classList.remove('hidden');
  close.classList.remove('hidden');
});

open5.addEventListener('click', () => {
  modal5.classList.remove('hidden');
  mask.classList.remove('hidden');
  close.classList.remove('hidden');
});

open6.addEventListener('click', () => {
  modal6.classList.remove('hidden');
  mask.classList.remove('hidden');
  close.classList.remove('hidden');
});

close.addEventListener('click', () => {
  modal1.classList.add('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
  modal4.classList.add('hidden');
  modal5.classList.add('hidden');
  modal6.classList.add('hidden');
  mask.classList.add('hidden');
  close.classList.add('hidden');
});

mask.addEventListener('click', () => {
  modal1.classList.add('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
  modal4.classList.add('hidden');
  modal5.classList.add('hidden');
  modal6.classList.add('hidden');
  mask.classList.add('hidden');
  close.classList.add('hidden');
});

// ハンバーガーメニュー
const akeru = document.getElementById('akeru');
const overlay = document.querySelector('.overlay');
const tojiru = document.getElementById('tojiru');

akeru.addEventListener('click', () => {
  overlay.classList.add('show');
  akeru.classList.add('hide');
});

tojiru.addEventListener('click', () => {
  overlay.classList.remove('show');
  akeru.classList.remove('hide');
});

const ab = document.getElementById('ab');
const wo = document.getElementById('wo');
const sk = document.getElementById('sk');

ab.addEventListener('click', () => {
  overlay.classList.remove('show');
  akeru.classList.remove('hide');
});

wo.addEventListener('click', () => {
  overlay.classList.remove('show');
  akeru.classList.remove('hide');
});

sk.addEventListener('click', () => {
  overlay.classList.remove('show');
  akeru.classList.remove('hide');
});
}

$(function(){
  $('.top-btn').hide();
 
  $(window).scroll(function(){
    if($(this).scrollTop() > 100 ) {
      $('.top-btn').fadeIn();
    } else {
      $('.top-btn').fadeOut();
    }
  });
 
  $('.top-btn').click(function(){
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
  });
 });