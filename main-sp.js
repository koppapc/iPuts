var milkcocoa = MilkCocoa.connectWithApiKey("yieldizqnrkfw.mlkcca.com","MHNFEIABEHDCPCDE","LEJGDhHQhLGaBIQCVWJZADOBTbUQZNmAkmFIfRXP");
var ds = milkcocoa.dataStore("iPutsData");
  
function clicked(){

  var element = document.getElementById("tekisuto");
  var str = element.value;
  
  console.log(str);

  ds.send({title:"tekisuto", content:str});

}	
