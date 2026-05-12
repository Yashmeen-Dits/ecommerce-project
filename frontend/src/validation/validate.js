export const validateRegister = (formData) =>
{
   let errors = {};

 
   if(!formData.name.trim())
   {
      errors.name = "*Required Field";
   }

   else if(formData.name.length < 3)
   {
      errors.name =
         "Name must be at least 3 characters";
   }

   if(!formData.email.trim())
   {
      errors.email = "*Required Field";
   }

   else if(
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
      .test(formData.email)
   )
   {
      errors.email =
         "Invalid email format";
   }

   if(!formData.password.trim())
   {
      errors.password =
         "Password is required";
   }

   else if(formData.password.length < 6)
   {
      errors.password =
         "Password must be at least 6 characters";
   }

   return errors;
};





export const validateLogin = (formData) =>
{
   let errors = {};

   
   if(!formData.username.trim())
   {
      errors.username =
         "Username is required";
   }

   if(!formData.password.trim())
   {
      errors.password =
         "Password is required";
   }

   return errors;
};