/**Array with five strings**/
const colors = ['blue','yellow','purple','brown','white'];
console.log(colors)

/**Adding element to end of array**/
colors.push('orange');
console.log(colors)

/***Removing third element*/
colors.splice(2,1);
console.log(colors)

/**strings from array - comma separated**/
const y = colors.join(', ');
console.log(y)
