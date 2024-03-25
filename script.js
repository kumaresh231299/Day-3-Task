//! Task -1 : How to compare two json have the same properties without order
let obj1 = {fname:"person",age:5};
let obj2 = {age:5,fname:"person"};

var myObj = true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for (key in obj1){
        if(obj1[key]==obj2[key]){
            continue
        }

        else{
            myObj=false;
            break;
        }
    }

}
else{
    myObj=false;
}
console.log("Both Values are",myObj);



//? Task -2 Display All Country Flags
var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function() {
    var data = request.response;
    var result = JSON.parse(data);
    for(var i=0;i<result.length;i++){
        console.log("Flogs :"+" "+result[i].flags.png);
    }

}



//* Task -3 Display the Country name, Region, Sub Region, Population
var request1 = new XMLHttpRequest;
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function() {
    var data1 = request1.response;
    var result1 = JSON.parse(data1);
    for(var i=0;i<result1.length;i++){
        console.log("Country Name :"+" "+result1[i].name.common+",","Region :"+" "+result1[i].region+",","Sub Region :"+" "+result1[i].subregion+",","Population : "+" "+result1[i].population);

    }

}