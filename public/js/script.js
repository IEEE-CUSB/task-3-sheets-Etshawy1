var ard1 = document.getElementById('arduino1');
var web1 = document.getElementById("web1");
var andr1 = document.getElementById("android1");
var ras1 = document.getElementById("rasberry1");
var embd1 = document.getElementById("embedded1");
var details1 = document.getElementById('choose1');


var ard2 = document.getElementById('arduino2');
var web2 = document.getElementById("web2");
var andr2 = document.getElementById("android2");
var ras2 = document.getElementById("rasberry2");
var embd2 = document.getElementById("embedded2");
var details2 = document.getElementById('choose2');



function changeYear(id){
    if(document.getElementById("###") != null){
        document.getElementById("###").value = id;
        return;
    }
    else{
        let x = document.createElement('input');
        x.name = "year";
        x.type = "hidden";
        x.value = id;
        x.id = "###"
        document.getElementById("chooseYear").appendChild(x);
    }
}


ard1.onclick = function(){
    var text = "This diploma is designed for giving a huge practical experience by using Arduino.<a href = 'https://ieeecusb.org/arduino-raspberry-pi/' target = '_blank'> visit our website for more details</a>";
    changeBtn1Name(this, "img/arduino.jpg", text);
}
web1.onclick = function(){
    var text = "Create amazing websites using the newest technologies and frameworks that powers the internet!<a href = 'https://ieeecusb.org/web-development-workshop/' target = '_blank'> visit our website for more details</a>";
    changeBtn1Name(this, "img/web.png", text);
    
}
andr1.onclick = function(){
    var text = "Create your own application that can be your startup business.!<a href = 'https://ieeecusb.org/game-development/' target = '_blank'> visit our website for more details</a>";
    changeBtn1Name(this, "img/android.png", text);
}
ras1.onclick = function(){
    var text = "This diploma is designed for giving a huge practical experience by using Raspberry Pi<a href = 'https://ieeecusb.org/arduino-raspberry-pi/' target = '_blank'> visit our website for more details</a>";
    changeBtn1Name(this, "img/raspberry.png", text);
}
embd1.onclick = function(){
    var text = "This diploma is designed for giving a great knowledge of embedded system field from A to Z.<a href = 'https://ieeecusb.org/embedded-systems/' target = '_blank'> visit our website for more details</a>";
    changeBtn1Name(this, "img/embedded2.png", text);
}

ard2.onclick = function(){
    var text = "This diploma is designed for giving a huge practical experience by using Arduino.<a href = 'https://ieeecusb.org/arduino-raspberry-pi/' target = '_blank'> visit our website for more details</a>";
    changeBtn2Name(this, "img/arduino.jpg", text);
}
web2.onclick = function(){
    var text = "Create amazing websites using the newest technologies and frameworks that powers the internet!<a href = 'https://ieeecusb.org/web-development-workshop/' target = '_blank'> visit our website for more details</a>";
    changeBtn2Name(this, "img/web.png", text);
    
}
andr2.onclick = function(){
    var text = "Create your own application that can be your startup business.!<a href = 'https://ieeecusb.org/game-development/' target = '_blank'> visit our website for more details</a>";
    changeBtn2Name(this, "img/android.png", text);
}
ras2.onclick = function(){
    var text = "This diploma is designed for giving a huge practical experience by using Raspberry Pi<a href = 'https://ieeecusb.org/arduino-raspberry-pi/' target = '_blank'> visit our website for more details</a>";
    changeBtn2Name(this, "img/raspberry.png", text);
}
embd2.onclick = function(){
    var text = "This diploma is designed for giving a great knowledge of embedded system field from A to Z.<a href = 'https://ieeecusb.org/embedded-systems/' target = '_blank'> visit our website for more details</a>";
    changeBtn2Name(this, "img/embedded2.png", text);
}



function changeBtn1Name(obj, imageurl, txt){
    document.getElementById('choosePre1').innerHTML = obj.innerHTML;
    /*while (details1.firstChild) {
        details1.removeChild(details1.firstChild);
    }*/

    //this x will be submitted to the server
    
    var x = document.createElement('input');
    x.name = "pre1";
    x.type = "hidden";
    x.value = obj.innerHTML;
    document.getElementById('choosePre1').appendChild(x);
    console.log(document.getElementById('choosePre1').childNodes);

    var image = document.createElement("img");
    console.log(imageurl);
    image.src = imageurl;
    if(screen.width > 720)
    {
        image.style.width = "70vw";
    }
    else
    image.style.width = "95vw";
    image.style.margin = "auto";
    var text = document.createElement("p");
    text.innerHTML = txt + "<br>" + "</br>";
    text.style.color = "#fff";
    text.style.marginTop = "0.5em";
    image.style.opacity = "0";
    
    if(details1.children.length >= 2)
    {
        let i = 1;
        let oldImg = details1.firstElementChild;
        var f = setInterval(() => {
            if(i <= 0){
                clearInterval(f);
                oldImg.style.opacity = 0;
            }
            i-=0.1;
            oldImg.style.opacity = i;
        }, 70);
        details1.replaceChild(image ,oldImg);
        details1.removeChild(details1.lastChild);
    }
    else
    {
        details1.appendChild(image);
    }

    let i = 0;
    var f = setInterval(() => {
        if(i >= 1){
            clearInterval(f);
        }
        i+=0.1;
        image.style.opacity = i;
    }, 70);

    
        details1.appendChild(text);

}

function changeBtn2Name(obj, imageurl, txt){
    document.getElementById('choosePre2').innerHTML = obj.innerHTML;
    while (details2.firstChild) {
        details2.removeChild(details2.firstChild);
    }

    //this x will be submitted to the server
    var x = document.createElement('input');
    x.name = "pre2"
    x.type = "hidden";
    x.value = obj.innerHTML;
    document.getElementById('choosePre2').appendChild(x);


    var image = document.createElement("img");
    image.src = imageurl;
    if(screen.width > 720)
    {
        image.style.width = "70vw";
    }
    else
    image.style.width = "95vw";
    image.style.margin = "auto";
    var text = document.createElement("p");
    text.innerHTML = txt + "</br>" + "</br>";
    text.style.color = "#fff";
    text.style.marginTop = "0.5em";
    image.style.opacity = "0";
    details2.appendChild(image);
    let i = 0;
    var f = setInterval(() => {
        if(i >= 1){
            clearInterval(f);
        }
        i+=0.1;
        image.style.opacity = i;
        console.log(image.style.opacity);
    }, 70);
    details2.appendChild(text); 
}



function checkform()
{   
    if(document.getElementById('choosePre1').innerHTML == "Choose a workshop")
    {
        alert("you must choose first preference");
        return false;
    }
    if(document.getElementById('choosePre2').innerHTML == "Choose a workshop")
    {
        alert("you must choose second preference");
        return false;
    }
    if(document.getElementById("###") === null){
        let x = document.createElement('input');
        x.name = "year";
        x.type = "hidden";
        x.value = (document.getElementById("other").value !== "") ? document.getElementById("other").value : "other";
        x.id = "###"
        document.getElementById("chooseYear").appendChild(x);
    }
    return true;
}
