class Student{
    constructor(id, ten, msv, lop, khoa, toan, ly, hoa){                
        this.__id = Number(id);
        this.__ten = ten;
        this.__msv = msv;
        this.__lop = lop;
        this.__khoa = khoa;
        this.__toan = toan;
        this.__ly = ly;
        this.__hoa = hoa;
    }

    set id(value) { this.__id = value; }
    get id() { return this.__id; }

    set ten(value) { this.__ten = value; }
    get ten() { return this.__ten; }

    set msv(value) { this.__msv = value; }
    get msv() { return this.__msv; }

    set lop(value) { this.__lop = value; }
    get lop() { return this.__lop; }

    set khoa(value) { this.__khoa = value; }
    get khoa() { return this.__khoa; }

    set toan(value) { this.__toan = value; }
    get toan() { return this.__toan; }

    set ly(value) { this.__ly = value; }
    get ly() { return this.__ly; }

    set hoa(value) { this.__hoa = value; }
    get hoa() { return this.__hoa; }
} 