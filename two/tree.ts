#!/usr/bin/env ts-node

const createTab = (n: number): string => {
  return "----".repeat(n - 1);
};

{
  class Person {
    public children: Array<Person> = [];
    constructor(public name: string) {}
    addChild(child: Person): void {
      this.children.push(child);
    }
    introduceFamily(n?: number): void {
      n = n || 1;
      console.log(createTab(n), this.name);
      this.children.forEach((child: Person) => {
        child.introduceFamily(n + 1);
      });
    }
  }

  const grandPa = new Person("大");
  const person1 = new Person("中1");
  const person2 = new Person("中2");
  const child1 = new Person("小11");
  const child2 = new Person("小22");
  const child11 = new Person("小111");
  const child22 = new Person("小222");

  grandPa.addChild(person1);
  grandPa.addChild(person2);

  person1.addChild(child1);
  person1.addChild(child11);
  person2.addChild(child2);
  person2.addChild(child22);

  grandPa.introduceFamily();
}
