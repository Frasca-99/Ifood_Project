

document.getElementById('searchInput').addEventListener('keyup', function () {
const searchTerm = this.value.toLowerCase();
const tableRows = document.querySelectorAll('#transactionTable tbody tr');

tableRows.forEach(row => {
const rowText = row.innerText.toLowerCase();
if (rowText.includes(searchTerm)) {
row.style.display = '';
} else {
row.style.display = 'none';
}
});
});
