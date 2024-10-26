// Caléndario
const monthYear = document.getElementById('month-year');
const daysContainer = document.getElementById('days');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const noteModal = document.getElementById('noteModal');
const closeModalButton = document.querySelector('.close');
const selectedDateElement = document.getElementById('selected-date');
const noteText = document.getElementById('note-text');
const saveNoteButton = document.getElementById('save-note');

let currentDate = new Date();
let notes = {}; 

function renderCalendar() {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    monthYear.textContent = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    daysContainer.innerHTML = '';

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDiv = document.createElement('div');
        daysContainer.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        dayDiv.addEventListener('click', () => openNoteModal(day));
        if (notes[`${currentYear}-${currentMonth + 1}-${day}`]) {
            dayDiv.classList.add('selected');
        }
        daysContainer.appendChild(dayDiv);
    }
}

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

function openNoteModal(day) {
    const selectedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;
    selectedDateElement.textContent = selectedDate;
    noteText.value = notes[selectedDate] || '';
    noteModal.style.display = 'block';
}

closeModalButton.addEventListener('click', () => {
    noteModal.style.display = 'none';
});

saveNoteButton.addEventListener('click', () => {
    const selectedDate = selectedDateElement.textContent;
    const note = noteText.value.trim();
    
    if (note) {
        notes[selectedDate] = note;
    } else {
        delete notes[selectedDate];
    }
    
    noteModal.style.display = 'none';
    renderCalendar();
});

window.addEventListener('click', (event) => {
    if (event.target == noteModal) {
        noteModal.style.display = 'none';
    }
});

renderCalendar();

// finalzinhuuu
