function maximum(a, b, c) {
    if (a >= b && a >= c) {
        return console.log(a);
    }
    else if (b >= a && b >= c) {
        return console.log(b);
    }
    else if (c >= a && c >= b) {
        return console.log(c);
    }
}

maximum(2, 3, 4);
