const behindItem1 = document.querySelector('.behind-item1');
const item1 = document.querySelector('.item1');
const behindItem2 = document.querySelector('.behind-item2');
const item2 = document.querySelector('.item2');
const behindItem3 = document.querySelector('.behind-item3');
const item3 = document.querySelector('.item3');

function changeColor(behindItem, item) {
    behindItem.addEventListener('mouseover', () => {
        item.style.color = "#319ab0"
        item.style.setProperty('--before-filter', 'invert(50%) sepia(40%) saturate(500%) hue-rotate(150deg)');
        console.log(getComputedStyle(item).getPropertyValue('--before-filter'));
    });
    behindItem.addEventListener('mouseout', () => {
        item.style.color = 'white';
        item.style.setProperty('--before-filter', 'invert(100%)')
    });

}
changeColor(behindItem1,item1)
changeColor(behindItem2,item2)
changeColor(behindItem3,item3)


const itemSecondMenu1 = document.querySelector('#item-second-menu1');
const behindItemSecondMenu1 = document.querySelector('#behind-item-second-menu1');
const itemSecondMenu2 = document.querySelector('#item-second-menu2');
const behindItemSecondMenu2 = document.querySelector('#behind-item-second-menu2');
const itemSecondMenu3 = document.querySelector('#item-second-menu3');
const behindItemSecondMenu3 = document.querySelector('#behind-item-second-menu3');
const itemSecondMenu4 = document.querySelector('#item-second-menu4');
const behindItemSecondMenu4 = document.querySelector('#behind-item-second-menu4');
function changeColor2(behindItemSecondMenu, itemSecondMenu) {
    behindItemSecondMenu.addEventListener('mouseover', () => {
        itemSecondMenu.style.color = "white"

    });
    behindItemSecondMenu.addEventListener('mouseout', () => {
        itemSecondMenu.style.color = '#969288';
    });

}

changeColor2(behindItemSecondMenu1,itemSecondMenu1)
changeColor2(behindItemSecondMenu2,itemSecondMenu2)
changeColor2(behindItemSecondMenu3,itemSecondMenu3)
changeColor2(behindItemSecondMenu4,itemSecondMenu4)