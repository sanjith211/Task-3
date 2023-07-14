(function(){
    var numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var k=3;
    let arr=[];
    k=k%numbers.length;
    for(i=0;i<numbers.length;i++){
        if(i<k){
            arr.push(numbers[numbers.length+i-k]);
        }
        else{
            arr.push(numbers[i-k]);
        }
    }
    console.log(arr);
})();