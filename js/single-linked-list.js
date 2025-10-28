class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.lenght = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.lenght++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.lenght++;
    return this;
  }

  insertInIndex(value, indexInsert) {
    const newNode = new Node(value);
    const firsPointer = this.getFromIndex(indexInsert - 1);
    const holdingPointer = firsPointer.next;
    firsPointer.next = newNode;
    newNode.next = holdingPointer;
    this.lenght++;
    return this;
  }

  deleteFromIndex(indexDelete) {
    const previusSiblingPointer = this.getFromIndex(indexDelete - 1);
    const nextSiblingPointer = this.getFromIndex(indexDelete + 1);
    previusSiblingPointer.next = nextSiblingPointer;
    this.lenght--;
    return this;
  }

  getFromIndex(indexFound) {
    let counter = 0;
    let currentNode = this.head;

    while (counter != indexFound) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

const linkedList = new SinglyLinkedList(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
