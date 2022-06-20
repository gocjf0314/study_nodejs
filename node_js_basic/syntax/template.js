var value = 'temp';
console.log('Hey ' +value+  ' Boy, It\'s ' +value+ ' cold. ' +value);

value = 'change';
console.log('Hey ' +value+  ' Boy, It\'s ' +value+ ' cold. ' +value);

var tempString = `Hey ${value} 
Boy, It\'s ${value} cold. 
${value}`;
console.log(tempString);
