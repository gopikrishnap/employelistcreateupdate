var currentDate = new Date().toDateString();
 var emp={
   "name":"",
   "dob":"",
   "Mobileumber":"",
   "position":"",
   "officialemail":"",
   "Password":"",
   "status":"initializedCreateemp",
   "empId":currentDate
};
$m.juci.addDataset("b1",true);
$m.juci.addDataset("b2",false);
$m.juci.addDataset("Creatempdetails",emp);
$m.juci.addDataset("options",["Fresher","Experienced"]);

var result;

$m.onData(function(eventObject){
    console.log(eventObject);
    
//  	if(result.officialemail== eventObject.data){
if(result.officialemail== eventObject.data){
  		
//  	$m.juci.dataset("Creatempdetails",{
//   "name":"rre",
//   "dob":"",
//   "Mobileumber":"ertert",
//   "position":"",
//   "officialemail":"fdgfd@gmail.com",
//   "Password":"",
//   "status":"initializedCreateemp",
//   "empId":currentDate
//
//});
  		$m.alert("succesfull updated")
  	}
  	else{
  			$m.alert("not updated")
  	}
  	
});



//$m.onData(function(eventObject){
//    console.log(eventObject);
//  	userdata = eventObject.data;	
//	$m.juci.dataset("Creatempdetails",userdata);   
//});
//$m.onReady(function(){
//	// Code to execute when the page is ready
//		var a=$m.juci.dataset("empdetails");
//		console.log(a,"somthing");
//		$m.juci.findById("name").disable()
//		$m.juci.getControl("name").disable();
//		$m.juci.getControl("dob").disable();
//		$m.juci.getControl("mobile").disable();
//		$m.juci.getControl("position").disable();
//
//});
	function getAge(dob) {
		var today = new Date();
		var birthDate = new Date(dob);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

function Dateofbirth1(event){
    var dob = $m.juci.dataset("Creatempdetails").dob;
	var newdob = new Date(dob).toDateString();
	var currentDate = new Date().toDateString();
		if (dob > new Date()) {
			$m.juci.getDataset("Creatempdetails")().dob('');
			$m.alert("Date of birth should not be greater than Today's Date");
		}else if (newdob == currentDate) {
			$m.juci.getDataset("Creatempdetails")().dob('');
			$m.alert("Date of birth should not be current date");
		}else 	{
	       	var age = getAge(dob);
				if(age < 18){
					$m.juci.getDataset("Creatempdetails")().dob('');
					$m.alert("Age should be greater than 18 years");
					 console.log("44444",dob)
				}
				else{
					var c = $m.juci.dataset("Creatempdetails");
				    console.log("44444",c)
					c.dob =new Date(c.dob).toString("MM-dd-yyyy");		
			        $m.juci.dataset("Creatempdetails",c);
				}
         }
};

function createemp(){
	
	   result=$m.juci.dataset("Creatempdetails");
	   console.log(result,"Creatempdetails");	
	   $m.open("emplist","/MowblyTracker/Employeelist.html", result);
	    $m.juci.dataset("b2",true);
	    $m.juci.dataset("b1",false);
}

  function Updatecreateemp(){
	
                
            }







	
	





