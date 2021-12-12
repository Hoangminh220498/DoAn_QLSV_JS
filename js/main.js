stdList = Array();

function createStudent(){
    btn = document.getElementById('btnAdd');
    btn.addEventListener('click', addStudent);

    danhSachSinhVien = document.getElementById('danh-sach-sinh-vien');
    tenDom = document.getElementById('ten');
    msvDom = document.getElementById('msv');
    lopDom = document.getElementById('lop');
    khoaDom = document.getElementById('khoa');
    toanDom = document.getElementById('toan');
    lyDom = document.getElementById('ly');
    hoaDom = document.getElementById('hoa');

    editdanhSachSinhVien = document.getElementById('edit');
    editTen = document.getElementById('edit_ten');
    editMsv = document.getElementById('edit_msv');
    editLop = document.getElementById('edit_lop');
    editKhoa = document.getElementById('edit_khoa');
    editToan = document.getElementById('edit_toan');
    editLy = document.getElementById('edit_ly');
    editHoa = document.getElementById('edit_hoa');
}

function render(){
    danhSachSinhVien.innerHTML = '';
    stdList.forEach(std => {
        danhSachSinhVien.appendChild(createNodeStudent(std));
    });
}

function createNodeStudent(std){
    nodeRow = document.createElement('tr');

    nodeId = document.createElement('td');
    nodeId.innerHTML =std.id;
    nodeRow.appendChild(nodeId);

    nodeten = document.createElement('td');
    nodeten.innerHTML = std.ten;
    nodeRow.appendChild(nodeten);

    nodemsv = document.createElement('td');
    nodemsv.innerHTML =std.msv;
    nodeRow.appendChild(nodemsv);

    nodelop = document.createElement('td');
    nodelop.innerHTML =std.lop;
    nodeRow.appendChild(nodelop);

    nodekhoa = document.createElement('td');
    nodekhoa.innerHTML =std.khoa;
    nodeRow.appendChild(nodekhoa);

    nodetoan = document.createElement('td');
    nodetoan.innerHTML =std.toan;
    nodeRow.appendChild(nodetoan);

    nodely = document.createElement('td');
    nodely.innerHTML =std.ly;
    nodeRow.appendChild(nodely);

    nodehoa = document.createElement('td');
    nodehoa.innerHTML =std.hoa;
    nodeRow.appendChild(nodehoa);

    //Create button Edit
    nodeBtnEditWrap = document.createElement('td');
    nodeRow.appendChild(nodeBtnEditWrap);

    nodeButtonEdit = document.createElement('button');
    nodeButtonEdit.innerHTML = 'Sửa';
    nodeButtonEdit.addEventListener('click', function () {
        editStudent(std.id);
    });
    nodeBtnEditWrap.appendChild(nodeButtonEdit);

    //Create button Delete
    nodeBtnDeleteWrap = document.createElement('td');

    nodeBtnDelete = document.createElement('button');
    nodeBtnDelete.innerHTML = 'Xóa';
    nodeBtnDelete.addEventListener('click', function(){
        deleteStudent(std.id);
    });
    nodeBtnEditWrap.appendChild(nodeBtnDelete);

    return nodeRow;
}



//create std
let id = 0;
function addStudent(){ 
    id++;
    std = new Student(
        id,
        tenDom.value,
        msvDom.value,
        lopDom.value,
        khoaDom.value,
        toanDom.value,
        lyDom.value,
        hoaDom.value
    )
    stdList.push(std); // thêm 1 phần tử vào mảng
    alert('Thêm thành công sinh viên: ' + tenDom.value);
    render();
}

function deleteStudent(id){
    i = 0;
    for(;i<stdList.length; i++){
        if(stdList[i].id == id) break;
    }
    stdList.splice(i, 1);
    render();
}

function editStudent(id) {
    stdList.forEach(std => {
        if (std.id == id) {
            editTen.value = std.ten;
            editMsv.value = std.msv;
            editLop.value = std.lop;
            editKhoa.value = std.khoa;
            editToan.value = std.toan;
            editLy.value = std.ly;
            editHoa.value = std.hoa;
            editdanhSachSinhVien.style.display = 'block';
            document.getElementById('form-student').style.display= 'none';
            index = id;
        }
    });
}

function updateStudent(id) {
    id = index;
    stdList.forEach(std => {
        if (std.id == id) {
            std.ten = editTen.value;
            std.msv = editMsv.value;
            std.lop = editLop.value;
            std.khoa = editKhoa.value;
            std.toan = editToan.value;
            std.ly = editLy.value;
            std.hoa = editHoa.value;
            editdanhSachSinhVien.style.display = 'none';
            document.getElementById('form-student').style.display= 'block';
        }
    });
    render();
}

function renderSearch() {
    danhSachSinhVien.innerHTML = '';
    arr.forEach(std => {
        danhSachSinhVien.appendChild(createNodeStudent(std));
    });
}

function search() {
    arr = new Array();
    key = document.getElementById('search').value;
    for (i = 0; i < stdList.length; i++) {
       if (stdList[i].ten.includes(key)) {
           stdList[i].id = arr.length + 1;
           arr.push(stdList[i]);
       }
   }
   renderSearch();
}
// end student


facList = Array();

function createFaculty(){
    btn = document.getElementById('btnAddFaculty');
    btn.addEventListener('click', addFaculty);

    danhSachKhoa = document.getElementById('danh-sach-khoa');
    tenKhoaDom = document.getElementById('tenKhoa');

    editdanhSachKhoa = document.getElementById('edit-faculty');
    editTenKhoa = document.getElementById('edit_tenKhoa');
}

function renderFaculty(){
    danhSachKhoa.innerHTML = '';
    facList.forEach(fac => {
        danhSachKhoa.appendChild(createNodeFaculty(fac));
    });
}

function createNodeFaculty(fac){
    nodeRow = document.createElement('tr');

    nodeId = document.createElement('td');
    nodeId.innerHTML = fac.id;
    nodeRow.appendChild(nodeId);

    nodetenKhoa = document.createElement('td');
    nodetenKhoa.innerHTML = fac.tenKhoa;
    nodeRow.appendChild(nodetenKhoa);

    //Create button Edit Faculty
    nodeBtnEditWrap = document.createElement('td');
    nodeRow.appendChild(nodeBtnEditWrap);

    nodeButtonEdit = document.createElement('button');
    nodeButtonEdit.innerHTML = 'Sửa';
    nodeButtonEdit.addEventListener('click', function () {
        editFaculty(fac.id);
    });
    nodeBtnEditWrap.appendChild(nodeButtonEdit);

    //Create button Delete Faculty
    nodeBtnDeleteWrap = document.createElement('td');

    nodeBtnDelete = document.createElement('button');
    nodeBtnDelete.innerHTML = 'Xóa';
    nodeBtnDelete.addEventListener('click', function(){
        deleteFaculty(fac.id);
    });
    nodeBtnEditWrap.appendChild(nodeBtnDelete);

    return nodeRow;
}

//create fac
let id_fac = 0;
function addFaculty(){ 
    id_fac++;
    fac = new Faculty(
        id_fac,
        tenKhoaDom.value,
    )
    facList.push(fac);
    alert('Thêm thành công khoa: ' + tenKhoaDom.value);
    renderFaculty();
    truyenKhoa();
}

function deleteFaculty(id){
    i_fac = 0;
    for(;i_fac < facList.length; i_fac++){
        if(facList[i_fac].id == id) break;
    }
   facList.splice(i_fac, 1);
    renderFaculty();
}

function editFaculty(id) {
    facList.forEach(fac => {
        if (fac.id == id) {
            editTenKhoa.value = fac.tenKhoa;
            editdanhSachKhoa.style.display = 'block';
            document.getElementById('form-faculty').style.display= 'none';
            index = id;
        }
    });
}

function updateFaculty(id) {
    id = index;
    facList.forEach(fac => {
        if (fac.id == id) {
            fac.tenKhoa = editTenKhoa.value;
            editdanhSachKhoa.style.display = 'none';
            document.getElementById('form-faculty').style.display= 'block';
        }
    });
    renderFaculty();
}
// End Khoa


clsList = Array();

function createClass(){
    btn = document.getElementById('btnAddClass');
    btn.addEventListener('click', addClass);

    danhSachLop = document.getElementById('danh-sach-lop');
    tenLopDom = document.getElementById('tenLop');

    editdanhSachLop = document.getElementById('edit-class');
    editTenLop = document.getElementById('edit_tenLop');
}

function renderClass(){
    danhSachLop.innerHTML = '';
    clsList.forEach(cls => {
        danhSachLop.appendChild(createNodeClass(cls));
    });
}

function createNodeClass(cls){
    nodeRow = document.createElement('tr');

    nodeId = document.createElement('td');
    nodeId.innerHTML = cls.id;
    nodeRow.appendChild(nodeId);

    nodetenLop = document.createElement('td');
    nodetenLop.innerHTML = cls.tenLop;
    nodeRow.appendChild(nodetenLop);

    //Create button Edit Class
    nodeBtnEditWrap = document.createElement('td');
    nodeRow.appendChild(nodeBtnEditWrap);

    nodeButtonEdit = document.createElement('button');
    nodeButtonEdit.innerHTML = 'Sửa';
    nodeButtonEdit.addEventListener('click', function () {
        editClass(cls.id);
    });
    nodeBtnEditWrap.appendChild(nodeButtonEdit);

    //Create button Delete Class
    nodeBtnDeleteWrap = document.createElement('td');

    nodeBtnDelete = document.createElement('button');
    nodeBtnDelete.innerHTML = 'Xóa';
    nodeBtnDelete.addEventListener('click', function(){
        deleteClass(cls.id);
    });
    nodeBtnEditWrap.appendChild(nodeBtnDelete);

    return nodeRow;
}

//create cla
let id_cls = 0;
function addClass(){ 
    id_cls++;
    cls = new Class(
        id_cls,
        tenLopDom.value,
    )
    clsList.push(cls);
    alert('Thêm thành công lớp: ' + tenLopDom.value);
    renderClass();
    truyenLop();
}

function deleteClass(id){
    i_cls = 0;
    for(;i_cls < clsList.length; i_cls++){
        if(clsList[i_cls].id == id) break;
    }
   clsList.splice(i_cls, 1);
    renderClass();
}

function editClass(id) {
    clsList.forEach(cls => {
        if (cls.id == id) {
            editTenLop.value = cls.tenLop;
            editdanhSachLop.style.display = 'block';
            document.getElementById('form-class').style.display= 'none';
            index = id;
        }
    });
}

function updateClass(id) {
    id = index;
    clsList.forEach(cls => {
        if (cls.id == id) {
            cls.tenLop = editTenLop.value;
            editdanhSachLop.style.display = 'none';
            document.getElementById('form-class').style.display= 'block';
        }
    });
    renderClass();
}

// create option khoa
function truyenKhoa() {
    slectKhoa = document.getElementById('khoa');
    slectEditKhoa = document.getElementById('edit_khoa');
    if (facList.length != 0) {
        slectKhoa.appendChild(createOptionFaculty(facList[facList.length-1]));
        slectEditKhoa.appendChild(createOptionFaculty(facList[facList.length-1]));
    }
}
function createOptionFaculty(fac) {
    opK = document.createElement('option');
    opK.innerHTML = tenKhoaDom.value;
    opK.setAttribute("value",tenKhoaDom.value);
    return opK;
}
// create option lop
function truyenLop() {
    slectLop = document.getElementById('lop');
    slectEditLop = document.getElementById('edit_lop');
    if (clsList.length != 0) {
        slectLop.appendChild(createOptionClass(clsList[clsList.length-1]));
        slectEditLop.appendChild(createOptionClass(clsList[clsList.length-1]));
    }
}
function createOptionClass(cls) {
    opL = document.createElement('option');
    opL.innerHTML = tenLopDom.value;
    opL.setAttribute("value",tenLopDom.value);
    return opL;
}

function khoa() {
    document.getElementById("form-faculty").style.display = "block";
    document.getElementById("form-class").style.display = "none";
    document.getElementById("form-student").style.display = "none";
    document.getElementById("list-faculty").style.display = "block";
    document.getElementById("list-class").style.display = "none";
    document.getElementById("list-student").style.display = "none";
}

function lop() {
    document.getElementById("form-faculty").style.display = "none";
    document.getElementById("form-class").style.display = "block";
    document.getElementById("form-student").style.display = "none";
    document.getElementById("list-faculty").style.display = "none";
    document.getElementById("list-class").style.display = "block";
    document.getElementById("list-student").style.display = "none";
}

function sinhVien() {
    document.getElementById("form-faculty").style.display = "none";
    document.getElementById("form-class").style.display = "none";
    document.getElementById("form-student").style.display = "block";
    document.getElementById("list-faculty").style.display = "none";
    document.getElementById("list-class").style.display = "none";
    document.getElementById("list-student").style.display = "block";
}

window.onload = function(e) {
    createStudent();
    createFaculty();
    createClass();
    // render();
}