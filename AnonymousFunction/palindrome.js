(function(){
    var string=["car", "ada", "malayalam", "civic", "radar", "abc", "november", "march"];
    let reverseValue=[];
    let arr=[];
    for(let i=0;i<string.length;i++){
        reverseValue[i]=string[i].split('').reverse().join('');
        if(string[i]==reverseValue[i]){
            arr.push(reverseValue[i]);
        }
    }
  console.log(arr);
})();