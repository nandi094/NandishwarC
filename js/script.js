document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    // Add smooth scrolling to anchor links
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const href = this.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    }
});
console.log('add JSON');
 fetch('json/skills.json')
        .then(response => response.json())
        .then(data => {
            const skills = data.skills;
            const tableBody = document.querySelector('#skillsTable tbody');

            skills.forEach(skill => {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.textContent = skill;
                row.appendChild(cell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching skills data:', error));

