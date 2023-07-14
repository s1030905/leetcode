var evalRPN = function (tokens) {
  const stack = [];
  const calculator = new Set(["+", "-", "*", "/"]);
  for (const i of tokens) {
    if (calculator.has(i)) {
      const num1 = Number(stack.pop());
      const num2 = Number(stack.pop());
      switch (i) {
        case "+":
          stack.push(num1 + num2);
          break;
        case "-":
          stack.push(num2 - num1);
          break;
        case "*":
          stack.push(num1 * num2);
          break;
        case "/":
          const result =
            num2 / num1 >= 0 ? Math.floor(num2 / num1) : Math.ceil(num2 / num1);
          stack.push(result);
          break;
      }
    } else {
      stack.push(i);
    }
  }
  return stack[0];
};
