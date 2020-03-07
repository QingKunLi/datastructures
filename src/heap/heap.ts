
class Heap<T> {
    elements: Array<T>;
    capacity: number;
    size: number;

    constructor(capacity: number, ...array: T[]) {
        this.capacity = capacity;
        this.size = array.length;
        this.elements = new Array<T>(capacity + 1);

        // 将传入的数组放入堆中
        for (let i = 0; i < this.size; i++) {
            this.elements[i + 1] = array[i];
        }
        // 调整堆结构使之满足最大堆性质
        let root = Math.floor(this.size / 2);
        while (root > 0) {
            let parent = root;
            let child = parent * 2;
            let item = this.elements[root];
            while (child <= this.size) {
                // 找到左右孩子中最大的那个
                if (child !== this.size && this.elements[child] < this.elements[child + 1]) {
                    child = child + 1;
                }
                if (this.elements[child] <= item) {
                    break;
                } else {
                    this.elements[parent] = this.elements[child];
                    parent = child;
                    child = parent * 2;
                }
            }
            this.elements[parent] = item;
            root -= 1;
        }
    }

    // 判断堆是否为空
    isEmpty(): boolean {
        return this.size === 0;
    }

    // 判断堆是否已满
    isFull(): boolean {
        return this.size === this.capacity;
    }

    // 插入
    insert(value: T) {
        if (this.isFull()) {
            throw new Error('Heap is full.');
        }
        let child = ++this.size;
        let parent = Math.floor(child / 2);
        while (parent > 0 && this.elements[parent] < value) {
            this.elements[child] = this.elements[parent];
            child = parent;
            parent = Math.floor(child / 2);
        }
        this.elements[child] = value;
    }

    // 清空
    clear() {
        this.size = 0;
    }

    // 删除最大节点
    removeMax(): T {
        if (this.isEmpty()) {
            throw new Error('Heap is empty.');
        }
        const maxItem = this.elements[1];
        const item = this.elements[this.size--];
        let parent = 1;
        let child = parent * 2;
        while (child <= this.size) {
            // 找到左右孩子中的最大值
            if (child !== this.size && this.elements[child] < this.elements[child + 1]) {
                child = child + 1;
            }
            if (this.elements[child] <= item) {
                break;
            } else {
                this.elements[parent] = this.elements[child];
                parent = child;
                child = parent * 2;
            }
        }
        this.elements[parent] = item;
        return maxItem;
    }

    // 获取堆顶元素
    peek() {
        return this.elements[1];
    }

    // 堆序列
    sequence(): string {
        let result = '[';
        for (let i = 1; i <= this.size; i++) {
            result += this.elements[i].toString() + ', ';
        }
        result += ']';
        return result;
    }
}

export default Heap;