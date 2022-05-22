const person = {
  firstName: "youjung",
  lasName: "Lee",

  get fullName() {
    return `${this.firstName} ${this.lasName}`;
  },

  set fullName(name) {
    [this.firstName, this.lasName] = name.Split(" ");
  },
};

person.fullName = "Hegun Lee";
console.log(person);
