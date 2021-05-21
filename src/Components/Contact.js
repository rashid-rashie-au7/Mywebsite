import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import {useForm} from 'react-hook-form'
import Lottie from "react-lottie";
import animData from "../assets/emailSent.json";
import './Contact.css'

const Contact = () => {
    const [succesMsg,setSuccesMsg] = useState(false);
    const { register, handleSubmit,formState:{errors} } = useForm();
    const ServiceID ="service_xz0jl12";
    const templeteID = "template_cr1aqwv";
    const userID = "user_b3AfDBmqCKSx2xEP3a4cL";
    
    const defaultOptions ={
        loop: false,
        autoplay:true,
        animationData: animData
    }
    const onSubmit = (data,rslt) =>{
        sendEmail(
        ServiceID,
        templeteID,
        {
            name: data.name,
            mobile: data.mobile,
            email: data.email,
            subject:data.subject,
            descptn: data.descptn
        },
        userID
        )
        rslt.target.reset();
    }

    const sendEmail = (ServiceID, templeteID, variables,userID) => {
        emailjs.send(ServiceID, templeteID, variables,userID)
          .then(() => {
              setSuccesMsg(true);
          }).catch(err => console.log.error(`Something went wrong ${err}`));
      }


    return (
        <div className="contacts">
            <div className="text-center ">
                <h1>Contact Me</h1>
                <p>Please fill the below form to reach out me!</p>
                <>
                  { 
                  succesMsg ?
                  <>
                  <Lottie
                  options={defaultOptions}
                  height={100}
                  width={100}
                  isStopped={succesMsg}
                  />
                  <span className="success-msg">MSG Sent sucessfully!</span> </> : <span></span>}  
                </>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Name" 
                                    name="name"
                                   {...register("name",{required: "Please enter your name",})}
                                    />
                                <div className="line"></div>
                            </div>
                            <span className="error-msg">
                                {errors.name && errors.name.message}
                            </span>
                            <div className="text-center">
                                <input type="tel" className="form-control" placeholder="Mobile Number" name="mobile" 
                                {...register("mobile",{required: "Please enter your Mobile",})}
                                  />
                                <div className="line"></div>
                            </div>
                            <span className="error-msg">
                                {errors.mobile && errors.mobile.message}
                            </span>
                            <div className="text-center">
                                <input type="email" className="form-control" placeholder="Email" name="email"
                                {...register("email",{required: "Please enter your Email",})}
                                 />
                                <div className="line"></div>
                            </div>
                            <span className="error-msg">
                                {errors.email && errors.email.message}
                            </span>
                            <div className="text-center">
                                <input type="text" className="form-control" placeholder="Subject" name="subject"
                                {...register("subject",{required: "Please enter the Subject",})}
                                 />
                                <div className="line"></div>
                            </div>
                            <span className="error-msg">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <textarea type="text" className="form-control" placeholder="Please Enter your Message" name="descptn" 
                            {...register("descptn",{required: "Please Enter the Description",})}
                            />
                            <div className="line"></div>
                        </div> 
                        <span className="error-msg">
                                {errors.descptn && errors.descptn.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
            
            
        </div>
    )
}

export default Contact
