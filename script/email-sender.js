import { personalData } from "../data/personal-data.js";


export default function emailSender() {
  const { publicKey, serviceId, templateId } = personalData;

  emailjs.init(publicKey);

  const form = document.querySelector("#contact-form");
  const submitBtn = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Collect form data
    const templateParams = {
      name: document.getElementById("name-input").value,
      email: document.getElementById("email-input").value,
      message: document.getElementById("message-input").value,
    };

    // Basic validation
    if (!templateParams.name || !templateParams.email || !templateParams.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    try {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
      submitBtn.style.opacity = '0.5'

      console.log("Sending email with data:", templateParams);

      // Send email
      const response = await emailjs.send(serviceId, templateId, templateParams);
      console.log("Email sent successfully:", response);

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      submitBtn.style.opacity = '1'
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
}
