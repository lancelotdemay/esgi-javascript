function type_check_v1(input, type) {
    if (input === null && type === "null" || input === undefined && type === "undefined") {
        return true
    } 
    if (typeof input === type) {
        if (input === null && type === "object") {
            return false
        }
        return true
    }
    if (type === "array" && input.constructor === Array ) {
        return true
    }

    return false
}

function myFunction() {
    return 1
}