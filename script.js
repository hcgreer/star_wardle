const characters = [{"name": "Luke Skywalker", "gender": "male", "homeworld": "Tatooine", "species": "Human"}, {"name": "Darth Vader", "gender": "male", "homeworld": "Tatooine", "species": "Human"}, {"name": "Leia Organa", "gender": "female", "homeworld": "Alderaan", "species": "Human"}, {"name": "Owen Lars", "gender": "male", "homeworld": "Tatooine", "species": "Human"}, {"name": "Beru Whitesun lars", "gender": "female", "homeworld": "Tatooine", "species": "Human"}, {"name": "Biggs Darklighter", "gender": "male", "homeworld": "Tatooine", "species": "Human"}, {"name": "Obi-Wan Kenobi", "gender": "male", "homeworld": "Stewjon", "species": "Human"}, {"name": "Anakin Skywalker", "gender": "male", "homeworld": "Tatooine", "species": "Human"}, {"name": "Wilhuff Tarkin", "gender": "male", "homeworld": "Eriadu", "species": "Human"}, {"name": "Chewbacca", "gender": "male", "homeworld": "Kashyyyk", "species": "Wookiee"}, {"name": "Han Solo", "gender": "male", "homeworld": "Corellia", "species": "Human"}, {"name": "Greedo", "gender": "male", "homeworld": "Rodia", "species": "Rodian"}, {"name": "Jabba Desilijic Tiure", "gender": "hermaphrodite", "homeworld": "Nal Hutta", "species": "Hutt"}, {"name": "Wedge Antilles", "gender": "male", "homeworld": "Corellia", "species": "Human"}, {"name": "Jek Tono Porkins", "gender": "male", "homeworld": "Bestine IV", "species": "Human"}, {"name": "Palpatine", "gender": "male", "homeworld": "Naboo", "species": "Human"}, {"name": "Boba Fett", "gender": "male", "homeworld": "Kamino", "species": "Human"}, {"name": "Bossk", "gender": "male", "homeworld": "Trandosha", "species": "Trandoshan"}, {"name": "Lando Calrissian", "gender": "male", "homeworld": "Socorro", "species": "Human"}, {"name": "Lobot", "gender": "male", "homeworld": "Bespin", "species": "Human"}, {"name": "Ackbar", "gender": "male", "homeworld": "Mon Cala", "species": "Mon Calamari"}, {"name": "Mon Mothma", "gender": "female", "homeworld": "Chandrila", "species": "Human"}, {"name": "Wicket Systri Warrick", "gender": "male", "homeworld": "Endor", "species": "Ewok"}, {"name": "Nien Nunb", "gender": "male", "homeworld": "Sullust", "species": "Sullustan"}, {"name": "Nute Gunray", "gender": "male", "homeworld": "Cato Neimoidia", "species": "Neimodian"}, {"name": "Finis Valorum", "gender": "male", "homeworld": "Coruscant", "species": "Human"}, {"name": "Jar Jar Binks", "gender": "male", "homeworld": "Naboo", "species": "Gungan"}, {"name": "Roos Tarpals", "gender": "male", "homeworld": "Naboo", "species": "Gungan"}, {"name": "Rugor Nass", "gender": "male", "homeworld": "Naboo", "species": "Gungan"}, {"name": "Watto", "gender": "male", "homeworld": "Toydaria", "species": "Toydarian"}, {"name": "Sebulba", "gender": "male", "homeworld": "Malastare", "species": "Dug"}, {"name": "Shmi Skywalker", "gender": "female", "homeworld": "Tatooine", "species": "Human"}, {"name": "Darth Maul", "gender": "male", "homeworld": "Dathomir", "species": "Zabrak"}, {"name": "Bib Fortuna", "gender": "male", "homeworld": "Ryloth", "species": "Twi'lek"}, {"name": "Ayla Secura", "gender": "female", "homeworld": "Ryloth", "species": "Twi'lek"}, {"name": "Dud Bolt", "gender": "male", "homeworld": "Vulpter", "species": "Vulptereen"}, {"name": "Gasgano", "gender": "male", "homeworld": "Troiken", "species": "Xexto"}, {"name": "Ben Quadinaros", "gender": "male", "homeworld": "Tund", "species": "Toong"}, {"name": "Mace Windu", "gender": "male", "homeworld": "Haruun Kal", "species": "Human"}, {"name": "Ki-Adi-Mundi", "gender": "male", "homeworld": "Cerea", "species": "Cerean"}, {"name": "Kit Fisto", "gender": "male", "homeworld": "Glee Anselm", "species": "Nautolan"}, {"name": "Eeth Koth", "gender": "male", "homeworld": "Iridonia", "species": "Zabrak"}, {"name": "Adi Gallia", "gender": "female", "homeworld": "Coruscant", "species": "Tholothian"}, {"name": "Saesee Tiin", "gender": "male", "homeworld": "Iktotch", "species": "Iktotchi"}, {"name": "Yarael Poof", "gender": "male", "homeworld": "Quermia", "species": "Quermian"}, {"name": "Plo Koon", "gender": "male", "homeworld": "Dorin", "species": "Kel Dor"}, {"name": "Mas Amedda", "gender": "male", "homeworld": "Champala", "species": "Chagrian"}, {"name": "Gregar Typho", "gender": "male", "homeworld": "Naboo", "species": "Human"}, {"name": "Cord\u00c3\u00a9", "gender": "female", "homeworld": "Naboo", "species": "Human"}, {"name": "Cliegg Lars", "gender": "male", "homeworld": "Tatooine", "species": "Human"}, {"name": "Poggle the Lesser", "gender": "male", "homeworld": "Geonosis", "species": "Geonosian"}, {"name": "Luminara Unduli", "gender": "female", "homeworld": "Mirial", "species": "Mirialan"}, {"name": "Barriss Offee", "gender": "female", "homeworld": "Mirial", "species": "Mirialan"}, {"name": "Dorm\u00c3\u00a9", "gender": "female", "homeworld": "Naboo", "species": "Human"}, {"name": "Dooku", "gender": "male", "homeworld": "Serenno", "species": "Human"}, {"name": "Bail Prestor Organa", "gender": "male", "homeworld": "Alderaan", "species": "Human"}, {"name": "Jango Fett", "gender": "male", "homeworld": "Concord Dawn", "species": "Human"}, {"name": "Zam Wesell", "gender": "female", "homeworld": "Zolan", "species": "Clawdite"}, {"name": "Dexter Jettster", "gender": "male", "homeworld": "Ojom", "species": "Besalisk"}, {"name": "Lama Su", "gender": "male", "homeworld": "Kamino", "species": "Kaminoan"}, {"name": "Taun We", "gender": "female", "homeworld": "Kamino", "species": "Kaminoan"}, {"name": "Jocasta Nu", "gender": "female", "homeworld": "Coruscant", "species": "Human"}, {"name": "Ratts Tyerell", "gender": "male", "homeworld": "Aleen Minor", "species": "Aleena"}, {"name": "Wat Tambor", "gender": "male", "homeworld": "Skako", "species": "Skakoan"}, {"name": "San Hill", "gender": "male", "homeworld": "Muunilinst", "species": "Muun"}, {"name": "Shaak Ti", "gender": "female", "homeworld": "Shili", "species": "Togruta"}, {"name": "Grievous", "gender": "male", "homeworld": "Kalee", "species": "Kaleesh"}, {"name": "Tarfful", "gender": "male", "homeworld": "Kashyyyk", "species": "Wookiee"}, {"name": "Raymus Antilles", "gender": "male", "homeworld": "Alderaan", "species": "Human"}, {"name": "Tion Medon", "gender": "male", "homeworld": "Utapau", "species": "Pau'an"}, {"name": "Padm\u00c3\u00a9 Amidala", "gender": "female", "homeworld": "Naboo", "species": "Human"}];
const targetCharacter = {"name": "Luke Skywalker", "gender": "male", "homeworld": "Tatooine", "species": "Human"};

const guessForm = document.querySelector("[data-guess-form]");
const guessInput = document.querySelector("[data-guess-input]");
const resultContainer = document.querySelector("[data-result-container]");
let headerShown = false;
const alertContainer = document.querySelector("[data-alert-container]");
const autocompleteList = document.querySelector("[data-autocomplete-list]");

submitGuess();

function submitGuess() {
    guessForm.addEventListener("submit", (e) => {
        e.preventDefault();
        autocompleteList.innerHTML = ''
        const guessText = guessInput.value;
        const guessCharacter = characters.find((p) => {
            return p.name.toLowerCase() === guessText.toLowerCase();
        })
        if (guessCharacter) {
            revealHeader();
            const newGuess = document.createElement("div");
            newGuess.classList.add("grid-container");
            checkGuess(newGuess, guessCharacter.name, targetCharacter.name, guessCharacter.name);
            checkGuess(newGuess, guessCharacter.gender, targetCharacter.gender, guessCharacter.name);
            checkGuess(newGuess, guessCharacter.species, targetCharacter.species, guessCharacter.name);
            checkGuess(newGuess, guessCharacter.homeworld, targetCharacter.homeworld, guessCharacter.name);
            resultContainer.insertBefore(newGuess, resultContainer.children[1]);
            const gridItems = document.querySelectorAll(".grid-item.flip");
            gridItems.forEach((gridItem, index, array) => flipGrid(gridItem, index, array, guessCharacter.name));
            guessInput.value = "";
        }
        else{
            showAlert("Not in character list.");
        }
    })
}

function revealHeader() {
    if (headerShown) return;

    const headerRow = document.createElement("div");
    headerRow.classList.add("grid-container");
    headerRow.innerHTML = `
        <div class="grid-header">Name</div>
        <div class="grid-header">Gender</div>
        <div class="grid-header">Species</div>
        <div class="grid-header">Home World</div>
    `;
    resultContainer.appendChild(headerRow)
    headerShown = true;
}

function checkGuess(newGuess, guess, target, name) {
    const clueCell = document.createElement("div");
    clueCell.classList.add("grid-item");
    clueCell.textContent = guess;

    if (guess === name) {
        newGuess.appendChild(clueCell);
    }
    else {
        clueCell.classList.add("flip");
        if (guess === target) {
            clueCell.dataset.state = "Correct";
        }
        else {
            clueCell.dataset.state = "Incorrect";
        }
        newGuess.appendChild(clueCell);
    }
}

function showAlert(message, duration = 1000) {
    const alert = document.createElement("div")
    alert.textContent = message
    alert.classList.add("alert")
    alertContainer.prepend(alert)
    if (duration === null) return

    setTimeout(() => {
      alert.classList.add("hide")
      alert.addEventListener("transitionend", () => {
        alert.remove()
      })
    }, duration)
  }

function winner() {
    showAlert("You Win!", duration = 5000)
    guessForm.remove()
}

function flipGrid(gridItem, index, array, guess) {
    setTimeout(() => {
        gridItem.classList.remove("flip");
    }, index * 500);

    if (index === array.length - 1) {
        gridItem.addEventListener("transitionend", () => {
            if (guess !== targetCharacter.name) return;
            winner();
        })
    }
}

guessInput.onkeyup = function() {
    autocompleteList.innerHTML = ''
    let resultList = [];
    let input = guessInput.value;
    if (input.length){
        resultList = characters.filter((person) => {
            return person.name.toLowerCase().startsWith(input.toLowerCase());
        });
    }
    displaySearch(resultList)
}

function displaySearch(resultList) {
    resultList.forEach((list) => {
        const autocompleteItem = document.createElement('div');
        autocompleteItem.classList.add("autocomplete-item");
        autocompleteItem.onclick = function() {
            selectInput(list.name)
        }

        const autocompleteName = document.createElement('div');
        autocompleteName.classList.add("autocomplete-name");
        autocompleteName.textContent = list.name;

        const autocompleteInfo = document.createElement('div');
        autocompleteInfo.classList.add("autocomplete-info");
        autocompleteInfo.textContent = `${list.gender}, ${list.species}, ${list.homeworld}`;

        autocompleteItem.appendChild(autocompleteName);
        autocompleteItem.appendChild(autocompleteInfo);

        autocompleteList.appendChild(autocompleteItem);
    })
}

function selectInput(selectedName) {
    guessInput.value = selectedName;
    autocompleteList.innerHTML = ''
}