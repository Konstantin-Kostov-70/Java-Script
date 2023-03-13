function deleteByEmail() {
    const email = document.querySelector('input[name="email"]').value;
    const result = document.getElementById('result');

    let rows = Array.from(document.querySelectorAll('tbody tr'))
    .filter(r => r.children[1].textContent === email);

    rows.forEach(row => row.remove());

    result.textContent = rows.length > 0 ? 'Deleted.' : 'Not found.';
    
}