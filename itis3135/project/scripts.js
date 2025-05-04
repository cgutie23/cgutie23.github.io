document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            //Prevent default scroll behavior
            e.preventDefault();

            //Hide all sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            //Get target section id from the clicked link
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            //Show the corresponding section
            targetSection.classList.add('active');
        });
    });
});