async function fetchQuestion() {
    try {
        // Sends request to server for a question from the database
        const response = await fetch('/question-from-database');
        if (!response.ok) { // Checking if response from server is ok
            throw new Error('Failed to fetch question');
        }
        const question = await response.json(); // Converts JSON string to JSON object
        loadQuestion(question);
    } catch(error) {
        console.error('Error fetching question:', error);
    }
}


function loadQuestion(question) {
    // Loads the question and choices into the HTML elements
    document.getElementById('question').textContent = question.question;
    document.getElementById('a').textContent = question.choice_a;
    document.getElementById('b').textContent = question.choice_b;
    document.getElementById('c').textContent = question.choice_c;
    document.getElementById('d').textContent = question.choice_d;
    
    // Adds event listeners to the choice buttons
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Disables all buttons when a one button is clicked
            buttons.forEach(btn => btn.disabled = true);
            // Highlights the correct answer in green and the wrong answer in red
            if(button.id === question.answer) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = 'red';
            }
        });
    }); 
}

fetchQuestion();    // Calls fetchQuestion when this js file is loaded loads