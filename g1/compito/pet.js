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

const a = new Pet("Fido", "Marco", "cane", "pastore tedesco");
const b = new Pet("Whiskers", "Giulia", "gatto", "persiano");

console.log(a.compareOwner(b));
console.log(b.compareOwner(a));

const c = new Pet("Rufus", "Carla", "cane", "barboncino");
const d = new Pet("Fluffy", "Carla", "gatto", "siamese");

console.log(c.compareOwner(d));
console.log(d.compareOwner(c)); 
