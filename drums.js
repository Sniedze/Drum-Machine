let a=document.querySelector(".a");
let s=document.querySelector(".s");
let d=document.querySelector(".d");
let w=document.querySelector(".w");
let x=document.querySelector(".x");
let z=document.querySelector(".z");
let aa=document.querySelector(".aa");
let ss=document.querySelector(".ss");
let dd=document.querySelector(".dd");
let ww=document.querySelector(".ww");
let xx=document.querySelector(".xx");
let zz=document.querySelector(".zz");
let key=document.querySelector(".key")

window.addEventListener("keydown", clicked)
    function clicked(evt){
        key.classList.add("playing");
        switch(evt.key){

            case "a":
                aa.currentTime=0;//rewind to the start
                aa.play();
                console.log("A Clicked");
                break;
            case "s":
                ss.currentTime=0;
                ss.play();
                console.log("S Clicked");
                break;
            case "d":
                dd.currentTime=0;
                dd.play();
                console.log("D Clicked");
                break;
            case "w":
                ww.currentTime=0;
                ww.play();
                console.log("W Clicked");
                break;
            case "x":
                xx.currentTime=0;
                xx.play();
                console.log("X Clicked");
                break;
            case "z":
                zz.currentTime=0;
                zz.play();
                console.log("Z Clicked");
                break;
                      }
    }

/*s.addEventListener("keydown", pressS);
function pressS(){
    console.log("S Pressed")
    ss.play();
}
d.addEventListener("keydown", pressD);
function pressD(){
    console.log("D Pressed")
    dd.play();
}
w.addEventListener("keydown", pressW);
function pressW(){
    ww.play();
}
x.addEventListener("keydown", pressX);
function pressX(){
    xx.play();
}
z.addEventListener("keydown", pressZ);
function pressZ(){
    zz.play();
}*/
