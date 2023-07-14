(function(){
    var num1=[11, 23, 67, 78];
    var num2=[1, 32, 53, 689];
    var merge=[...num1,...num2];
    var sortArr=merge.sort();
    var mid=Math.floor(sortArr.length/2);
    if(sortArr.length%2==0){
        console.log((sortArr[mid-1]+sortArr[mid])/2);
    }else{
        console.log(sortArr[mid]/2);
    }
})();