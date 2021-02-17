const a1 = ["live","strong","arp" ]
const a2 = ["armstrong", "alive", "harp", "sharp","lively"  ]

const sortFilteredArray = (arr1, arr2) =>{
    return  arr1.filter(ell => {
        let check = false;
        for (const e of arr2) {
            if(e.search(ell) > -1) {
                check = true;
                break;
            }
        }
        return check ? ell : false;
    }).sort();
}
console.log(sortFilteredArray(a1, a2))