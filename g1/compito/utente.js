class User {
    constructor(firstName, surName, age, location) {
        this.firstName = firstName;
        this.surName = surName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
        }
    }

}

const x = new User("Marco", "Rossi", 20, "Napoli");
const y = new User("Carla", "Violetta", 35, "Milano");
console.log(x.compareAge(y));
console.log(y.compareAge(x)); 