function numberToWord(number) {
    if (number<0 || number > 100) {
        console.log("none")
    }
    const units = [
        "sıfır", "bir", "iki", "üç", "dörd", 
        "beş", "altı", "yeddi", "səkkiz", "doqquz"
    ];

    const tens = [
        "", "on", "iyirmi", "otuz", "qırx", 
        "əlli", "altmış", "yetmiş", "səksən", "doxsan"
    ];

    if (number === 100) {
        return "yüz";
    }

    const tensPart = Math.floor(number / 10);
    const unitsPart = number % 10;

    if (tensPart === 0) {
        return units[unitsPart];
    } else if (unitsPart === 0) {
        return tens[tensPart];
    } else {
        return tens[tensPart] + " " + units[unitsPart];
    }
}

const input = parseInt(prompt(""));
const result = numberToWord(input);
alert(result);
