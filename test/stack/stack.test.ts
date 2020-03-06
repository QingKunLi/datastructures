
import Stack from '../../src/stack/stack';

const a = ['e', 'a', 'd', 'c', 'f'];
const stack = new Stack<string>();

test('stack push', () => {
    stack.push(a[0]);
    expect(stack.peek()).toBe('e');
    for (let i = 1; i < a.length; i++) {
        stack.push(a[i]);
    }
    expect(stack.peek()).toBe('f');
})
test('stack pop', () => {
    expect(stack.pop()).toBe('f');
    stack.pop();
    stack.pop();
    expect(stack.peek()).toBe('a');
    stack.pop();
    stack.pop();
    expect(()=>stack.pop()).toThrow();
})