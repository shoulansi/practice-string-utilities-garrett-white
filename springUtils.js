function capitalize(str){
    let capitalStr = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(capitalStr);
}

function reverse(str) {
    let reverseStr = str.split("").reverse().join("");
    console.log(reverseStr);
}

function contains(str, substr) {
    if (typeof str !== 'string' || typeof substr !== 'string') {
        return false;
    }
    return str.includes(substr);
}

module.exports = { capitalize, reverse, contains }
