import BinTree from '../../src/bintree/bintree';

const tree = new BinTree<number>();
const array = [3, 5, 4, 1, 2];

test('empty tree', () => {
    expect(tree.isEmpty()).toBeTruthy();
    expect(tree.height()).toBe(0);
});

test('insert elements', () => {
    for (let i = 0; i < array.length; i++) {
        tree.insert(array[i]);
    }
    expect(tree.preOrderTraversal()).toBe('[3, 1, 2, 5, 4, ]');
    expect(tree.inOrderTraversal()).toBe('[1, 2, 3, 4, 5, ]');
    expect(tree.postOrderTraversal()).toBe('[2, 1, 4, 5, 3, ]');
    expect(tree.levelOrderTraversal()).toBe('[3, 1, 5, 2, 4, ]');
});

test('remove elements', () => {
    tree.remove(3);
    expect(tree.postOrderTraversal()).toBe('[2, 1, 5, 4, ]');
    expect(tree.levelOrderTraversal()).toBe('[4, 1, 5, 2, ]');
    expect(tree.height()).toBe(3);
    tree.remove(1);
    expect(tree.preOrderTraversal()).toBe('[4, 2, 5, ]');
    expect(tree.inOrderTraversal()).toBe('[2, 4, 5, ]');
    tree.remove(2);
    expect(tree.height()).toBe(2);
    tree.remove(4);
    expect(tree.height()).toBe(1);
    tree.remove(5);
    expect(tree.isEmpty()).toBeTruthy();
    expect(tree.height()).toBe(0);
});

test('height of tree', () => {
    for (let i = 0; i < array.length; i++) {
        tree.insert(array[i]);
    }
    expect(tree.height()).toBe(3);
});