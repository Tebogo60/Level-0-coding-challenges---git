function printVowels(string) {

    let vows = "aeiou";
    let stringVowels = "";

    for(let i = 0; i <= string.length; i++) {
        if (vows.includes(string.toLowerCase()[i])) {
            stringVowels = stringVowels + string[i] + ",";
        }
    }
    console.log(...new Set(stringVowels.toLowerCase()));
}  

printVowels("Umuzi");

