function getElementWidth(content, padding, border) {
    let totalPadding = Number.parseFloat(padding) * 2;
    let totalBorder = Number.parseFloat(border) * 2;

    return Number.parseInt(content) + Number.parseInt(totalPadding) + Number.parseInt(totalBorder);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200