function numToHourMin(num) {
    hour = Math.floor(num/60);
    minutes = num%60;

    if (h == 1) {
        return (hour + " Hour " + minutes + " Minutes ");
    } else {
        return (hour + " Hours " + minutes + " Minutes ");
    }

}

console.log(numToHourMin(145));
