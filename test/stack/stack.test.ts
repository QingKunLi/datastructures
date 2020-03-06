
import Stack from '../../src/stack/stack';

const a = ['e', 'a', 'd', 'c', 'f'];
const stack = new Stack<string>();

test('stack push', () => {
    stack.push(a[0]);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe('e');
    for (let i = 1; i < a.length; i++) {
        stack.push(a[i]);
    }
    expect(stack.size()).toBe(5);
    expect(stack.peek()).toBe('f');
})
test('stack pop', () => {
    expect(stack.pop()).toBe('f');
    expect(stack.size()).toBe(4);
    stack.pop();
    stack.pop();
    expect(stack.peek()).toBe('a');
    stack.pop();
    stack.pop();
    expect(()=>stack.pop()).toThrow();
    expect(stack.size()).toBe(0);
})
test('iterator', () => {
    for (let i = 0; i < a.length; i++) {
        stack.push(a[i]);
    }
    let i: number = 0;
    let v: string;
    // @ts-ignore
    for (v of stack) {
        expect(v).toBe(a[i]);
        console.log(v);
        i++;
    }
})