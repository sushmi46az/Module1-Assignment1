(function () {
    'use strict;'

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope)
   /* .controller('LunchCheckController',function ($scope)*/
{
$scope.Name="Module1"
$scope.ItemList=function(){
    console.log("entered itemlist")
    console.log("input val" + $scope.inputVal.trim());
var totalString= getStringCount($scope.inputVal.trim());
    var input = document.getElementById('txtInput');
    if (totalString <= 3 && totalString !=0)
{
    input.style.color="green";
    alert("Enjoy !")
}
    else if (totalString > 3) {
    input.style.color="red";
    alert("Too Much")
}
$scope.totalStringval=totalString;

}
function getStringCount(string)
{
    console.log("string initial length "+string.trim().length);
    var arr = [];


        var totalStringValue = "";

        for (var i = 0; i < string.length; i++) {
    
            console.log("string.charAt(i) :" + string.charAt(i))
            if (string.charAt(i).trim().length > 0) {
                if (string.charAt(i) == ",") {
                    if (totalStringValue.length > 0)
                        arr.push(totalStringValue);

                    totalStringValue = "";
                    console.log(totalStringValue)
                }
                
                else  {
                    console.log("else " + string.charAt(i))
                    totalStringValue += string.charAt(i);
                    console.log(totalStringValue)
                }
                if (i == (string.length - 1)) {
                    if (totalStringValue.length > 0)
                        arr.push(totalStringValue);
                }
            }
        }


      return arr.length;
}

}
})();