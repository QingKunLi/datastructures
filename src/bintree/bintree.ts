
import Stack from '../stack/stack';
import Queue from '../queue/queue';

class TNode<T> {
    value: T;
    left: TNode<T>;
    right: TNode<T>;

    constructor(value?: T, left?: TNode<T>, right?: TNode<T>) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinTree<T> {
    private root: TNode<T>;

    constructor() {
        this.root = null;
    }

    // 判断树是否为空
    isEmpty(): boolean {
        return this.root === null;
    }

    // 树的高度
    height(): number {
        return this._height(this.root);
    }

    private _height(node: TNode<T>): number {
        if (!node) {
            return 0;
        }
        return Math.max(this._height(node.left), this._height(node.right)) + 1;
    }

    // 插入节点
    insert(value: T) {
        this.root = this._insert(this.root, value);
    }

    private _insert(node: TNode<T>, value: T): TNode<T> {
        if (!node) {
            node = new TNode<T>(value, null, null);
        } else {
            if (node.value > value) {
                node.left = this._insert(node.left, value);
            } else if (node.value < value) {
                node.right = this._insert(node.right, value);
            }
        }
        return node;
    }

    // 删除节点
    remove(value: T): void {
        this.root = this._remove(this.root, value);
    }

    private findMin(node: TNode<T>) {
        let p = node;
        while (p && p.left) {
            p = p.left;
        }
        return p;
    }

    private _remove(node: TNode<T>, value: T): TNode<T> {
        if (!node) {
            return null;
        }
        if (node.value > value) {
            node.left = this._remove(node.left, value);
        } else if (node.value < value) {
            node.right = this._remove(node.right, value);
        } else {
            // 如果节点度为2
            if (node.left && node.right) {
                const tmpNode = this.findMin(node.right);  // 找到节点右子树的最小值作为新根节点
                node.value = tmpNode.value;
                node.right = this._remove(node.right, tmpNode.value);
            } else if (node.right) {
                // 没有左子树
                node = node.right;
            } else {
                // 没有右子树或为叶节点
                node = node.left;
            }
        }
        return node;
    }

    // 二叉树遍历: 先序遍历 （根左右）
    preOrderTraversal(): string {
        let node = this.root;
        const stack = new Stack<TNode<T>>();
        let result = '[';
        while (node || !stack.isEmpty()) {
            while (node) {
                result += node.value.toString() + ', ';
                stack.push(node);
                node = node.left;
            }
            if (!stack.isEmpty()) {
                node = stack.pop();
                node = node.right;
            }
        }
        result += ']';
        return result;
    }

    // 二叉树遍历: 中序遍历（左根右）
    inOrderTraversal(): string {
        let node = this.root;
        const stack = new Stack<TNode<T>>();
        let result = '[';
        while (node || !stack.isEmpty()) {
            while (node) {
                stack.push(node);
                node = node.left;
            }
            if (!stack.isEmpty()) {
                node = stack.pop();
                result += node.value.toString() + ', ';
                node = node.right;
            }
        }
        result += ']';
        return result;
    }

    // 二叉树遍历: 后序遍历 （左右根）
    postOrderTraversal(): string {
        let node = this.root;
        const stack = new Stack<TNode<T>>();
        let lastNode: TNode<T>;
        let result = '[';
        while (node || !stack.isEmpty()) {
            while (node) {
                stack.push(node);
                node = node.left;
            }
            if (!stack.isEmpty()) {
                node = stack.peek();
                if (node.right && lastNode !== node.right) {
                    node = node.right;
                } else {
                    node = stack.pop();
                    result += node.value.toString() + ', ';
                    lastNode = node;
                    node = null;
                }
            }
        }
        result += ']';
        return result;
    }

    // 二叉树遍历: 层序遍历（从左到右, 从上到下）
    levelOrderTraversal(): string {
        const queue = new Queue<TNode<T>>();
        let result: string = '[';
        if (this.root) {
            queue.offer(this.root);
        }
        while (!queue.isEmpty()) {
            const node = queue.poll();
            result += node.value.toString() + ', ';
            if (node.left) {
                queue.offer(node.left);
            }
            if (node.right) {
                queue.offer(node.right);
            }
        }
        result += ']';
        return result;
    }
}

export default BinTree;