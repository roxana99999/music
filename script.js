function showSection(sectionId) {
    // Obtenir toutes les sections
    const sections = document.querySelectorAll('.section');

    // Masquer toutes les sections
    sections.forEach(section => section.style.display = 'none');

    // Afficher la section sélectionnée
    document.getElementById(sectionId).style.display = 'block';
}

// Afficher la première section par défaut lors du chargement de la page
window.onload = function() {
    showSection('Video');
}
