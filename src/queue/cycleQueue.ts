class CycleQueue<T> {
    elements: Array<T>;
    capacity: number;
    front: number;
    rear: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.elements = new Array<T>(capacity);
        this.front = this.rear = 0;
    }

    // 判断队列是否为空
    isEmpty(): boolean {
        return this.front === this.rear;
    }

    // 判断队列是否已满
    isFull(): boolean {
        return (this.rear + 1) % this.capacity === this.front;
    }

    // 入队
    offer(value: T): void {
        if (this.isFull()) {
            throw new Error('Full Queue');
        }
        this.elements[++this.rear] = value;
    }

    // 出队
    poll(): T {
        if (this.isEmpty()) {
            throw new Error('Empty Queue');
        }
        return this.elements[++this.front];
    }

    // 获取队列头部元素
    peek() {
        if (this.isEmpty()) {
            throw new Error('Empty Queue');
        }
        return this.elements[this.front + 1];
    }
}

export default CycleQueue;