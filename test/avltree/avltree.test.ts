
import AVLTree from '../../src/avltree/avltree';

const tree = new AVLTree<number>();

test('empty tree', () => {
    expect(tree.isEmpty()).toBeTruthy();
    expect(tree.height()).toBe(0);
})

test('test RR rotate', () => {
    for (let i = 1; i < 6; i++) {
        tree.insert(i);
    }
    expect(tree.traversal()).toBe('[2, 1, 4, 3, 5, ]');
    expect(tree.height()).toBe(2);
    tree.root = null; // 清空树
})

test('test LL rotate', () => {
    for (let i = 5; i > 0; i--) {
        tree.insert(i);
    }
    expect(tree.traversal()).toBe('[4, 2, 5, 1, 3, ]');
    expect(tree.height()).toBe(2);
    tree.root = null;
})

test('test LR rotate', () => {
    const array = [4, 1, 3, 2, 5];
    for (let i = 0; i < array.length; i++) {
        tree.insert(array[i]);
    }
    expect(tree.traversal()).toBe('[3, 1, 4, 2, 5, ]');
    expect(tree.height()).toBe(2);
    tree.root = null;
})

test('test RL rotate', () => {
    const array = [1, 5, 3, 2, 4];
    for (let i = 0; i < array.length; i++) {
        tree.insert(array[i]);
    }
    expect(tree.traversal()).toBe('[3, 1, 5, 2, 4, ]');
    expect(tree.height()).toBe(2);
})

test('remove', () => {
    tree.remove(3);
    expect(tree.traversal()).toBe('[4, 1, 5, 2, ]');
    tree.remove(4);
    expect(tree.traversal()).toBe('[2, 1, 5, ]');
    expect(tree.height()).toBe(1);
    tree.remove(2);
    expect(tree.traversal()).toBe('[5, 1, ]');
})