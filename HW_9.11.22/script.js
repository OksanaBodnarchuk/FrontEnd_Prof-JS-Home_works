//1)Создать две кнопки - одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.
// Заблокировать Разблокировать - 
// Какой-то текст! - input 

let input1 = document.querySelector('.input1');
let inputStatusButton = document.querySelector('.inputstatus');


inputStatusButton.addEventListener('click', chengeInputStatus);

function chengeInputStatus(event){
    if(input1.hasAttribute('disabled')){
        input1.removeAttribute('disabled');
    }else{
        input1.setAttribute('disabled','true');
    };
};

//2)Задача querySelectorAll Поменяйте содержимое абзацев на их
// порядковый номер в коде.Используйте перебор, индексы и textContent

// Заголовок, не поменяется.

//Абзац, поменяется.

// Абзац, поменяется.

// Абзац, поменяется.


let changeParagraphs = document.querySelectorAll('.changetext');
let swapButton = document.querySelector('.swapper');

swapButton.addEventListener('click', changeText)

function changeText(event){
    changeParagraphs.forEach((el,i) => {
        el.textContent = i+1;
    })
}
