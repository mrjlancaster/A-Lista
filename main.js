const input = document.querySelector('input');
const button = document.querySelector('form button');
const ul = document.querySelector('ul');
const guests = [];

// get guests name and add to list
button.addEventListener('click', () => {
    const newGuest = input.value;
    const li = document.createElement('li');

    li.innerText = newGuest;
    // add to list
    guests.push(newGuest);

    // display list
    ul.appendChild(li);

    //clear input
    input.value = '';

    console.log(guests);
})