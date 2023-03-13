class Pet {
    constructor(petName, ownerName, specifies, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.specifies = specifies;
        this.breed = breed;
    }

    compareOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }

}

const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const resultsList = document.getElementById("results");


const pets = [];


form.addEventListener('submit', (event) => {
    //previene l'invio del form predefinito
    event.preventDefault();

    const petName = document.querySelector('.input-name').value;
    const ownerName = document.querySelector('.input-owner').value;
    const specifies = document.querySelector('.input-specifies').value;
    const breed = document.querySelector('.input-breed').value;
    const pet = new Pet(petName, ownerName, specifies, breed);
    pets.push(pet);
    addLista();
    input.forEach(field => field.value = '');
});


function addLista() {
    pets.forEach(pet => {
        const li = document.createElement('li');
        li.textContent = `${pet.petName},${pet.ownerName},${pet.specifies},${pet.breed}`;
        resultsList.appendChild(li);
    });
}