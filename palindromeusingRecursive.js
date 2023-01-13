let pal="";
function ispalindrome(str) {
    return recursive(str.split(''),0)
}


function recursive(array,i) {
 if(i >= array.length){
     return "" 
 }
    recursive(array,i+1)
    pal= pal+array[i];
    return pal;
    
}
console.log(ispalindrome("malayalam"));