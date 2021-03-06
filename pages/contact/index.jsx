import { useRef } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import SEO from "@/components/SEO";

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = async () => {
    return fetch("https://formspree.io/f/xoqrwvdz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      }),
    });
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
    <>
      <SEO
        title="Hussein Hassan | Contact me"
        description="My work varies between management systems, Landing pages, E-Commerce sites, Mobile & Desktop apps.."
        keywords="Software development, react, nodejs, prisma, planetscale, management systems, CMS, blogs, apps, react native, tailwindcss, authentication, backend, frontend, mobile, desktop, serverless."
      />
      <section>
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.9 }}
          className="mb-4 text-xl font-bold text-black"
        >
          Consultancy, capability or your next project, I'm happy to chat.
        </motion.h2>
        <form className="mt-3" onSubmit={onSubmit}>
          <div className=" relative">
            <label htmlFor="name" className="text-gray-700">
              Name
            </label>
            <input
              ref={nameRef}
              type="text"
              className=" mt-1 w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm hover:border-blue-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className=" relative mt-3">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              ref={emailRef}
              type="text"
              aria-describedby="emailHelp"
              required
              id="email"
              className=" mt-1 w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm hover:border-blue-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              placeholder="Your email"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="message" className="text-gray-700">
              Message
            </label>
            <textarea
              ref={messageRef}
              required
              className="mt-1 w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 hover:border-blue-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </>
  );
}
