export class CharactersCollection {
  constructor(public data: string) {}

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const arr = this.data.split('');
    const leftHand = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = leftHand;
    this.data = arr.join('');    
  }
}
