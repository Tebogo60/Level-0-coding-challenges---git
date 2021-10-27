function commonLetters() {
    let input1 = ("umuzi");
    let input2 = "Umuzi Academy";
    let commonLetters = "";

    for(let i = 0; i <= input2.length; i++) {
        if (input1.includes(input2[i])) {
            commonLetters = commonLetters + input2[i] + ", ";
        }
    }
    return (commonLetters);
}  console.log(commonLetters());
