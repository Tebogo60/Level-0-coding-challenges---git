var input1 = ("awesome");
var input2 = ("great");

function commonLetter(input1, input2) {
    for (var i = 0; i < input1.length && input2.length; i++) {
        return (input1[i] && input2[i]);
    }
}

console.log(commonLetter(input1, input2));
