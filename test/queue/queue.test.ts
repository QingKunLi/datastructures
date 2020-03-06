
import Queue from '../../src/queue/queue';

const queue = new Queue<string>();
const array = ['e', 'b', 'f', 'c', 'd'];

test('empty queue', () => {
    expect(queue.isEmpty()).toBeTruthy();
});

test('add element to queue', () => {
    for (let i = 0; i < array.length; i++) {
        queue.offer(array[i]);
    }
    for (let i = 0; i < array.length; i++) {
        expect(queue.peek()).toBe(array[i]);
        expect(queue.poll()).toBe(array[i]);
    }
    expect(() => queue.peek()).toThrow();
    expect(() => queue.poll()).toThrow();
});