// 'use Strict'
// const age = 18;
// console.log(age);
// console.log(String(age));
// const ageString = 18;
// console.log(ageString);
// console.log(Number(ageString));

// const checkAge = age === 18 ? 'Мне 18 лет' : 'Мне не 18 лет';

// let count = 0

// do {
//     console.log(count)
//     count++
// } while (count < 10)

// let elementNum = 0

// for (let i = 0; i < 10; i++) {
//     console.log(elementNum);
//     if (elementNum % 2 === 0) {
//         elementNum++
//     }
// }


// elementNum = 0;
// for (let i = 0; i < 10; i++) {
//     console.log(elementNum);
//     if (elementNum % 2 === 0) {
//         continue
//     }
//     elementNum++
// }

// function getAgeType(ages) {
//     if (typeof ages !== 'number') {
//         return 'Возраст указан некорректно'
//     }
//     if (ages < 1 || ages > 125) {
//         return 'Такого возраста не может быть!'
//     }
//     if (ages < 18) {
//         return 'Несовершеннолетний'
//     }
//     return 'Взрослый'
// }

// const user = {
//     'login': 'zxcThienlao',
//     password: 'qweasdzxc',
//     'registrashion date': '01.01.2024',
// }

// console.log(user["registrashion date"]);
// console.log(user.login);

// user.name = 'Александр';

// delete user.name;

// const names = 'Александр';

// const userName = {
//     name: names,
// }

// console.log('login' in user)

// for (const i in user) {
//     console.log(i);
//     console.log(user[i]);

// }

// const obj1 = {
//     imya: 'Александр',
//     ageObj: 20,
// }

// const obj2 = {
//     imya: 'Александр',
//     ageObj: 21,
// }

// const areObjectsEqual = (object1, object2) => {
//     const keys1 = Object.keys(object1)
//     const keys2 = Object.keys(object2)

//     if (keys1.length !== keys2.length) {
//         return false
//     }
//     for (index in object1) {
//         const value1 = object1[index];
//         const value2 = object2[index];
//         areValuesObject =
//             typeof value1 === 'object' && typeof value2 === 'object'

//         if (areValuesObject) {
//             return areObjectsEqual(value1, value2)
//         }

//         if (value1 !== value2) {
//             return false;
//         }
//     }
//     return true;

// }
// console.log(areObjectsEqual(obj1, obj2));

// const obj3 = Object.assign({}, obj1)

// const obj4 = { ...obj1 }

// obj4.address = {
//     city: 'Moscov',
// }

// console.log(obj4.address?.city)

// const user1 = { name: 'Миша'}
// const user2 = { name: 'Вася'}

// function logInfo() {
//     console.log('this:', this)
//     console.log('this.name:', this.name)
// }

// user1.logName = logInfo
// user2.logName = logInfo

// user1.logInfo()
// user2.logInfo()

// const boxElement = document.querySelector('.box1');

// const newParagraphElement = document.createElement('p');

// newParagraphElement.textContent = 'Я параграф';
// newParagraphElement.classList.add('paragraph1');

// boxElement.before(newParagraphElement);
// boxElement.after(newParagraphElement);
// boxElement.prepend(newParagraphElement);
// boxElement.append(newParagraphElement);

// boxElement.replaceWith(newParagraphElement);

const onTodoItemClick = (todoItemElement) => {
    todoItemElement.classList.add('Is-completed')
}
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('todo__item')) {
        onTodoItemClick(event.target)
    }
})

const addTodoItem = () => {
    const todoListElement = document.querySelector('.todo__list');
    const newTodoItem = `<li class ="todo__item">Todo item...</li>`

    todoListElement.insertAdjacentHTML('beforeend', newTodoItem)
}

addTodoItem()
addTodoItem()
addTodoItem()

const sectionsElement = document.querySelectorAll('section')

const animateSections = () => {
    sectionsElement.forEach((sectionsElement) => {
        sectionsElement.classList.add('is-visible')
    })
}

const preloaderElement = document.querySelector('.preloader')

preloaderElement.addEventListener('animationend', (event) => {
    if (event.animationName === 'fade-out') {
        animateSections();
    }
})

sectionsElement.addEventListener('mouseenter', (event) => {
    console.log(event.target)
})

sectionsElement.addEventListener('mouseleave', (event) => {
    console.log(event.target)
})

const Forms = document.querySelector('signUpForm')

const formsPass = Forms.password;

formsPass.form 