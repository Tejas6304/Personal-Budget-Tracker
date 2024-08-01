document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('budget-form');
    const tableBody = document.querySelector('#budget-table tbody');

    let editingRow = null;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const category = document.getElementById('category').value;
        const amount = document.getElementById('amount').value;

        if (editingRow) {
            // Update existing row
            editingRow.cells[0].textContent = category;
            editingRow.cells[1].textContent = amount;
            editingRow = null;
        } else {
            // Add new row
            const row = tableBody.insertRow();
            row.insertCell().textContent = category;
            row.insertCell().textContent = amount;

            const actionsCell = row.insertCell();
            actionsCell.innerHTML = `
                <button class="action-button edit">Edit</button>
                <button class="action-button delete">Delete</button>
            `;

            actionsCell.querySelector('.edit').addEventListener('click', () => {
                document.getElementById('category').value = row.cells[0].textContent;
                document.getElementById('amount').value = row.cells[1].textContent;
                editingRow = row;
            });

            actionsCell.querySelector('.delete').addEventListener('click', () => {
                row.remove();
            });
        }

        form.reset();
    });
});
