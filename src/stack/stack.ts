import LinkedList from '../list/list';

class Stack<T> {
    elements: LinkedList<T>;
    constructor() {
        this.elements = new LinkedList<T>();
    }

    // 判断栈是否为空
    isEmpty() {
        return this.elements.size() === 0;
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
}

export default Stack;