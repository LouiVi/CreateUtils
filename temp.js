Utils.StringToBinary = function(str) {
    return str.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    })/*.join(' ');*/
}

// Example usage:
const binaryString = Utils.StringToBinary("Hello");
alert(binaryString); // Output: "01001000 01100101 01101100 01101100 01101111"