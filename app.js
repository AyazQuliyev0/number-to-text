function numberToWord(number) {
    if (number < 0 || number > 100) {
        return "none";
    }
    switch (number) {
        case 100:
            return "yüz";
        case 0:
            return "sıfır";
    }
    const tens = Math.floor(number / 10);
    const units = number % 10;
    let result = "";
    switch (tens) {
        case 1:
            result += "on"; 
            break;
        case 2:
            result += "iyirmi"; 
            break;
        case 3: 
            result += "otuz"; 
            break;
        case 4: 
            result += "qırx"; 
            break;
        case 5: 
            result += "əlli"; 
            break;
        case 6: 
            result += "altmış"; 
            break;
        case 7: 
            result += "yetmiş"; 
            break;
        case 8: 
            result += "səksən"; 
            break;
        case 9: 
            result += "doxsan"; 
            break;
    }

    if (units !== 0) {
        if (result) result += " ";
        switch (units) {
            case 1: result += "bir"; break;
            case 2: result += "iki"; break;
            case 3: result += "üç"; break;
            case 4: result += "dörd"; break;
            case 5: result += "beş"; break;
            case 6: result += "altı"; break;
            case 7: result += "yeddi"; break;
            case 8: result += "səkkiz"; break;
            case 9: result += "doqquz"; break;
        }
    }

    return result;
}

const input = parseInt(prompt(""));
const result = numberToWord(input);
alert(result);