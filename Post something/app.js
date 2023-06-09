const textArea = document.getElementById('textarea');
const textArea2 = document.getElementById('textarea-1');
const inputName = document.getElementById("inputName");
const selectElem = document.getElementById("select");
const divElem = document.querySelector(".col");
const boxElem = document.querySelector(".box-1");
const removeElem = document.getElementById("removeIcon");
const getName = document.getElementById("get-name");
const getselVal = document.getElementById("get-sel-val");
const sel = document.getElementById("select");
const section = document.querySelector(".section-1");

function posted() {
    textArea2.value = textArea.value;
    removeElem.style.display = "block";
    boxElem.style.display = "block"
    section.style.display = "none";
    getselVal.innerHTML = sel.value;
    if(inputName.value === ''){
        getName.innerHTML = 'Zeeshan';
    }else{
        getName.innerHTML = inputName.value;
    }
    textArea.style.background = 'white';
    textArea.style.color = 'black';
        textArea.value = "";
        inputName.value = "";


}

function likeIt(){
    if(document.querySelector('.like').style.display == 'none'){
        document.querySelector('.like').style.display = 'block';
    }else{
        document.querySelector('.like').style.display = 'none';
    }
}
function shareIt(){
    if(document.querySelector('.share').style.display == 'none'){
        document.querySelector('.share').style.display = 'block';
    }else{
        document.querySelector('.share').style.display = 'none';
    }

}


function removeIcon(){
    boxElem.style.display = "none";
    removeElem.style.display = "none";
}

function remove() {
    boxElem.style.display = "none";
    removeElem.style.display = "none";
    section.style.display = "block";
}


function backgroundPicture(e) {
    textArea.style.background = "url('./image/bg 1.jpg')";
    textArea2.style.background = "url('./image/bg 1.jpg')";
    
}
function backgroundPicture2() {
    textArea.style.background = "url('./image/bg2.webp')";
    textArea2.style.background = "url('./image/bg2.webp')";
}
function backgroundPicture3() {
    textArea.style.background = "url('./image/bg3.jpg')";
    textArea2.style.background = "url('./image/bg3.jpg')";
    textArea.style.color = 'white';
    textArea2.style.color = 'white';
}
function backgroundPicture4() {
    textArea.style.background = "url('./image/bg4.jpg')";
    textArea2.style.background = "url('./image/bg4.jpg')";
    textArea.style.color = 'white';
    textArea2.style.color = 'white';
}
function backgroundPicture5() {
    textArea.style.background = "url('./image/bg5.jpg')";
    textArea2.style.background = "url('./image/bg5.jpg')";
    textArea.style.color = 'black';
    textArea2.style.color = 'black';
}
function backgroundPicture6() {
    textArea.style.background = "url('./image/bg6.jpg')";
    textArea2.style.background = "url('./image/bg6.jpg')";
    textArea.style.color = 'white';
    textArea2.style.color = 'white';
}
function backgroundPicture7() {
    textArea.style.background = "url('./image/bg7.webp')";
    textArea2.style.background = "url('./image/bg7.webp')";
    textArea.style.color = 'white';
    textArea2.style.color = 'white';
}


function fun10(a) {
    let value = a.value;
    textArea.style.color = value;
    textArea2.style.color = value;

}

function fun11(a) {
    let value = a.value;
    textArea.style.backgroundColor = value;
    textArea2.style.backgroundColor = value;
}


function textTransform() {
    if (textArea.style.textTransform === 'lowercase' && textArea2.style.textTransform === 'lowercase') {
        textArea.style.textTransform = 'capitalize';
        textArea2.style.textTransform = 'capitalize';
    } else if (textArea.style.textTransform === 'capitalize' && textArea2.style.textTransform === 'capitalize') {
        textArea.style.textTransform = 'uppercase';
        textArea2.style.textTransform = 'uppercase';
    }
    else {
        textArea.style.textTransform = 'lowercase';
        textArea2.style.textTransform = 'lowercase';
    };
};


function fun1(a) {
    let value = a.value;
    if (value > 100) {
        textArea.style.fontSize = "18px";
        textArea2.style.fontSize = "18px";
    } else {
        textArea.style.fontSize = value + "px";
        textArea2.style.fontSize = value + "px";
    }
}


function fun2() {
    if (textArea.style.fontWeight == "bold" && textArea.style.fontWeight == "bold") {
        textArea.style.fontWeight = "normal";
        textArea2.style.fontWeight = "normal";
    } else {
        textArea.style.fontWeight = "bold";
        textArea2.style.fontWeight = "bold";
    }
}


function fun3() {
    if (textArea.style.fontStyle == "italic" && textArea.style.fontStyle == "italic") {
        textArea.style.fontStyle = "normal";
        textArea2.style.fontStyle = "normal";
    } else {
        textArea.style.fontStyle = "italic";
        textArea2.style.fontStyle = "italic";
    }
}


function fun4() {
    if (textArea.style.textDecoration == "underline" && textArea.style.textDecoration == "underline") {
        textArea.style.textDecoration = "none";
        textArea2.style.textDecoration = "none";
    } else {
        textArea.style.textDecoration = "underline"
        textArea2.style.textDecoration = "underline"
    }
}


function fun5() {
    textArea.style.textAlign = "start";
    textArea2.style.textAlign = "start";
}


function fun6() {
    textArea.style.textAlign = "center";
    textArea2.style.textAlign = "center";
}


const fontSize = document.getElementById("font-size");

function fun9() {
    textArea.style.fontWeight = "normal"
    textArea.style.textDecoration = "none";
    textArea.style.textTransform = "capitalize";
    textArea.style.textAlign = "start";
    textArea.style.fontStyle = "normal";
    fontSize.value = "18";
    textArea.style.fontSize = "18px";
    textArea.value = "";
    textArea.style.backgroundColor = "white";
    textArea2.style.fontWeight = "normal";
    textArea2.style.textDecoration = "none";
    textArea2.style.textTransform = "capitalize";
    textArea2.style.textAlign = "start";
    textArea2.style.fontStyle = "normal";
    textArea2.style.fontSize = "18px";
    textArea2.value = "";
    textArea2.style.backgroundColor = "white";
}


