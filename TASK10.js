function commonLetters() {
    let input1 = "free";
    let input2 = "three";
    let results = "";

    for(let i = 0; i <= input2.length; i++) {
        if (input1.includes(input2.toLowerCase()[i])) {
            results = results + input2[i];
            results = [...new Set(results)];
        }
    }
    console.log("Common Letters: " + results.join(''));
    
} 

commonLetters();
