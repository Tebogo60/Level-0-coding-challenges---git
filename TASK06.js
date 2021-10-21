var a = 20;
var b = 15;
var c = 9;

function maximum(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a);
    }
    else if (b >= a && b >= c) {
        console.log(b);
    }
    else if (c >= a && c >= b) {
        console.log(c);
    }
}

maximum(a, b, c);
