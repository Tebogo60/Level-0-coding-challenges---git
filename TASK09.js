function printVowels(string) {
    let vows = ("aeiouAEIOU");
    let stringVowels = "";

    for(let i = 0; i <= string.length; i++) {
        if (vows.includes(string[i])) {
            stringVowels = stringVowels + string[i] + ", ";
        }
    }
    return (stringVowels);
}  console.log(printVowels("Umuzi Academy"));
