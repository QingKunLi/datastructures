import LinkedList from '../list/list';

class Queue<T> {
    elements: LinkedList<T>;

    constructor() {
        this.elements = new LinkedList<T>();
    }

    // 判断队列是否为空
    isEmpty() {
        return this.elements.size() === 0;
    }

    // 入队
    offer(value: T) {
        this.elements.insertLast(value);
    }

    // 出队
    poll(): T {
        if (this.isEmpty()) {
            throw new Error('Empty Queue');
        }
        return this.elements.removeFirst();
    }

    // 获取队列头部元素
    peek(): T {
        if (this.isEmpty()) {
            throw new Error('Empty Queue');
        }
        return this.elements.peekFirst();
    }
}

export default Queue;