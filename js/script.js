let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    column = document.querySelector('.column'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    ptpt = document.getElementById('prompt');



    title.innerText = " Мы продаем только подлинную технику Apple ";
    menu.replaceChild(menuItem[1], menuItem[2]);
    menu.insertBefore(menuItem[2], menuItem[1]);
    adv.remove();
    const answer = prompt("Do you like Apple?");
          ptpt.innerText = answer;
    document.body.style.background = 'url(img/apple_true.jpg)';

