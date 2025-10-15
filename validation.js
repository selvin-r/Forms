 
 
 class RegistrationFormValidator{

    constructor(){
      this.from = document.getElementById();
      this.progressBar = document.getElementById();
      this.successMessage = document.getElementById();
      this.submitBtn = document.getElementById();


         this.patt={
          fullname:/^[A-Za-z\S]{1,}$/,

          email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,

          phone:/^\d{10}$/,
          pincode:/^\d{6}$/,
          accnumber:/^\d{16}$/,
          ifscode:/^[A-Z]{4}[0,9]{7}$/,
          graduationYear:/^\d{4}$/,
           textFields:/^.{2,}$/


         };
    }



 }