
var c= {
   "name":"",
   "personalemail":"",
   "doj":"",
   "dob":"",
   "Mobileumber":"",
   "educationdetails":"",
   "address":"",
   "position":"",
   "aadharnum":"",
   "pannum":"",
   "idnum":"",
   "officialemail":"",
   "bloodgroup":"",
   "Password":""
};


$m.juci.addDataset("creData",c);
$m.juci.addDataset("options",["Fresher","Experienced"]);
$m.juci.addDataset("optionsedc",["b.tech","Mca","M.com","Diploma","PostGraduate","Graduate"]);

var userdata

var data1;
$m.onData(function(eventObject){
    console.log(eventObject);
  	userdata = eventObject.data;	
	$m.juci.dataset("creData",userdata);   
//1	console.log(userdata.officialemail,"mailid")
   
});

$m.onReady(function(){
	// Code to execute when the page is ready
		var a=$m.juci.dataset("Creatempdetails");
			   	console.log(a,"onreadycreate");
			var b=$m.juci.dataset("empdetails");
	   	 	console.log(b,"onreadyEmp");
});


function update(){
	 var data1=$m.juci.dataset("creData");
    console.log(data1,"gopii")
//1		$m.open("CreateEmployee","/MowblyTracker/CreateEmployee.html",userdata);
		$m.open("CreateEmployee","/MowblyTracker/CreateEmployee.html",data1.officialemail);
		$m.juci.dataset("b1",false);
         $m.juci.dataset("b2",true);
}