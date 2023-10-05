
const button = document.getElementById('button')

function addingEventListener() {

    button.addEventListener('click', clicked)

}

function clicked(){
    alert('You clicked me!')
}

addingEventListener();