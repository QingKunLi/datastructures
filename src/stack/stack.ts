import LinkedList from '../list/list';

class Stack<T> {
    elements: LinkedList<T>;
    constructor() {
        this.elements = new LinkedList<T>();
    }

    // 栈长度
    size(): number {
        return this.elements.size();
    }

    // 判断栈是否为空
    isEmpty() {
        return this.size() === 0;
    }

    // 入栈
    push(value: T) {
        this.elements.insertLast(value);
    }

    // 出栈
    pop(): T {
        if (this.isEmpty()) {
            throw new Error('Empty Stack');
        }
        return this.elements.removeLast();
    }

    // 获取栈顶元素
    peek(): T {
        if (this.isEmpty()) {
            throw new Error('Empty Stack');
        }
        return this.elements.peekLast();
    }

    // 实现可迭代协议
    // @ts-ignore
    [Symbol.iterator]() {
        // @ts-ignore
        return this.elements[Symbol.iterator]();
    }
}

export default Stack;