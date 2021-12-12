class Class {
    constructor(id, tenLop) {
      this.__id = Number(id);
      this.__tenLop = tenLop;
    }

    set id(value) { this.__id = value;}
    get id() { return this.__id;}

    set tenLop(value) { this.__tenLop = value;}
    get tenLop() { return this.__tenLop;}
}