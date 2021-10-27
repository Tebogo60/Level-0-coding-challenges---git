function numToHourMin(num) {
    hour = Math.floor(num/60);
    minutes = num%60;

    if (hour == 1 && minutes == 1) {
        return (hour + " Hour, " + minutes + " Minute");
    }
    else if (hour > 1 && minutes == 1) {
        return (hour + " Hours, " + minutes + " Minute");
    }
    else if (hour == 1 && minutes >= 2) {
        return (hour + " Hour, " + minutes + " Minutes");
    }

    else if (hour < 1 && minutes == 0) {
        return (minutes + " Minute");
    }
    else if (hour < 1 && minutes == 1) {
        return (minutes + " Minute");
    }
    else if (hour < 1 && minutes >= 2) {
        return (minutes + " Minutes");
    }

    else {
        return (hour + " Hours, " + minutes + " Minutes ");
    }
}

console.log(numToHourMin(133));
