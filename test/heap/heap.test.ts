
import Heap from '../../src/heap/heap';

const heap = new Heap<number>(5);
const array = ['a', 'b', 'c', 'd', 'e'];

test('empty', () => {
    expect(heap.isEmpty()).toBeTruthy();
    expect(heap.size).toBe(0);
})

test('insert', () => {
    const h3 = new Heap<string>(5);
    for (let i = 0; i < 5; i++) {
        h3.insert(array[i]);
    }
    expect(h3.sequence()).toBe('[e, d, b, a, c, ]');
    expect(()=>h3.insert('f')).toThrow();
})

test('remove', () => {
    for (let i = 1; i < 6; i++) {
        heap.insert(i);
    }
    heap.removeMax();
    expect(heap.sequence()).toBe('[4, 3, 2, 1, ]');
    heap.removeMax();
    expect(heap.sequence()).toBe('[3, 1, 2, ]');

})

test('create heap', () => {
    const h2 = new Heap<string>(5, 'a', 'b', 'c', 'd', 'e');
    expect(h2.sequence()).toBe('[e, d, c, a, b, ]');
})
