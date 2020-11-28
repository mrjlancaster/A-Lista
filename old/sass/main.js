const guestNameInput = document.querySelector('input');
const home = document.querySelector('.home');
const eventNameInput = document.querySelector('.event_name');
const createEventBtn = document.querySelector('.create_event-btn');
const addGuestBtn = document.querySelector('.add_guest-btn');
const ul = document.querySelector('ul');
const guestList = [];

//handle event name input
const createEvent = () => {
    createEventBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // get event name
        const eventName = eventNameInput.value;
        console.log(eventName);

        setTimeout(() => {
            home.classList.add('hideHome');
            eventNameInput.value = '';
        }, 600);  
    })
}


// get guests name and add to list
// addGuestBtn.addEventListener('click', () => {
//     handleGuest();

//     //clear input
//     guestNameInput.value = '';
//     console.log(localStorage);
// })

// handle guest function
const handleGuest = () => {
    // get guest name
    const newGuest = guestNameInput.value;
    
    // create new li and append name to list
    const li = document.createElement('li');
    li.innerText = newGuest;
    ul.appendChild(li);
}


createEvent();