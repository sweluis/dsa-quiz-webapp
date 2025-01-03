async function fetchQuestion() {
    try {
        const response = await fetch('/question-from-database');
        if (!response.ok) {
            throw new Error('Failed to fetch question');
        }
        const question = await response.json();
        loadQuestion(question);
    } catch(error) {
        console.error('Error fetching question:', error);
    }
}


function loadQuestion(question) {
    document.getElementById('question').textContent = question.question;
    document.getElementById('a').textContent = question.choice_a;
    document.getElementById('b').textContent = question.choice_b;
    document.getElementById('c').textContent = question.choice_c;
    document.getElementById('d').textContent = question.choice_d;
    
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.disabled = true);
            if(button.id === question.answer) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = 'red';
            }
        });
    }); 
}

fetchQuestion();