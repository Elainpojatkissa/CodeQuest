// Salasana, joka on vain sinulle tiedossa
const adminPassword = "3542"; // Muokkaa tämä omaan salasanaasi

// Kirjautumisfunktio
function login() {
    const enteredPassword = document.getElementById('admin-password').value;

    if (enteredPassword === adminPassword) {
        // Salasana oikein - Näytä tehtävien lisäämisen osio
        document.getElementById('login-section').style.display = "none";
        document.getElementById('admin-section').style.display = "block";
    } else {
        // Virheellinen salasana
        document.getElementById('login-error').style.display = "block";
    }
}

// Funktio uuden tehtävän lisäämiseksi
function addTask() {
    const taskDescription = document.getElementById('task-description').value;
    const taskSolution = document.getElementById('task-solution').value;

    // Varmistetaan, että molemmat kentät eivät ole tyhjiä
    if (taskDescription.trim() === "" || taskSolution.trim() === "") {
        alert("Täytä molemmat kentät ennen lisäystä.");
        return;
    }

    // Luo uusi tehtäväelementti
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    // Lisää tehtävän kuvaus ja esimerkkiratkaisu
    taskElement.innerHTML = `
        <h3>${taskDescription}</h3>
        <p><strong>Esimerkkiratkaisu:</strong> <span class="solution">${taskSolution}</span></p>
    `;

    // Lisää uusi tehtävä tehtävälistaan
    document.getElementById('task-list').appendChild(taskElement);

    // Tyhjennä lomake kentät
    document.getElementById('task-description').value = "";
    document.getElementById('task-solution').value = "";
}
