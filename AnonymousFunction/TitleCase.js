(function(){
    var string=["hello world", "good morning", "how are you"];
   var str=[];

    for(let i=0;i<string.length;i++){
       str=string[i].split(' ');
       for(let j=0;j<str.length;j++){
        str[j]=str[j][0].toUpperCase()+str[j].substring(1)
       }
       console.log(str.join(' '));
    }
    
})();
