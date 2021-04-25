class NodeElement {
  next: NodeElement | null = null;
  constructor(public value: number) {}
}

class LinkedList {
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

  }

  compare(): boolean {}
  swap(): void {}
}
