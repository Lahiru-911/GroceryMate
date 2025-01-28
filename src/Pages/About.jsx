import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { useEffect, useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact_phone: "",
    email: "",
    idea: "",
    services: [],
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false); // New state for checkbox error
  const variants = ["flat", "bordered", "underlined", "faded"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCheckboxChange = (values) => {
    setFormData((prevData) => ({
      ...prevData,
      services: values,
    }));
    // Reset checkbox error state if any checkbox is checked
    if (values.length > 0) {
      setCheckboxError(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if at least one checkbox is selected
    if (formData.services.length === 0) {
      setCheckboxError(true);
      return; // Prevent form submission if no checkbox is selected
    }

    setIsSubmitting(true);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(e.target), // Send the form data as FormData
    });

    if (response.ok) {
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        contact_phone: "",
        email: "",
        idea: "",
        services: [],
      });
    } else {
      setSuccessMessage(
        "There was an error sending your message. Please try again."
      );
    }

    setIsSubmitting(false);
  };

  const cardData = [
    {
      title: "Innovation",
      content:
        "We are committed to leveraging the latest technologies to stay ahead of the curve, constantly improving our platform to provide smarter and more efficient services.",
    },
    {
      title: "Integrity",
      content:
        "Integrity is the cornerstone of our relationships. We conduct business with honesty, transparency, and ethical conduct, earning the trust and respect of our clients",
    },
    {
      title: "Customer Centricity",
      content:
        "We prioritize our users' needs by offering intuitive solutions that save time, reduce waste, and simplify their daily routines.",
    },
    {
      title: "Sustainability",
      content:
        "At GroceryMate, we strive to create a sustainable future by promoting mindful consumption and reducing food waste through intelligent grocery management.",
    },
  ];
  return (
    <>
      <section className="px-6">
        <Card className="w-full h-auto bg-[#FAFAFA] p-2 my-2 font-inter">
          {/* Main Box */}
          <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-light sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                  Hey! Tell us all the
                  <br />
                  <span className="text-[#0081FB]">things</span>
                </h1>
                <p className="mb-4 text-xs font-normal sm:text-sm lg:text-base">
                  Give us a few details and we’ll offer the best solution.
                </p>
              </div>
              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-3 flex flex-col"
                encType="multipart/form-data" // Ensure file upload works
              >
                {/* Web3Forms Hidden Fields */}
                <input
                  type="hidden"
                  name="access_key"
                  value="49dd2acf-b7e1-4e06-8fa1-1354c0c2c7f8"
                />
                <input type="hidden" name="subject" value="Contact Form" />
                <input
                  type="hidden"
                  name="from_name"
                  value="Residue Solutions"
                />
                {/* Input Fields */}
                <Input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  label="First Name"
                  variant={variants}
                  required
                />
                <Input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  label="Last Name"
                  variant={variants}
                  required
                />
                <Input
                  type="tel"
                  name="contact_phone"
                  value={formData.contact_phone}
                  onChange={handleInputChange}
                  label="Contact Phone"
                  variant={variants}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  label="E-mail"
                  variant={variants}
                  required
                />
                <Textarea
                  name="idea"
                  value={formData.idea}
                  onChange={handleInputChange}
                  maxRows={3}
                  label="Let’s talk about your idea"
                  required
                />
                {/* Checkbox Group */}
                <CheckboxGroup
                  label="Services Needed"
                  className="m-3"
                  name="services[]"
                  onChange={handleCheckboxChange}
                >
                  <Checkbox
                    value="web application"
                    checked={formData.services.includes("web application")}
                  >
                    Building a website/web application
                  </Checkbox>
                  <Checkbox
                    value="IT services"
                    checked={formData.services.includes("IT services")}
                  >
                    IT services
                  </Checkbox>
                  <Checkbox
                    value="Cloud services"
                    checked={formData.services.includes("Cloud services")}
                  >
                    Cloud services
                  </Checkbox>
                  <Checkbox
                    value="Other"
                    checked={formData.services.includes("Other")}
                  >
                    Other
                  </Checkbox>
                </CheckboxGroup>
                {/* Error Message for Checkbox */}
                {checkboxError && (
                  <p className="text-red-500 text-sm">
                    Please select at least one service.
                  </p>
                )}
                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full px-4 py-2 mt-6 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "SUBMIT"}
                </Button>
                {/* Success Message */}
                {successMessage && (
                  <p className="mt-4 text-green-500 text-center">
                    {successMessage}
                  </p>
                )}
              </form>
            </div>
            {/* Image Box */}
            <div className="hidden sm:block">
              <img
                src="/home/k1.webp"
                alt="GroceryMate"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Transforming Section */}
      <div className="flex items-center justify-center ">
        <div className="w-5/6 h-fit bg-white/60 shadow-2xl ring-1 ring-gray-900/10 rounded-3xl m-2 md:m-3 xl:m-5 flex flex-col items-center ">
          <h1 className="text-black font-normal text-center m-2 p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
            Transforming Grocery Shopping
          </h1>
          <p className="text-gray-700 text-center font-light w-5/6 m-2 p-2 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ">
            At GroceryMate, we are redefining the way people manage their
            household groceries. Gone are the days of last-minute shopping trips
            or forgotten items. Our platform combines innovation with
            simplicity, delivering a seamless experience for tracking, managing,
            and automating your grocery needs. By predicting your consumption
            patterns and ensuring timely restocking, GroceryMate transforms
            grocery shopping from a chore into an effortless part of your daily
            life.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="flex items-center justify-center ">
        <div className="w-5/6 h-fit bg-white/60 shadow-2xl ring-1 ring-gray-900/10 rounded-3xl m-2 md:m-3 xl:m-5 flex flex-col items-center ">
          <h1 className="text-black font-normal text-center m-2 p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
            Brief description about the platform
          </h1>
          <p className="text-gray-700 text-center font-light w-5/6 m-2 p-2 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ">
            GroceryMate is a cutting-edge platform designed to revolutionize
            grocery management. Powered by advanced machine learning, real-time
            tracking, and smart analytics, our system predicts when your
            groceries will run out and automates the reordering process. Whether
            you're managing essentials for your family or planning ahead,
            GroceryMate ensures that your kitchen is always stocked and your
            shopping is stress-free. With user-friendly features and a focus on
            convenience, we aim to make your life easier while reducing food
            waste and saving valuable time.
          </p>

          <h1 className="text-black font-normal text-center  p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
            Mission & Vision
          </h1>
          <p className="text-gray-700 text-center font-light w-5/6 m-2 p-2 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ">
            Our mission is to simplify everyday life by providing smarter
            grocery solutions that eliminate the hassle of shopping while
            promoting sustainability. Our vision is to be the world’s most
            trusted grocery management platform, setting new standards for
            convenience, reliability, and sustainability in modern households.
          </p>
        </div>
      </div>

      {/*  Core Values */}
      <div>
        <h1 className="text-black font-normal text-center m-2 p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
          Core Values
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center m-5 text-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="max-w-[400px] max-h-[700px] w-full relative rounded-3xl bg-white/60 shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 ease-in-out hover:scale-105 z-10"
            >
              <h1 className="uppercase font-medium m-3 lg:m-5 mt-5 text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl text-center leading-none">
                {card.title}
              </h1>
              <p className="text-gray-700 text-justify m-6 sm:m-3 md:m-4 sm:mx-8 md:mx-10 text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
