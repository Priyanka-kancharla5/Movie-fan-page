function openModal(name, role, image) {
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalRole').textContent = Played;
    document.getElementById('modalImg').src = image;
    document.getElementById('castModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('castModal').style.display = 'none';
}


window.onclick = function(event) {
    if (event.target === document.getElementById('castModal')) {
        closeModal();
    }
}