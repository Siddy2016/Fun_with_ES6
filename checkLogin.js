let checkLogin = (email,password,allUsers)=>{
	let isUserFound=false;
	let passwordCorrect=false;
	for(currentUser of allUsers)
	 {
		if(currentUser.email==email)
		{
			if(currentUser.password==password)
			{
				isUserFound=true;
				passwordCorrect=true;
				break;
			}
			else{
				isUserFound=true;
				passwordCorrect=false;
				break;
			    }
		}
		else{
			isUserFound=false;
	 }
	
	}//End Loop
	
	if(isUserFound==true && passwordCorrect==true)
	{
		alert('You are logged in');
	}
	
	else if(isUserFound==true && passwordCorrect==false)
	{
		alert('You have provided incorrect password');
	}
	
	else
	{
		alert('No user with this email found');
	}
}//End function

const usersArray=[
{
	email:"gururandhawa@gmail.com",
    password:"lahore@100"
},
  {
  	email:"arijitsingh@gmail.com",
    password:"songs@69"
  },

  {
  	email:"iamgood@gmail.com",
    password:"12345_abc"
  }
];

checkLogin("gururandhawa@gmail.com","lahore@100",usersArray);