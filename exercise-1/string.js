function ucfirst(s) {
    if (s !== null && typeof s === "string"){
        var upperString = s.replace(s[0], s[0].toUpperCase()) 
        return upperString
    } else {
        return ""
    }
}

function capitalize(s) {
    if (s !== null && typeof s === "string"){
        stringArray = s.split(' ')
        for(i in stringArray) {
           stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1).toLowerCase();
        }
        return stringArray.join(' ')
    } else {
        return ""
    }
}

function camelCase(s) {
    if (s !== null && typeof s === "string"){
        var capitalizedString = capitalize(s)
        var camelCasedString = capitalizedString.split(' ').join('')

        return camelCasedString
    } else {
        return ""
    }
}

function snake_case(s) {
    if (s !== null && typeof s === "string"){
        var stringArray = s.split('/[\s_]+/')
        for(i in stringArray) {
          stringArray[i] = stringArray[i].toLowerCase()
        }
        var snakeCasedString = stringArray.join('_')
        return snakeCasedString
    } else {
        return ""
    }
}

function leet(s) {
    if (s !== null && typeof s === "string"){
        returnedString = ""
        for (letter in s) {
            switch (s[letter]) {
                case "a":
                    returnedString += "4"
                    break;
                case "A":
                    returnedString += "4"
                    break;
                case "e":
                    returnedString += "3"
                    break;
                case "E":
                    returnedString += "3"
                    break;
                case "i":
                    returnedString += "1"
                    break;
                case "I":
                    returnedString += "1"
                    break;
                case "o":
                    returnedString += "0"
                    break;
                case "O":
                    returnedString += "0"
                    break;
                case "u":
                    returnedString += "(_)"
                    break;
                case "U":
                    returnedString += "(_)"
                    break;
                case "y":
                    returnedString +=  "7"
                    break;
                case "Y":
                    returnedString +=  "7"
                    break;
                default:
                    returnedString += s[letter]
            }
    }
        return returnedString
    } else {
        return ""
    }
}

function prop_access(object, path) {
    if (object !== null && typeof path === "string"){
        if (path === "" || path === null) {
            
        } else {
            var paths = path.split(".")
        }
        current = object
        for (i in paths) {
            if (current[paths[i]] !== undefined) {
                current = current[paths[i]]
            } else {
                return paths[i - 1] + "." + paths[i] + " not exist"
            }
        }
        return current
    } else {
        return ""
    }
}