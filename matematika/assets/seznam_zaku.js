// Nacteni json souboru s jmeny
fetch('/assets/zaci.json')
    .then(response => response.json())
    .then(data => {
        // Ziskani lokace pro vlozeni
        const selectElement = document.querySelector('#listjmen');

        // Projde data z json a vlozi je do listu
        data.zaci.forEach(item => {
            const optionElement = document.createElement('option');
            optionElement.value = item.id;
            optionElement.textContent = item.jmeno;
            selectElement.appendChild(optionElement);
        });
    });