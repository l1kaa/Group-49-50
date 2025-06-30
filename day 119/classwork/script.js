// 1) შევქმანთ new Map ზღვის ლომების ტიპი
//   1. სახელი, გვრი, საცხოვრებელი 
//   2. დავამატოთ ასაკი ჩენი ზღვის ლომის
//   3. for of ით გადავუაროთ zgvisLomebi.keys() და მათი value ები გამომიტანეთ კონსოლში


let seaLion = new Map([["name", "surname"], ["Davit", "Grdzelo"]]);
console.log(map.get("name"));
console.log(map.get("surname"));

seaLion.set("Living place", "Tbilisi");

for (let item of seaLion.keys()){
    console.log(item)
}