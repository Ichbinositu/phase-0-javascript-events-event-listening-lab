// creating event listener using addEventListener using event to listen and a callback function to "handle" the event

function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
    alert('I was clicked!');
});
}

// calling outer function
addingEventListener();


