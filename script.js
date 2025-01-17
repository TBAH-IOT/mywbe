function toggleSection(sectionId) {
    var sections = document.querySelectorAll('main .section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        } else {
            section.style.display = 'none';
        }
    });
}
