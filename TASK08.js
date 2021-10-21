function numToHourMin(num) {

    if (num <= 59) {
        console.log(num + " minutes");
    }
    else if (num == 60) {
        console.log(1 + " hour");
    }
    else if (num > 60 && num < 119) {
        return (1 + " hour and " + " minutes");
    }
    else if (num == 120) {
        console.log(2 + " hours");
    }
    else if (num > 180 && num < 239) {
        console.log(3 + " hours and " + " minutes");
    }
    else if (num == 240) {
        console.log(4 + " Hours");
    }
    else if (num > 240 && num < 399) {
        console.log(4 + " hours and " + " minutes")
    }

}

numToHourMin(246);
