const Employee = require("./01-class.js");
var emp1 = new Employee("John","john@oe.com");
  
        
//dace info o  zaposlenom 
    console.log(emp1.getEmployeeInfo());
//ako ovo ima zadace opis posla u suprotnom je u getJobDescription samo zagrada ..
//ako se ispred ove linije koda ispise console.log dobija se undefined jer nije definisan metod u klasi 
   (emp1.setJobDescription("OPIS POSLA ..."));

   console.log(emp1.getJobDescription());