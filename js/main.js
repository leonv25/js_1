

let a = 8,
    b = 15,
    c = 2,
    arrX = [calcX1(a, b, c), calcX2(a, b, c)];

function calcX1(a, b, c) {
    
    return(
            (-b - 
            Math.pow(
                (Math.pow(b, 2) - 
                4*a*c),
                0.5
            )) /
            (2*a)    
            );
}

function calcX2(a, b, c) {
    
    return(
            (-b + 
            Math.pow(
                (Math.pow(b, 2) - 
                4*a*c),
                0.5
            )) /
            (2*a)    
            );
}

console.log(arrX);



