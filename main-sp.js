function clicked(){
  var str = document.getElementById("tekisuto");
  var milkcocoa = MilkCocoa.connectWithApiKey("yieldizqnrkfw.mlkcca.com","MHNFEIABEHDCPCDE","LEJGDhHQhLGaBIQCVWJZADOBTbUQZNmAkmFIfRXP");
  var ds = milkcocoa.dataStore("iPutsData");
}
  ds.send({title:"tekisuto",content:"tekisuto"});
