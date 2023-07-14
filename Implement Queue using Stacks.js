var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.inStack.length !== 0) {
    this.outStack.push(this.inStack.pop());
  }
  const result = this.outStack.pop();
  while (this.outStack.length !== 0) {
    this.inStack.push(this.outStack.pop());
  }
  return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.inStack.length !== 0) {
    this.outStack.push(this.inStack.pop());
  }

  var pop = this.outStack.pop();
  this.outStack.push(pop);
  while (this.outStack.length !== 0) {
    this.inStack.push(this.outStack.pop());
  }

  return pop;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inStack.length === 0 ? true : false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
