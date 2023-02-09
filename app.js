function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
    }
    let names = ['Моя собака', 'Дима', 'Илья', 'Вика', 'Влад', 'Арсений', 'Ярослав']
    let todos = ['гулять', 'приcедать', 'гулять с собакой', 'идти в школу', 'убираться', 'играть', 'учиться',]
    // Вывод в консоль ответа
    function generate() {
    console.log(`${names[getRandomNumber(0, names.length)]} будет ${todos[getRandomNumber(0, todos.length)]}`)
    }
    