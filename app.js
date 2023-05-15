const switchBtn = document.querySelector('#switch__btn');
const switchColor = document.querySelector('.switch__color');
const switchWrap = document.querySelector('.switch');
const switchCopy = document.querySelector('#switch__copy');

const hexElement = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

switchBtn.addEventListener('click', generateHex);
switchCopy.addEventListener('click', copyHexColor);


function generateHex() {
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        let hexNumber = hexElement[randomNumber()];
        hex += hexNumber;
    }
    switchColor.value = hex;
    document.body.style.backgroundColor = hex;
    switchCopy.innerHTML = 'Копировать <i class="fa-solid fa-copy"></i>';
}

function randomNumber() {
    let number = Math.floor(Math.random() * hexElement.length);
    return number;
}

function copyHexColor() {
    switchColor.select();
    document.execCommand("copy");

    switchCopy.innerHTML = '<i class="fa-solid fa-check"></i>';
}


generateHex();