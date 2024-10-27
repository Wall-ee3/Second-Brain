const monthYear = document.getElementById('month-year');
        const daysContainer = document.getElementById('days');
        const prevMonthButton = document.getElementById('prev-month');
        const nextMonthButton = document.getElementById('next-month');
        const noteModal = document.getElementById('noteModal');
        const closeModalButton = document.querySelector('.close');
        const selectedDateElement = document.getElementById('selected-date');
        const noteText = document.getElementById('note-text');
        const saveNoteButton = document.getElementById('save-note');
        const deleteNoteButton = document.getElementById('delete-note');

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
                const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
                dayDiv.classList.add('day');
                dayDiv.onclick = () => openModal(dateKey);

                if (notes[dateKey]) {
                    dayDiv.classList.add('note');
                }

                daysContainer.appendChild(dayDiv);
            }
        }

        function openModal(dateKey) {
            selectedDateElement.textContent = dateKey;
            noteText.value = notes[dateKey] || '';
            noteModal.style.display = 'block';
            deleteNoteButton.style.display = notes[dateKey] ? 'block' : 'none';
        }

        function closeModal() {
            noteModal.style.display = 'none';
        }

        function saveNote() {
            const dateKey = selectedDateElement.textContent;
            notes[dateKey] = noteText.value;
            renderCalendar();
            closeModal();
        }

        function deleteNote() {
            const dateKey = selectedDateElement.textContent;
            delete notes[dateKey];
            renderCalendar();
            closeModal();
        }

        prevMonthButton.onclick = () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        };

        nextMonthButton.onclick = () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        };

        closeModalButton.onclick = closeModal;
        saveNoteButton.onclick = saveNote;
        deleteNoteButton.onclick = deleteNote;

        renderCalendar();