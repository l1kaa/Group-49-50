// 1) შევქმანთ new Map ზღვის ლომების ტიპი
//   1. სახელი, გვრი, საცხოვრებელი 
//   2. დავამატოთ ასაკი ჩენი ზღვის ლომის
//   3. for of ით გადავუაროთ zgvisLomebi.keys() და მათი value ები გამომიტანეთ კონსოლში


                           //   key     value       key       value
        let map = new Map( [ ["name", "davit"], ["surname", "grdzelo"]  ] );
        // map.clear() clearign all of keys and values
        console.log(map.get("name"));
        console.log(map.get("surname"));
        // console.log(map.entries());
        
        // add elements
        //          key      value
        map.set("hasLion", "მყავს!")
        console.log(map.get("hasLion"))
        
        console.log("------------ფორ ლუპის ქვემოთთ-----------")

        for (let item of map.keys()){
            console.log(item)
        }

        console.log("----------რა ტიპის ცხოველია Map?-----------")
        console.log(typeof map)

let seaLion = new Map([["name", "surname"], ["Davit", "Grdzelo"]]);
console.log(map.get("name"));
console.log(map.get("surname"));

seaLion.set("Living place", "Tbilisi");

for (let item of seaLion.keys()){
    console.log(item)
}