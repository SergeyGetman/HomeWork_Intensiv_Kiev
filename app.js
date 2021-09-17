class Node {
  constructor(data, previous) {
    this.data = data
    this.previous = previous
  }
}

class Stack {
  constructor(maxSize = 10) {
    if (!Number.isInteger(maxSize)) {
      throw new TypeError('Misstake')
    }
    this.maxSize = Number(maxSize)
    this.top = null
    this.size = 0
  }

  push(data) {
    if (!this.size === this.maxSize) {
      throw new Error('Maxsize it*s full')
    }

    const node = new Node(data, this.top)
    this.top = node
    this.size += 1

    return this.top
  }

  pop() {
    if (!this.size) {
      throw new Error('empty Stack')
    }
    let temp = this.top
    this.top = this.top.previous
    this.size -= 1
    return temp
  }

  peek() {
    if (!this.size) throw new Error(null)
    return this.top.data
  }

  isEmpty() {
    return !this.top
  }

  toArray() {
    const array = []
    let currentNode = this.top
    let firstElem = currentNode.data
    while (currentNode.previous.data) {
      currentNode = currentNode.previous
      array.push(firstElem, currentNode.data)
      if (currentNode.previous === null) break
    }

    return array.filter((elem, i, arr) => arr.indexOf(elem) == i)
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error('Object is not iterable.')
    }
    const list = [...iterable]
    const stack = new Stack(list.length)

    for (let value of list) {
      stack.push(value)
    }

    return stack
  }
}

module.exports = { Stack, Node }
