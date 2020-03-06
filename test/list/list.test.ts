import LinkedList from '../../src/list/list';

// 测试空链表情况
const list = new LinkedList<number>();

test('list is empty', () => {
    expect(list.isEmpty()).toBeTruthy();
    expect(list.size()).toBe(0);
});
test('remove empty list', () => {
    expect(() => {
        list.removeFirst();
    }).toThrow('Empty List');
    expect(() => {
        list.removeLast();
    }).toThrow('Empty List');
    expect(() => {
        list.remove();
    }).toThrow('Empty List');
});
test('peek empty list', () => {
    expect(() => {
        list.peekFirst();
    }).toThrow('Empty List');
    expect(() => {
        list.peekLast();
    }).toThrow('Empty List');
});
test('test insert first', () => {
    list.insertFirst(3);
    expect(list.size()).toBe(1);
    list.insertFirst(5);
    expect(list.peekFirst()).toBe(5);
});
test('test insert last', () => {
    list.insertLast(4);
    expect(list.size()).toBe(3);
    list.insertLast(6);
    expect(list.peekLast()).toBe(6);
});
test('test index of', () => {
    expect(list.indexOf(5)).toBe(0);
    expect(list.indexOf(3)).toBe(1);
    expect(list.indexOf(4)).toBe(2);
    expect(list.indexOf(6)).toBe(3);
    expect(list.indexOf(9)).toBe(-1);
});
test('find', () => {
    expect(list.find(0).value).toBe(5);
    expect(list.find(1).value).toBe(3);
    expect(list.find(2).value).toBe(4);
    expect(list.find(3).value).toBe(6);
    expect(() => {
        list.find(4);
    }).toThrow();
});
test('test remove first', () => {
    expect(list.removeFirst()).toBe(5);
    expect(list.removeFirst()).toBe(3);
    expect(list.size()).toBe(2);
});
test('test remove last', () => {
    expect(list.removeLast()).toBe(6);
    expect(list.removeLast()).toBe(4);
    expect(list.size()).toBe(0);
});
test('test insert', () => {
    list.insert(5);
    expect(list.size()).toBe(1);
    expect(list.peekFirst()).toBe(5);
    expect(list.peekLast()).toBe(5);
    list.insert(3, 1);
    expect(list.peekLast()).toBe(3);
    expect(list.size()).toBe(2);
});
test('test remove', () => {
    expect(list.remove(1)).toBe(3);
    expect(() => list.remove(1)).toThrow();
    expect(list.remove(0)).toBe(5);
    expect(list.size()).toBe(0);
});
test('test iterator', () => {
    for (let i = 0; i < 5; i++) {
        list.insert(i);
    }
    let num: number;
    let i = 0;
    // @ts-ignore
    for (let num of list) {
        console.log(num);
        expect(num).toBe(i);
        i++;
    }
});