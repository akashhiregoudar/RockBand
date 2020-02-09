
var len=document.querySelectorAll("button").length;
for(var i=0;i<len;i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var buttonInner=this.innerHTML;
        makeSound(buttonInner);
    });
}

document.addEventListener("keypress",function(event) {
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case '1':
            var a=new Audio("beats/1.wav");
            a.play();
            break;
        case '2':
            var b = new Audio("beats/2.wav");
            b.play();
            break;
        case '3':
            var c = new Audio("beats/3.wav");
            c.play();
            break;
        case '4':
            var d = new Audio("beats/4.wav");
            d.play();
            break;
        case '5':
            var e = new Audio("beats/5.wav");
            e.play();
            break;
        case '6':
            var f = new Audio("beats/6.wav");
            f.play();
            break;
        case '7':
            var g = new Audio("beats/7.wav");
            g.play();
            break;
        case '8':
            var h = new Audio("beats/8.wav");
            h.play();
            break;

        default:alert("Invalid !! Press numbers in between 1-8 !");
    }
}
