function type_check_v1(input, type) {
    if (input === null && type === "null" || typeof input === undefined && type === "undefined") {
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

function type_check_v2(arg1, arg2) {
    if (arg2["type"] && type_check_v1(arg1, arg2["type"])) {
        if (arg2["value"]) {
            return arg1 == arg2["value"]
        }
        return true
    }

    if (arg2["enum"]) {
        for (i in arg2["enum"]) {
            if (arg2["enum"][i] === arg1) {
                return type_check_v1(arg1, typeof arg2["enum"][i])
            }
        }
    }

    return false
}  