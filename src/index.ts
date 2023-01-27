class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftNum = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftNum;
        }
      }
    }
  }
}

const x = new Sorter([10, -1, -4, 11]);
x.sort();

console.log(x.collection);
