// enum Gender {
//   male,
//   Female,
// }
enum Gender {
  male = 3,
  Female = 6,
}

interface Person {
  gender: Gender;
}

// 元组:已知元素数量和类型，元素类型可不同
const marry = (a: Person, b: Person): [Person, Person] => {
  if (a.gender !== b.gender) {
    return [a, b];
  } else {
    throw new Error("性别相同不能结婚");
  }
};

const a = { gender: Gender.male };
const b = { gender: Gender.Female };
console.log(JSON.stringify(marry(a, b)));
