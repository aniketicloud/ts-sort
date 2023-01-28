class LNode {
  next: null | LNode = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: null | LNode = null;

  add(data: number) {
    const lNode = new LNode(data);

    if (!this.head) {
      this.head = lNode;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = lNode;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let lNode = this.head;
    while (lNode.next) {
      lNode = lNode.next;
      length++;
    }
    return length;
  }

  at(index: number): LNode {
    if (!this.head) {
      throw new Error("Index out of bounds!");
    }

    let counter = 0;
    let lNode: null | LNode = this.head;
    while (lNode) {
      if (counter === index) {
        return lNode;
      }
      counter++;

      lNode = lNode.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftLode = this.at(leftIndex);
    const rightLode = this.at(rightIndex);

    const leftIndexValue = leftLode.data;
    leftLode.data = rightLode.data;
    rightLode.data = leftIndexValue;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: null | LNode = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
