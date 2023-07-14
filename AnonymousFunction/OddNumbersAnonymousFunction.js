(function(){
    var numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var odd=[];

    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2!=0){
            odd.push(numbers[i]);
        }
    }
    console.log(odd);
})();