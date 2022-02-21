(function(){

angular.module('FixTypo',[])    
.controller('FixTypoController',function ($scope)
{
$scope.Name="Module1"
$scope.ItemList=function(){
    console.log("entered itemlist")
var totalString= getStringCount($scope.inputVal);
var input=document.getElementById('txtInput');
if(totalString <= 3)
{
    input.style.color="green";
    alert("Enjoy !")
}
else{
    input.style.color="red";
    alert("Too Much")
}
$scope.totalStringval=totalString;

}
function getStringCount(string)
{
    var arr=[];
    var totalStringValue="";
    for (var i = 0; i < string.length; i++) {
        console.log("entered getStringCount")
        console.log("string.charAt(i) :"+string.charAt(i))
        if(string.charAt(i)=="," || i==(string.length - 1))
        {
            arr.push(totalStringValue);

            totalStringValue ="";
        }
        else{
            console.log("else")
            totalStringValue += string.charAt(i);
            console.log(totalStringValue)
        }
       
      }
      return arr.length;
}

});
})();