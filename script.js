const input = document.querySelector('.input');
const button = document.querySelector('.button');
const copy = document.querySelector('.copy');
const lengthInput = document.querySelector('.length');
const lowercaseCheck = document.querySelector('.lowercase_check');
const uppercaseCheck = document.querySelector('.uppercase_check');
const numbersCheck = document.querySelector('.numbers_check');
const punctuationsCheck = document.querySelector('.punctuations_check');

const lowercase = [...'abcdefghijklmnopqrstuvwxyz'];
const uppercase = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const numbers = [...'0123456789'];
const punctuations = [...'!@#$%^&*'];


let array = [];


lowercaseCheck.addEventListener('change', () => {
    if(lowercaseCheck.checked) {
        lowercase.sort(() => Math.random() - 0.5);
        array = [...array, ...lowercase];
    } else {
        array = array.filter(char => !lowercase.includes(char));
    }

});


uppercaseCheck.addEventListener('change', () => {
    if(uppercaseCheck.checked) {
        uppercase.sort(() => Math.random() - 0.5);
        array = [...array, ...uppercase];
    } else {
        array = array.filter(char => !uppercase.includes(char));
    }


});


numbersCheck.addEventListener('change', () => {
    if(numbersCheck.checked) {
        numbers.sort(() => Math.random() - 0.5);
        array = [...array, ...numbers];
    } else {
        array = array.filter(char => !numbers.includes(char));
    }


});


punctuationsCheck.addEventListener('change', () => {
    if(punctuationsCheck.checked) {
        punctuations.sort(() => Math.random() - 0.5);
        array = [...array, ...punctuations];
    } else {
        array = array.filter(char => !punctuations.includes(char));
    }

});

function lengthFunction() {
    let lengthValue = parseInt(lengthInput.value);
    lengthInput.value = '';
    return lengthValue;
}


function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


button.addEventListener("click", () => {
    const lengthValue = lengthFunction();

    if(array.length === 0) {
        alert("Please select at least one character type !");
        return;
    };

    let result = '';
    for(let i = 0; i < lengthValue; i++) {
        result += getRandomCharacter();
    };

    input.value = result;
});

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(input.value)
        .then(() => {
            copy.innerHTML = "Copied !"
        })
        .catch(err => {
            console.log("Failed to copy text",err);
        })
})