const input = document.querySelector('input');
const button = document.querySelector('form button');
const ul = document.querySelector('ul');
const guests = [];

// get guests name and add to list
button.addEventListener('click', () => {
    handleGuest();

    //clear input
    input.value = '';
    console.log(localStorage);
})

// handle guest function
const handleGuest = () => {
    // save new guests name in variable
    const newGuest = input.value;

    // add guest to array
    guests.push(newGuest);

    // create new li and append name to list
    const li = document.createElement('li');
    li.innerText = newGuest;
    ul.appendChild(li);
}