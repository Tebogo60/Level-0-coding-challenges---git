function printVowels(string) {
    let vows = "aeiou".split([""]);
    let allVowelsInString = "";

    for(let i = 0; i < string.length; i++) {
        if(vows.includes(string.toLowerCase()[i])) {
            allVowelsInString += string.toLowerCase()[i];
            allVowelsInString = [...new Set(allVowelsInString)];
        }
    }
    console.log("Vowels: " + allVowelsInString);
}

printVowels("Umuzi");
