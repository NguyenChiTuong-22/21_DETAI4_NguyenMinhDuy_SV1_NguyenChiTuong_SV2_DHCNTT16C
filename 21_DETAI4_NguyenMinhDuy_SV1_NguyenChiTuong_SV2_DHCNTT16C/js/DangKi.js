function KiemTraTenDN(){
    var re = /^[a-z]\w*/;
    if(re.test(document.getElementById('txtTen').value.trim())==false){
        tendn.innerText = " *Bắt buộc, bắt đầu bằng ký tự";
        return false;
    }
    else{
        tendn.innerText = " *";
        return true;
    }
}
function KiemTraPassWord(){
    var re = /(?=.*\d).{6,}/;
    if(re.test(document.getElementById('txtPass').value.trim())==false){
        mk.innerText = " * phải có chữ, số, ít nhất 6 ký tự";
        return false;
    }
    else{
        mk.innerText = " *";
        return true;
    }
}
function KiemTraXacNhanPassword(){
    if(document.getElementById('txtNLP').value!=document.getElementById('txtPass').value){
        xnmk.innerText = " * phải giống ô mật khẩu";
        return false;
    }
    else{
        xnmk.innerText = " *";
        return true;
    }
}