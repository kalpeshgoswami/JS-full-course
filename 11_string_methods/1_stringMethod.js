let name = "hello kalpesh"

// ==> charAt() <==

console.log("Char AT :", name.charAt(6));

// ==> concat() <==

console.log("concat :", name.concat(" goswami"));

// ==> endsWith() <==

console.log("endsWith :", name.endsWith("h"));
console.log("endsWith :", name.endsWith("k"));

// ==> Include() <==

console.log("Include :", name.includes("kalpesh"));
console.log("Include :", name.includes("goswami"));

// ==> indexOf() <==

console.log("indexOf :", name.indexOf("e"));
console.log("indexOf :", name.indexOf("g"));

// ==> LastIndexOf() <==

console.log("LastIndexOf :", name.lastIndexOf("k"));
console.log("LastIndexOf :", name.lastIndexOf("o"));

// ==> Specific index position <==

console.log("spacific index find :", name.indexOf("l",2));

// ==> Length <==

console.log("Length :", name.length);