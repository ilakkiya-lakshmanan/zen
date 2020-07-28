var arr = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    for (var i = 0; i < arr.length; i+=1) {
        let newObj = {};
        //console.log(arr[i]);
        for (var j = 0; j < arr[i].length; j+=1) {
            //console.log(arr[i][j]);
           
            for (var k = 0; k < arr[i][j].length; k+=2) {
                
               // console.log(arr[i][j][k]);
               newObj[arr[i][j][k]] = arr[i][j][k+1];
              // array.push(newObj);
               
            }
           
        }
        tranformEmployeeList.push(newObj);

        
    }
    return tranformEmployeeList;
}
var result = transformEmployeeData(arr);
console.log(result);
