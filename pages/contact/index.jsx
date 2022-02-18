import { useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = async () => {
    return emailjs.sendForm(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      form.current,
      process.env.USER_ID
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const myPromise = sendEmail();

    toast.promise(myPromise, {
      loading: "Sending...",
      success: "Your message was sent successfully! ",
      error: "An error occured, please try again..",
    });

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <section className="mt-8">
      <form ref={form} className="mt-3 md:w-[40vw]" onSubmit={onSubmit}>
        <div class=" relative">
          <label for="name" class="text-gray-700">
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            class=" mt-1 w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm hover:border-blue-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>

        <div class=" relative mt-3">
          <label for="email" class="text-gray-700">
            Email
          </label>
          <input
            ref={emailRef}
            type="text"
            aria-describedby="emailHelp"
            required
            id="email"
            class=" mt-1 w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm hover:border-blue-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            placeholder="Your email"
          />
        </div>
        <div className="mt-3">
          <label for="message" class="text-gray-700">
            Message
          </label>
          <textarea
            ref={messageRef}
            required
            class="mt-1 w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 hover:border-blue-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            placeholder="Your message"
            name="message"
            rows="3"
            cols="40"
            style={{ resize: "none" }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-3 w-full rounded-lg border bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-100"
        >
          Send
        </button>
      </form>
   
    </section>
  );
}
