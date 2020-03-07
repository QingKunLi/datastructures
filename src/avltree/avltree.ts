import Queue from '../queue/queue';

class AVLNode<T> {
    value: T;
    left: AVLNode<T>;
    right: AVLNode<T>;
    bf: number;  // 平衡因子
    height: number;  // 节点高度

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.bf = 0;
        this.height = 0;  // 叶节点高度为0
    }
}

class AVLTree<T> {
    root: AVLNode<T>;

    constructor() {
        this.root = null;
    }

    // 判断节点是否为空
    isEmpty(): boolean {
        return this.root === null;
    }

    // 获取树的高度
    height(): number {
        if (!this.root) {
            return 0;
        } else {
            return this.root.height;
        }
    }

    // 插入节点
    insert(value: T) {
        this.root = this._insert(this.root, value);
    }

    private _insert(node: AVLNode<T>, value: T): AVLNode<T> {
        if (!node) {
            return new AVLNode<T>(value);
        }
        if (node.value > value) {
            node.left = this._insert(node.left, value);
        } else if (node.value < value) {
            node.right = this._insert(node.right, value);
        }

        // 插入完成后需要更新节点的平衡因子
        this._update(node);

        // 若出现不平衡, 需要平衡节点
        return this._balance(node);
    }

    private _update(node: AVLNode<T>) {
        const leftHeight = node.left ? node.left.height : -1;
        const rightHeight = node.right ? node.right.height : -1;

        node.height = Math.max(leftHeight, rightHeight) + 1;
        node.bf = leftHeight - rightHeight;
    }

    private _balance(node: AVLNode<T>): AVLNode<T> {
        if (node.bf === -2) {
            if (node.right.bf < 0) {
                // RR旋转
                return this._RR_rotate(node);
            } else if (node.right.bf >= 0) {
                // RL旋转
                return this._RL_rotate(node);
            }
        } else if (node.bf === 2) {
            if (node.left.bf >= 0) {
                // LL旋转
                return this._LL_rotate(node);
            } else if (node.left.bf < 0) {
                // LR旋转
                return this._LR_rotate(node);
            }
        }
        return node;
    }

    private _RR_rotate(node: AVLNode<T>): AVLNode<T> {
        const parentNode = node.right;  // 新的父节点
        node.right = parentNode.left;
        parentNode.left = node;

        // 更新变化节点
        this._update(node);
        this._update(parentNode);
        return parentNode;
    }

    private _RL_rotate(node: AVLNode<T>): AVLNode<T> {
        const parentNode = node.right.left;
        const leftNode = node;
        const rightNode = node.right;
        leftNode.right = parentNode.left;
        rightNode.left = parentNode.right;
        parentNode.left = leftNode;
        parentNode.right = rightNode;

        // 更新变化节点
        this._update(leftNode);
        this._update(rightNode);
        this._update(parentNode);
        return parentNode;
    }

    private _LL_rotate(node: AVLNode<T>): AVLNode<T> {
        const parentNode = node.left;
        node.left = parentNode.right;
        parentNode.right = node;

        // 更新变化的节点
        this._update(node);
        this._update(parentNode);
        return parentNode;
    }

    private _LR_rotate(node: AVLNode<T>): AVLNode<T> {
        const parentNode = node.left.right;
        const leftNode = node.left;
        const rightNode = node;
        leftNode.right = parentNode.left;
        rightNode.left = parentNode.right;
        parentNode.left = leftNode;
        parentNode.right = rightNode;

        // 更新变化的节点
        this._update(leftNode);
        this._update(rightNode);
        this._update(parentNode);
        return parentNode;
    }

    // 删除节点
    remove(value: T) {
        this.root = this._remove(this.root, value);
    }

    private _remove(node: AVLNode<T>, value: T): AVLNode<T> {
        if (!node) {
            return null;
        }
        if (node.value > value) {
            node.left = this._remove(node.left, value);
        } else if (node.value < value) {
            node.right = this._remove(node.right, value);
        } else {
            if (node.left && node.right) {
                const tmpNode = this.findMin(node.right);
                node.value = tmpNode.value;
                node.right = this._remove(node.right, tmpNode.value);
            } else if (node.left) {
                return node.left;
            } else {
                return node.right;
            }
        }

        // 更新节点的平衡因子
        this._update(node);

        return this._balance(node);
    }

    private findMin(node: AVLNode<T>): AVLNode<T> {
        let p = node;
        while (p && p.left) {
            p = p.left;
        }
        return p;
    }

    // 遍历 (采用层序遍历)
    traversal(): string {
        let result = '[';
        const queue = new Queue<AVLNode<T>>();
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

export default AVLTree;