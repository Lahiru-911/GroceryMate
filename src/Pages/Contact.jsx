import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { useEffect, useState } from "react";

const Contact = () => {
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

  return (
    <>
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
              <input type="hidden" name="from_name" value="Residue Solutions" />
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
                color="primary"
                className="w-full"
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
          {/* Map Box */}
          <div className="hidden sm:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.202952738427!2d79.858473!3d6.884526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b001c3e29e3%3A0xe6643f6b87d2e1ed!2sResidue%20Solution%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1729247413914!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Card>
      
    </>
  );
};

export default Contact;
