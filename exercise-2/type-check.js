var undefinedVal = undefined

console.log("null : " ,type_check_v1(null, "null"))
console.log("object : " ,type_check_v1({ "test": "test"}, "object"))
console.log("array : " ,type_check_v1([], "array"))
console.log("number : " ,type_check_v1(1, "number"))
console.log("string : " ,type_check_v1("salut", "string"))
console.log("undefined :", type_check_v1(undefinedVal, "undefined"))
console.log("function : ", type_check_v1(myFunction, "function"))

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

function myFunction() {
    return 1
}