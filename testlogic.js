function testFunction(){
    document.getElementById('output').innerHTML=mathFunction();
}
function mathFunction(){
    let input= parseInt(document.getElementById('math').value);
    let output =0;
    for (let i = input; i>=0; i--){
        output += i;
    }
    return output;
}