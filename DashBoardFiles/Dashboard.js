function updateTableFromLocalStorage() {
	const tableBody = document.querySelector("#messageTable tbody");
	tableBody.innerHTML = ""; // Clear existing table rows
	const formData = JSON.parse(localStorage.getItem("formData"));
	if (formData) {
		const newRow = `
                    <tr>
                        <td>${formData.firstName} ${formData.lastName}</td>
                        <td>${formData.email}</td>
                        <td>${formData.message}</td>
                        <td>User</td>
                        <td><button class="delete-btn">Delete</button></td>
                    </tr>
                `;
		tableBody.innerHTML = newRow;
	}
}
