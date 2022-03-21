const names = [
  { firstName: "Nelson", lastName: "Gonzalez" },
  { firstName: "Nathalia", lastName: "Rojas" },
  { firstName: "Marco", lastName: "Gonzalez" },
];

const mapedNames = names.map((e) => e.firstName);

const values = [2, 4, 6, 7, 8];
const reducedValues = values;
const initialValue = 0;

const sortedNames = names.sort((a, b) => {
  if (a.lastName < b.lastName) {
    return -1;
  }
  if (a.firstName > b.firstName) {
    return 1;
  }
  return 0;
});

console.log("El resultado es: ");
console.log(mapedNames.includes("Nathalia"));
const includesNames = names.includes(names, 0);
console.log(includesNames);
