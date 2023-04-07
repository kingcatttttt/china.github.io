

document.querySelector(".a1").addEventListener("click", a1)
document.querySelector(".a2").addEventListener("click", a2)
document.querySelector(".a3").addEventListener("click", a3)
document.querySelector(".a4").addEventListener("click", a4)
document.querySelector(".a5").addEventListener("click", a5)
document.querySelector(".a6").addEventListener("click", a6)
document.querySelector(".a7").addEventListener("click", a7)
document.querySelector(".a8").addEventListener("click", a8)
document.querySelector(".a9").addEventListener("click", a9)
document.querySelector(".a10").addEventListener("click", a10)
document.querySelector(".a11").addEventListener("click", a11)
document.querySelector(".a12").addEventListener("click", a12)


let count = 0;
function a1() {
    let value1 = document.querySelector(".input1").value;
    if(value1 == "yes") {
        alert("+1 socailCredit")
        count ++;
        console.log(count)
        this.disabled = 'disabled';
    } else {
        alert("-100 SocailCredit")
        audio.src = '1.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; 
        this.disabled = 'disabled';
    }
}

function a2() {
    let value2 = document.querySelector(".input2").value;
    if(value2 == "yes") {
        alert("+1 socailCredit")
        count ++;
        console.log(count)
        this.disabled = 'disabled';
    } else {
        alert("-100 SocailCredit")
        this.disabled = 'disabled';
    }
}

function a3() {
    let value3 = document.querySelector(".input3").value;
    if(value3 == "yes") {
        alert("+1 socailCredit")
        count ++;
        console.log(count)
        this.disabled = 'disabled';
    } else {
        alert("-100 SocailCredit")
        this.disabled = 'disabled';
    }
}
function a4() {
    let value4 = document.querySelector(".input4").value;
    if(value4 == "yes") {
        alert("+1 socailCredit")
        count ++;
        console.log(count)
        this.disabled = 'disabled';
    } else {
        alert("-100 SocailCredit")
        this.disabled = 'disabled';
    }
}
function a5() {
    let value5 = document.querySelector(".input5").value;
    if(value5 == "yes") {
        alert("+1 socailCredit")
        count ++;
        console.log(count)
        this.disabled = 'disabled';
    } else {
        alert("-100 SocailCredit")
        this.disabled = 'disabled';
    }
}

function a6() {
    let value6 = document.querySelector(".input6").value;
    if(value6 == "yes") {
        alert("+1 socailCredit")
        count ++;
        console.log(count)
        this.disabled = 'disabled';
    } else {
        alert("-100 SocailCredit")
        this.disabled = 'disabled';
    }
    }
function a7() {
    let value7 = document.querySelector(".input7").value;
    if(value7 == "yes") {
        alert("+1 socailCredit")
        count ++;
        console.log(count)
        this.disabled = 'disabled';
    } else {
        alert("-100 SocailCredit")
        this.disabled = 'disabled';
    }
}

function a8() {
    let value8 = document.querySelector(".input8").value;
    if(value8 == "yes") {
        alert("+1 socailCredit")
        count ++;
        console.log(count)
        this.disabled = 'disabled';
    } else {
        alert("-100 SocailCredit")
        this.disabled = 'disabled';
    }
}

function a9() {
    let value9 = document.querySelector(".input9").value;
    if(value9 == "yes") {
        alert("+1 socailCredit")
        count ++;
        console.log(count)
        this.disabled = 'disabled';
    } else {
        alert("-100 SocailCredit")
        this.disabled = 'disabled';
    }
}
function a10() {
    let value10 = document.querySelector(".input10").value;
    if(value10 == "yes") {
        alert("+1 socailCredit")
        count ++;
        this.disabled = 'disabled';
        console.log(count)
    } else {
        alert("-100 SocailCredit")
        this.disabled = 'disabled';
    }
}
function a11() {
    let value11 = document.querySelector(".input11").value;
    if(value11 == "yes") {
        alert("+1 socailCredit")
        count ++;
        console.log(count)
        this.disabled = 'disabled';
    } else {
        alert("-100 SocailCredit")
        this.disabled = 'disabled';
    }
}
function a12() {
    let value12 = document.querySelector(".input12").value;
    if(count >= 10) {
        count ++;
        alert("китай доволен табой твой подарок тарелк риса и кот жена")
    } else {
      alert("ти не достоин жизнь китай партия принять решеня тебя убить")
    }
}

let  audio = new Audio(); // Создаём новый элемент Audio

