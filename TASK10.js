function commonLetters() {
    let input1 = "free";
    let input2 = "three";
    let commonLetters = "";

    for(let i = 0; i <= input2.length; i++) {
        if (input1.includes(input2[i])) {
            commonLetters = commonLetters + input2[i] + ",";
        }
    }

    console.log(...new Set(commonLetters));
} 

commonLetters();
