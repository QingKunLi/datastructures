class LNode<T> {
    value: T;
    next: LNode<T>;
    prev: LNode<T>;

    constructor(value?: T, next?: LNode<T>, prev?: LNode<T>) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList<T> {
    private head: LNode<T>;
    private tail: LNode<T>;
    private length = 0;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 判断链表是否为空
    isEmpty(): boolean {
        return this.size() === 0;
    }

    // 获取链表长度
    size(): number {
        return this.length;
    }

    // 按顺序查找对应节点
    find(index: number): LNode<T> {
        if (index < 0 || index >= this.size()) {
            throw new Error('Illegal Index');
        }
        let p = this.head;
        let k = 0;
        while (p && k < index) {
            p = p.next;
            k++;
        }
        return p;
    }

    // 查找元素对应下标
    indexOf(value: T): number {
        let p = this.head;
        let index = 0;
        while (p) {
            if (p.value === value) {
                return index;
            } else {
                p = p.next;
                index++;
            }
        }
        return -1;
    }

    // 插入新节点
    insert(value: T, index?: number): void {
        if (!index || index === this.size()) {
            return this.insertLast(value);
        }
        if (index < 0 || index > this.size()) {
            throw new Error('Illegal Index');
        }
        if (index === 0) {
            return this.insertFirst(value);
        }
        // 找到插入位置前一个节点
        const before = this.find(index - 1);
        const node = new LNode<T>(value, before.next, before);
        before.next.prev = node;
        before.next = node;
        this.length++;
    }

    // 头部插入
    insertFirst(value: T) {
        if (this.isEmpty()) {
            const node = new LNode<T>(value);
            this.head = this.tail = node;
        } else {
            const node = new LNode<T>(value, this.head);
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    }

    // 尾部插入
    insertLast(value: T) {
        if (this.isEmpty()) {
            const node = new LNode<T>(value);
            this.head = this.tail = node;
        } else {
            const node = new LNode<T>(value, null, this.tail);
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    // 删除节点
    remove(index?: number) {
        if (this.isEmpty()) {
            throw new Error('Empty List');
        }
        if (!index || index === this.size() - 1) {
            return this.removeLast();
        }
        if (index < 0 && index >= this.size()) {
            throw new Error('Illegal Index');
        }
        if (index === 0) {
            return this.removeFirst();
        }
        // 找到删除位置的前一个节点
        const before = this.find(index - 1);
        const node = before.next;
        before.next = node.next;
        node.next.prev = before;
        return node.value;
    }

    // 头部删除
    removeFirst(): T {
        if (this.isEmpty()) {
            throw new Error('Empty List');
        }
        const value = this.head.value;
        if (this.size() === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return value;
    }

    // 尾部删除
    removeLast() {
        if (this.isEmpty()) {
            throw new Error('Empty List');
        }
        const value = this.tail.value;
        if (this.size() === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return value;
    }

    // 获取头部元素
    peekFirst() {
        if (this.isEmpty()) {
            throw new Error('Empty List');
        }
        return this.head.value;
    }

    // 获取尾部元素
    peekLast() {
        if (this.isEmpty()) {
            throw new Error('Empty List');
        }
        return this.tail.value;
    }
}

export default LinkedList;