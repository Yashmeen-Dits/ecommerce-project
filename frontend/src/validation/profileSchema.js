import * as Yup from "yup";

const profileSchema=Yup.object({
    personalInfo:Yup.object({
        fullName:Yup.string().required("Full name is required"),

        email:Yup.string().email("Invalid email").required("Email is required"),

        phone:Yup.string().min(10,"Phone must be 10 digits").required("Phone number is required"), 

    }),

    address:Yup.object({
        city:Yup.string().required("City is required"),
        state: Yup.string().required("State is required"),
         pincode: Yup.string() .min(6, "Pincode must be 6 digits")  .required("Pincode is required"),
    }),

     payments: Yup.object({
    savedUpi: Yup.object({
      upiId: Yup.string()
        .required("UPI ID is required"),

    }),


    savedCards: Yup.array().of(
        Yup.object({
            cardNumber :Yup.string().min(16,"Card number must be 16 digits")
            .required("Card number is required"),
        })
    ),

    giftCards: Yup.object({
      amount: Yup.number()
        .required("Gift card amount is required"),
    }),


}),
});
export default profileSchema;