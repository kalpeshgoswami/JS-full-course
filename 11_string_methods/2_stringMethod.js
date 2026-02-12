let name = "kalpesh goswami";

let text = "full Stack Developer";

// ==>  with match Method we can know about index position, group and full sentence

console.log(name.match("sh"));
console.log(text.match("D"));

//  ==>  repeat method is repeated word or sentence

console.log(name.repeat(2));
console.log(text.repeat(2));

//  ==>   with replace method we can replace any single specific character

console.log(name.replace("k", "K"));
console.log(text.replace("e", "E"));

//  ==>   with replace method we can replace all specific character

console.log(name.replaceAll("a", "A"));
console.log(text.replaceAll("e", "E"));

//  ==>   search method use for searching any single character 

console.log(name.search("g"));
console.log(text.search("D"))

// ==>  slice method is used to extract a part of a string

console.log(name.slice(8));
console.log(text.slice(5,10));
console.log(text.slice(-1));