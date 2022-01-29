function Click() {
    let tar = document.querySelector('.target');
    let n = document.querySelector('.input').value;

    document.querySelector('.input').value = null;
    switch(n)
    {
        case '1':
            tar.style = 'background-color: red';
            tar.innerHTML = 'It is Red!';
            break;
        case '2':
            tar.style = 'background-color: green';
            tar.innerHTML = 'It is Green!';
            break;
        case '3':
            tar.style = 'background-color:yellow';
            tar.innerHTML = 'It is Yellow';
            break;
        default:
            alert("Invalid Input");
    }
    
}

document.querySelector('.click').addEventListener('click', Click);

function again()
{
    let tar = document.querySelector('.target');
    document.querySelector('.input').value = null;
    tar.style='background-color:white';
    tar.innerHTML = 'Change My Colour';
}

document.querySelector('.reset').addEventListener('click', again);