//1)Создайте кнопку в html при нажатию на которую в консоль выводится "привет".

let username = prompt('What is your name?');
let seyHelloButton = document.querySelector('.hellobutton');

seyHelloButton.addEventListener('click', greetings);

function greetings(event){
    if(!username){
        username = 'User'
    }
    console.log(`Hello ${username}!`);
};



//2)Создайте блок в html c картинкой и кнопку. При нажатии на кнопку блок с картинкой должен получать border-radius 50px и overflow hidden. При нажатии второй раз на кнопку стили должны убираться и возвращаться к исходным. Реализуйте через classList.toggle()2


let blockNewStyleButton = document.querySelector('.addStyle');
let blockNewStyle = document.querySelector('.imgBLock');

blockNewStyleButton.addEventListener('click', styleToggle);

function styleToggle(event){
    blockNewStyle.classList.toggle('newstyle')
}