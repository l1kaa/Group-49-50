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