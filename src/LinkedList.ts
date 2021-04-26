import { Sorter } from './Sort';

class NodeElement {
  next: NodeElement | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: NodeElement | null = null;

  add(data: number) {
    const node = new NodeElement(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length += 1;
      node = node.next;
    }

    return length;
  }

  at(index: number): NodeElement {
    if (!this.head) {
      throw new Error('List is empty!');
    }

    let counter = 0;
    let node: NodeElement | null = this.head;

    while (node) {
      if (index === counter) {
        return node;
      }
      counter += 1;
      node = node.next;
    }

    throw new Error('There are no such objects with whis index');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty!');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error('List is empty!');
    }

    const leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }

  print(): void {
    if (!this.head) {
      console.log('List is empty!');
    }

    let node: NodeElement | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
