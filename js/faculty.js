class Faculty {
    constructor(id, tenKhoa) {
      this.__id = Number(id);
      this.__tenKhoa = tenKhoa;
    }

    set id(value) { this.__id = value;}
    get id() { return this.__id;}

    set tenKhoa(value) { this.__tenKhoa = value;}
    get tenKhoa() { return this.__tenKhoa;}
}