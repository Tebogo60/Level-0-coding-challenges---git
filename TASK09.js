function printVowels(string) {
    var vows = ("a,e,i,o,u,A,E,I,O,U");

    for (var i = 0; i < string.length; i++) {
        if (vows.includes(string[i])) {
            console.log(string[i]);
        }
    }
}

console.log(printVowels("African Academy"));
