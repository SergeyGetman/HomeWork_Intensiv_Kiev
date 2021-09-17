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
    this._top = null
    this.size = 0
  }

  push(data) {
    if (!this.size === this.maxSize) {
      throw new Error('Maxsize it*s full')
    }

    const node = new Node(data, this._top)
    this._top = node
    this.size += 1

    return this._top
  }

  pop() {
    if (!this.size) {
      throw new Error('empty Stack')
    }
    let temp = this._top
    this._top = this._top.previous
    this.size -= 1
    return temp
  }

  peek() {
    if (!this.size) throw new Error(null)
    return this._top.data
  }

  isEmpty() {
    return !this._top
  }

  toArray() {
    const array = []
    let currentNode = this._top
    let firstElem = currentNode.data
    do {
      currentNode = currentNode.previous
      array.push(firstElem, currentNode.data)
      if (currentNode.previous === null) break
    } while (currentNode.previous.data)

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
