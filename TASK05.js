function areaOfTri(a,b,c) {

    let s = 1/2 * (a + b + c);

    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    
    return area;
}

areaOfTri(9,10,11);
