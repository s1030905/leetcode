var MyStack = function () {
  this.inQ = [];
  this.outQ = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.inQ.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.inQ.length > 1) {
    this.outQ.push(this.inQ.shift());
  }
  const pop = this.inQ.shift();
  let tmp = this.inQ;
  this.inQ = this.outQ;
  this.outQ = tmp;
  return pop;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.inQ.length > 1) {
    this.outQ.push(this.inQ.shift());
  }
  const top = this.inQ.shift();
  this.outQ.push(top);
  let tmp = this.inQ;
  this.inQ = this.outQ;
  this.outQ = tmp;
  return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.inQ.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
