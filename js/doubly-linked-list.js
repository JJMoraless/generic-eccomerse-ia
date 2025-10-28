
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.lenght = 1;
  }

  append(value) {
    const newNode = new Node(value);

    // previus sibling node del actual node que se esta agregando
    newNode.prev = this.tail;

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

  // * insert after the indexInsert, add prev node
  insertInIndex(value, indexInsert) {
    const newNode = new Node(value);

    const previusSiblingNodeInsert = this.getFromIndex(indexInsert - 1);
    newNode.prev = previusSiblingNodeInsert;

    const nextSiblingNodeInsert = previusSiblingNodeInsert.next;
    nextSiblingNodeInsert.prev = newNode;

    previusSiblingNodeInsert.next = newNode;
    newNode.next = nextSiblingNodeInsert;
    this.lenght++;
    return this;
  }

  deleteFromIndex(indexDelete) {
    const previusSiblingPointer = this.getFromIndex(indexDelete - 1);
    previusSiblingPointer.next = previusSiblingPointer.next.next;
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

const linkedList = new DoublyLinkedList(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

console.log(JSON.stringify( linkedList));
