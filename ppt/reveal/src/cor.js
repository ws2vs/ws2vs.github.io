class MoneyStack {
    constructor(size) {
        this.size = size;
        this.next = null;
    }

    getMoney(total) {
        let temp = total;
        // 比如一共去73块钱，这堆是10块钱的，能取7堆
        const count = Math.floor(temp / this.size);

        if (count > 0) {
            this.log(count);

            // 73块钱 扣除 7*10块钱
            // 剩余3块，继续
            temp = temp - (this.size * count);
        }

        if (temp > 0 && this.next) {
            this.next.getMoney(temp);
        }
    }

    setNext(next) {
        this.next = next;
    }

    log(count) {
        console.log(`${count} of ${this.size} get!`, `total: ${count * this.size}`);
    }
}

class ATM {
    constructor() {
        this.m100 = new MoneyStack(100);
        this.m50 = new MoneyStack(50);
        this.m20 = new MoneyStack(20);
        this.m10 = new MoneyStack(10);
        this.m5 = new MoneyStack(5);
        this.m1 = new MoneyStack(1);

        this.m100.setNext(this.m50);
        this.m50.setNext(this.m20);
        this.m20.setNext(this.m10);
        this.m10.setNext(this.m5);
        this.m5.setNext(this.m1);
    }

    getMoney(total) {
        this.m100.getMoney(total);
    }
}