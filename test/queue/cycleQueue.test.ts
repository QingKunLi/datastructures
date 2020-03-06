import CycleQueue from '../../src/queue/cycleQueue';

const queue = new CycleQueue<string>(6);
const array = ['e', 'b', 'f', 'c', 'd'];

test('empty queue', () => {
    expect(queue.isEmpty()).toBeTruthy();
});

test('add element to queue', () => {
    for (let i = 0; i < array.length; i++) {
        queue.offer(array[i]);
    }
    expect(queue.isFull()).toBeTruthy();
    expect(() => queue.offer('s')).toThrow();
    for (let i = 0; i < array.length; i++) {
        expect(queue.peek()).toBe(array[i]);
        expect(queue.poll()).toBe(array[i]);
    }
    expect(() => queue.peek()).toThrow();
    expect(() => queue.poll()).toThrow();
});