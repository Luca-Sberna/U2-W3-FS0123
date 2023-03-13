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

const resultsList = document.getElementById("results");

const pet1 = new Pet("Fido", "Marco", "cane", "pastore tedesco");
const pet2 = new Pet("Whiskers", "Giulia", "gatto", "persiano");
const pet3 = new Pet("Rufus", "Carla", "cane", "barboncino");
const pet4 = new Pet("Fluffy", "Carla", "gatto", "siamese");

const pets = [pet1, pet2, pet3, pet4];

for (let i = 0; i < pets.length; i++) {
    for (let j = i + 1; j < pets.length; j++) {
        const petA = pets[i];
        const petB = pets[j];

        const comparisonResult = petA.compareOwner(petB);

        const listItem = document.createElement("li");
        const text = document.createTextNode(`${petA.petName} e ${petB.petName} hanno lo stesso proprietario? ${comparisonResult}`);
        listItem.appendChild(text);

        resultsList.appendChild(listItem);
    }
}
