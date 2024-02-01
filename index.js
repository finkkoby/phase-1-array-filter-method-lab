// Code your solution here
function findMatching(array, string) {
    let newArray = array.filter(function(item) {
        return item.toLowerCase() === string.toLowerCase();
    })
    return newArray;
}
function fuzzyMatch(array, string) {
    let stringLength = string.length;
    let newArray = array.filter(function(item) {
        console.log(item);
        debugger;
        let boo = item.slice(0, (stringLength)) === string;
        console.log(boo);
        debugger;
        return boo;
    });
    return newArray;
}
function matchName(array, string) {
    let newArray = array.filter(function(object) {
        return object.name === string;
    });
    return newArray;
}

const array = ["Matthew", "Marcus", "Lucas", "Jonathon"];
fuzzyMatch(array, "Ma");