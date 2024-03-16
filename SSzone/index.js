
        function addTask() {
            const taskDescription = document.getElementById('task-description').value;
            const deadline = document.getElementById('deadline').value;
            const priority = document.getElementById('priority').value;
            const label = document.getElementById('label').value;

            if (taskDescription.trim() === '' || deadline.trim() === '') {
                alert('Please fill out all required fields.');
                return;
            }

            const taskList = document.getElementById('task-list');
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <p><strong>Description:</strong> ${taskDescription}</p>
                <p><strong>Deadline:</strong> ${deadline}</p>
                <p><strong>Priority:</strong> ${priority}</p>
                <p><strong>Label:</strong> ${label}</p>
                <span class="delete-btn" onclick="deleteTask(this)"><i class="fas fa-trash"></i></span>
            `;
            taskList.appendChild(taskItem);

            document.getElementById('task-description').value = '';
            document.getElementById('deadline').value = '';
            document.getElementById('priority').value = 'low';
            document.getElementById('label').value = '';
        }

        function deleteTask(taskItem) {
            if (confirm('Are you sure you want to delete this task?')) {
                const taskList = taskItem.parentElement.parentElement;
                taskList.removeChild(taskItem.parentElement);
            }
        }
 