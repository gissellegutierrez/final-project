 console.log('helloss')
 
$(function(){
     $("#start").click(function () {
     console.log('hello')
     checkPhdStatus() 
     checkMasterStatus()
     callAPI()
 });
 function checkPhdStatus(){
  var selectedPhd = $("#phd").is(":checked");
     console.log(selectedPhd)   
 }    
 function checkMasterStatus(){
     var selectedMaster = $("#masters").is(":checked");
     console.log(selectedMaster)
 }
 function callAPI(){
      $.getJSON( "https://www.nearbycolleges.info/api/search?key=773166e8-4b47-4d0a-9576-4efe98efa148&filter=school.offersPhD:=1,school.offersMasters:=1", function(response){
      console.log(response);
  });
 }



}) 