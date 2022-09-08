import { GoDeviceMobile } from "react-icons/go";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xcgw1jc",
        "template_figw5de",
        formRef.current,
        "bM-6L9IBwqN_vdjZj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-screen ">
      <div className="flex">
        <div className="w-1/2 pl-36 h-screen bg-gray-300">
          <div className=" ">
            <p className="font-semibold  text-2xl">Contact</p>
            <p className="font-bold text-6xl">Let's Discuss Your Project</p>
          </div>
          <div className="mt-16">
            <div className="flex mb-10">
              <GoDeviceMobile className="w-8 h-8 mr-5" />
              <p>+62 856 9464 0366</p>
            </div>
            <div className="flex mb-10">
              <AiOutlineMail className="w-8 h-8 mr-5" />
              <p>andhikapras15@gmail.com</p>
            </div>
            <div className="flex">
              <AiFillLinkedin className="w-8 h-8 mr-5" />
              <p>https://www.linkedin.com/in/andhika-prasetyo</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-14">
          <p className="mb-5">
            <b className="text-xl mr-2">What's Your Story?</b>Get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="mr-5 border-2 border-gray-300"
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="border-2 border-gray-300"
            />
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              className=" border-2 border-gray-300"
            />
            <textarea
              rows="5"
              placeholder="message"
              name="message"
              className=" border-2 border-gray-300"
            />
            <button className="bg-gray-300 mr-3">Submit</button>
            {done && "Thank you for your email....."}
          </form>
        </div>
      </div>
      <div className=" h-8 text-sm font-light p-2 bg-gray-300 text-center">
        {" "}
        Design By Andhika Prasetyo
      </div>
    </div>
  );
};

export default Contact;
