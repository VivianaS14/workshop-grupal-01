// Variables
let rateContainer = document.querySelector('.rate-container');
let resultContainer = document.querySelector('.result-container');
let result = document.querySelector('.result');

let inputs = document.querySelectorAll('input');

let btn = document.querySelector('.btn-submit');

// Funcion creadora de parrafos
const createTextResult = (number) => {
    let p = document.createElement('p');
    p.innerText = `You selected ${number} out 5`;        
    return p;
}

// Evento click para cada input
inputs.forEach( input => {

    input.addEventListener('click', e => {

        //console.log(e.target.value);
        let number = parseInt(e.target.value);

        for (let i=0; i < inputs.length; i++ ) {
            if ( inputs[i].value == (number)) {
                inputs[i].classList.toggle('rate-btn-active');
            } else {
                inputs[i].classList.remove('rate-btn-active');
            }
        }
    
        if (number !== undefined) {
            btn.addEventListener('click', () => {
                rateContainer.classList.add('hidden');
                resultContainer.classList.remove('hidden');
                
                result.innerHTML = ""
                result.appendChild(createTextResult(number));
            })
        }
    })
})