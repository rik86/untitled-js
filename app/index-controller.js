/**
 * Index Controller. We need to import the modules person-service, utils and bindable
 *
 */
require(['app/person-service', 'utils', 'bindable'], function(PersonService, Utils, Bindable) {

    // private variable myperson
    var myperson = null;
    var list = [];

    /**
     * Initialise the page by retrieving some data for our Form
     * @returns {undefined}
     */
    init = function() {
        // Simulation of a Service call
        personService = new PersonService();

        // Map data from service to input form
        personService.getPersonById("46387558", 
	function(data){
		console.log("service call 1: " +data);
		myperson = new Bindable("user", data);
	});
	
        
        // Map data from service to dropdown list
        personService.getPersons( 	
	function(data){
		console.log("service call 2: " +data);
		list = new Bindable("users", data);
		
	});

    };

    /**
     * Shows the values of the Person
     */
    show = function() {
        // myperson object now holds the values of the person
        alert(myperson.toJson());
    };

    /**
     * Add a Person to the list of Persons
     */        
    addPerson = function() {
	//list.push(myperson);
	
	console.log(list.toJson());
    };

    /**
     * Initialise
     */
    init();
    
});