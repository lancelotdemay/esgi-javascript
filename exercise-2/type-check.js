console.log("null : " ,type_check_v1(null, "null"))
console.log("object : " ,type_check_v1({ "test": "test"}, "object"))
console.log("array : " ,type_check_v1([], "array"))
console.log("number : " ,type_check_v1(1, "number"))
console.log("string : " ,type_check_v1("salut", "string"))

function type_check_v1(input, type) {
    if (input === null && type === "null" || typeof(input) === type || input.constructor === Array && type === "array") {
        return true
    }

    return false
}