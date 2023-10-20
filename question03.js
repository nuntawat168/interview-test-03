const initData = [
  {
    name: "Win",
    age: 25,
  },
  {
    name: "Ton",
    age: 25,
  },
  {
    name: "Jeff",
    age: 33,
  },
  {
    name: "Boat",
    age: 26,
  },
  {
    name: "ice",
    age: 25,
  },
];

function findMaxAge(data) {
  let refAge = 0;
  let output = {};
  for (let i of data) {
    if (i.age > refAge) {
      refAge = i.age;
      output = i;
    }
  }
  return output.name;
}

function getAgeByName(name) {
  const regex = new RegExp(name, "i");
  const output = initData.find((element) => regex.test(element.name));
  return output.age;
}

function groupByAge(initData) {
  const output = {};

  for (let i of initData) {
    if (!(i.age in output)) {
      output[i.age] = [i.name];
    } else {
      output[i.age].push(i.name);
    }
  }
  return [output];
}

console.log(findMaxAge(initData));
console.log(getAgeByName("Boat"));
console.log(getAgeByName("boat"));
console.log(groupByAge(initData));
