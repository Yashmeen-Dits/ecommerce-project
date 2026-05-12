import { Formik , Form, FieldArray } from "formik";
import * as Yup from "yup";
import profileSchema from "../../validation/profileSchema";
import CustomInput from "./CustomInput";
import "../../styles/profile.css";
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from "react-router-dom";

const ProfileForm=()=>
{
    const savedData=localStorage.getItem("profileData");
    const initialValues=savedData? JSON.parse(savedData):{

        personalInfo:
        {
        fullName:"",
        email:"",
        phone:"",
        },
    
        address:
        {
            houseNo:"",
            street:"",
            city:"",
            state:"",
            pincode:"",
        },
        shopping:
        {
        wishlistCount:"",
         coupons:"",
        },

        payments:
        {
             savedUpi: {
                upiId: "",
             },
             
             savedCards:[
            {
             cardNumber:""
              }
             ],

             giftCards:
             {
                amount:"",
             },

        },

    };

    const handleSubmit=(values)=>
    {
        localStorage.setItem("profileData",
        JSON.stringify(values));
        console.log(values);
        toast.success("Profile Saved Succcessfully");

    };
    return(
        <div className="profile-form-container">

            <div className="profile-top">
                <Link 
                to="/home"
                className="home-btn">
                    Home
                </Link>
                
                
                </div>
            <h1>User Profile</h1>
            <Formik 
            initialValues={initialValues}
            validationSchema={profileSchema}
            onSubmit={handleSubmit}
            >
                <Form className="profile-form">


                    <div className="Form-section">
                        <h2>Personal Information</h2>
                        <br></br>
                       <CustomInput
                       label="Full Name"
                       type="text"
                       name="personalInfo.fullName"
                       placeholder="Enter full name"
                       />


                       <CustomInput
                          label="Email"
                          type="email"
                          name="personalInfo.email"
                          placeholder="Enter email"
                          />

                           

                            <CustomInput
                                label="Phone Number"
                                     type="text"
                                 name="personalInfo.phone"
                               placeholder="Enter phone number"
                                  />


                            <CustomInput
                            label="City"
                             type="text"
                             name="address.city"
                            placeholder="Enter city"
                             />

                             <CustomInput
                            label="State"
                             type="text"
                             name="address.state"
                            placeholder="Enter state"
                             />

                           

                            <CustomInput
                              label="Pincode"
                            type="text"
                             name="address.pincode"
                             placeholder="Enter pincode"
                               />
                    </div>

                    <div className="form-section">
                        <h2>Shopping Details</h2>

                         <CustomInput
                              label="Wishlist Items"
                              type="number"
                             name="shopping.wishlistCount"
                             placeholder="Wishlist count"
                             min="0"
                               />
                       

                                 <CustomInput
                                    label="Available Coupons"
                                    type="text"
                                    name="shopping.coupons"
                                     placeholder="Enter coupons"
                                     />

                    </div>

                    <div className="form-section">
                        <h2>Saved UPI</h2>
                         <CustomInput
                           label="UPI ID"
                             type="text"
                             name="payments.savedUpi.upiId"
                              placeholder="Enter UPI ID"
                              />
                    </div>

                    <div className="form-section">
            <h2>Saved Card</h2>

           <FieldArray name="payments.savedCards">

          {({ push, remove, form }) => (

      <div>

        {
          form.values.payments.savedCards.map(
            (card, index) => (

              <div
                key={index}
                className="card-box"
              >

                <CustomInput
                  label={`Card ${index + 1}`}
                  type="text"
                  name={`payments.savedCards.${index}.cardNumber`}
                  placeholder="Enter card number"
                />

                <button
                  type="button"
                  onClick={() => remove(index)}
                >
                  Remove Card
                </button>

              </div>

            )
          )
        }

        <button
          type="button"
          className="add-card-btn"
          onClick={() =>
            push({
              cardNumber: "",
            })
          }
        >
          Add Card
        </button>

      </div>

    )}

  </FieldArray>
                
            
          </div>


          <div className="form-section">
            <h2>Gift Card</h2>

            <CustomInput
                label="Gift Card Amount"
                type="number"
                name="payments.giftCards.amount"
                placeholder="Enter amount"
                min="0"
               />
          </div>
           <button type="submit" className="submit-btn">
            Save Profile
          </button>

                </Form>
            </Formik>
            <ToastContainer/>
        </div>
    )

};


export default ProfileForm;