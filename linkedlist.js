class Node {
  constructor(value, next) {
      this.value = value;
      this.next = next;
  }
}

class LinkedList {
  constructor(arr) {
      this.head = null;
      this.tail = null;
      if (Array.isArray(arr)) {
          for (let value of arr) {
              const node = new Node(value, null);
              if (!this.head) {
                  this.head = node;
                  this.tail = node;
              } else {
                  this.tail.next = node;
                  this.tail = node;
              }
          }
      }
  }

  append(value) {
      const node = new Node(value, null);

      if (!this.head) {
          this.head = node;
          this.tail = node;
      } else {
          this.tail.next = node;
          this.tail = node;
      }
  }

  delete(value) {
      if (!this.head) return;

      while (this.head.value === value) {
          this.head = this.head.next;
          if(!this.head) return;
      }

      let previousNode = this.head;
      let currentNode = this.head.next;

      while (currentNode) {
          if (currentNode.value === value) {
              previousNode.next = currentNode.next;
              currentNode = currentNode.next;
          } else {
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
      }
  }

  toArray() {
      let currentNode = this.head;
      const arr = [];
      while (currentNode) {
          arr.push(currentNode.value);
          currentNode = currentNode.next;
      }
      return arr;
  }

  reverse() {
      if (!this.head) return;
      if (!this.head.next) return;

      let previousNode = this.head;
      let currentNode = this.head.next;

      this.head.next = null;
      this.tail = this.head;

      while (currentNode) {
          const nextNode = currentNode.next;
          currentNode.next = previousNode;

          previousNode = currentNode;
          currentNode = nextNode;
      }

      this.head = previousNode;
  }
}
