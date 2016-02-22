function outerFunc(param){
  console.log("Param: "+param);
	
  var innerFunc = function (input){
    console.log("Input: "+input);
    var result = input*param;
     alert('multiplication of input and param is '+result);
    console.log(result);

  }
  return innerFunc;
}
var closureFunc = outerFunc(12);
closureFunc(4);
