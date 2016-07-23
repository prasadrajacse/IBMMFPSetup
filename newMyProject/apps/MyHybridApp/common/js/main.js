function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *  */

	     WL.Client.connect({
	     		onSuccess: function(){
	     	      alert('connected');
	     	   },
	     		onFailure: function(error){
	     	  alert(error);
	     	}
	     });


	
	// Common initialization code goes here
	
}
