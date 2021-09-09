class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
}

describe('My Stack', () => {
  test('is created empty', () => {
    const stack = new Stack();
    expect(stack.top).toBe(-1);
  });
});