let oldX, myRad = 0, x, y;
const img = document.querySelector("img");


img.addEventListener('click', function(e) {
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    console.log(e.target);

    let dot = document.createElement('div');
    dot.className = 'myDot';
    dot.style.position = 'absolute';
    dot.style.top = `${e.clientY - 5.5 + 200}px`;
    dot.style.left = `${e.clientX - 5.5}px`;
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.borderRadius = '10px';
    dot.style.border = "1px solid white";
    dot.style.background = '#000000';

    document.body.appendChild(dot);

    getPoly();
});

const svg_main = document.querySelector('.scheme svg');

svg_main.addEventListener('click', function(e){

    console.log(e.target);
    const polygon = document.getElementById('bp_id_3e5aa691-1970-4f8d-90ea-1df4232cb4e2');

    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    // Новые точки, которые нужно добавить
    const newPoints = `${x},${y}`; // Пример новых точек

    // Получение текущих точек
    let currentPoints = polygon.getAttribute('points');

    // Добавление новых точек к существующим
    currentPoints += ',' + newPoints;

    // Обновление атрибута points с новыми точками
    polygon.setAttribute('points', currentPoints);
})

function getPoly(){
    let polyText = document.getElementById('poly').textContent;
    if(polyText === "") {
        document.getElementById('poly').textContent = `${x},${y}`;
        document.getElementById('polyCode').textContent = 'Please Select More Coordinates';
    } else {
        document.getElementById('poly').textContent += `,"${x},${y}"`;
        document.getElementById('polyCode').textContent = `<area shape="poly" coords="${document.getElementById('poly').textContent}" title="" href="">`;
    }
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('show_image').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

document.getElementById('image').addEventListener('change', function() {
    readURL(this);
});

var fileInput = document.getElementById('image');

fileInput.addEventListener('change', async function(event) {

    const img = document.getElementById('show_image');

    var reader = new FileReader();

    var file = event.target.files[0];
    // Объявляем промис, который разрешается при завершении чтения файла
    const loadImage = new Promise((resolve) => {
        reader.onload = function() {
            img.src = reader.result;
            console.log('Image loaded');
            resolve(); // Разрешаем промис, когда изображение загружено
        };
        reader.readAsDataURL(file);
    });

    await loadImage;

    let scheme = document.querySelector('.scheme');
    let scheme_svg = document.querySelector('.scheme svg');
    let img_and_scheme = document.querySelector('.img_and_scheme');


    const innerWidth = img.clientWidth;
    const innerHeight = img.clientHeight;

    console.log('innerWidth=', innerWidth);
    console.log('innerHeight', innerHeight);


    scheme.style.width = `${innerWidth}px`;
    scheme.style.height = `${innerHeight}px`;
    // scheme.style.top = `${-innerHeight}px`;
    // scheme.style.left = `${img.getBoundingClientRect().left}px`;

    scheme_svg.style.width = `${innerWidth}px`;
    scheme_svg.style.height = `${innerHeight}px`;

    img_and_scheme.style.height = `${innerHeight}px`;


    const cursorPosition = document.querySelector('.cursorPosition');
    cursorPosition.style.display = 'block';

});


