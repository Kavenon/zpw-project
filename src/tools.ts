interface Array<T> {
    toggle(o: T): Array<T>;
}

Array.prototype.toggle = function <T>(value: T): Array<T> {
    const index = this.indexOf(value);
    if (index === -1) {
        this.push(value);
    } else {
        this.splice(index, 1);
    }
    return this;
};
