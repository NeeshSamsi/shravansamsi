import { NextPage } from "next";
import { useState, MouseEvent } from "react";
import Head from "next/head";
import Image from "next/image";

import { useFormspark } from "@formspark/use-formspark";

import { Listbox } from "@headlessui/react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button, { ButtonTypes } from "../components/Button";
import Caret from "../components/Icons/Caret";
import Send from "../components/Icons/Send";
import HeadComponent from "../components/HeadComponent";

const Contact: NextPage = () => {
  let [submit, submitting] = useFormspark({
    formId: "ikSfEvMG",
  });

  const [sent, setSent] = useState(false);

  const options = [
    { id: 1, name: "I just want to get in touch" },
    { id: 2, name: "I want to take lessons" },
    { id: 3, name: "I want to work with you" },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(options[0]);
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setSelectedTopic(options[0]);
    setMessage("");

    await submit({
      topic: selectedTopic.name,
      name,
      email,
      message,
      _email: {
        subject: `Contact Form submission - ${name} - ${selectedTopic.name}`,
        from: email,
      },
    });

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 10000);
  };

  return (
    <>
      <HeadComponent
        title="Contact - Shravan Samsi"
        description=""
        imageUrl=""
        path="/"
      />

      <Navbar />

      <main className="px-4 pt-16 pb-24 sm:px-8 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
        <div className="flex flex-col justify-center gap-10 md:flex-row md:gap-0 xl:justify-between">
          <div className="flex w-full flex-col gap-12 xl:w-1/2 xl:gap-16 2xl:w-2/5">
            <h1 className="font-smallcaps rounded-lg bg-accent py-8 text-center font-serif text-6xl font-bold text-dark xl:text-9xl">
              Contact
            </h1>

            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="name"
                  className="text-lg md:text-xl xl:text-3xl"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="rounded border border-light bg-dark py-3 px-4 text-base ring-light transition-all placeholder:font-extralight placeholder:text-light hover:bg-dark-off focus:ring-2 md:text-lg xl:text-2xl"
                  id="name"
                  name="name"
                  placeholder="Enter your name here"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-col gap-4">
                <label
                  htmlFor="email"
                  className="text-lg md:text-xl xl:text-3xl"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="rounded border border-light bg-dark py-3 px-4 text-base ring-light transition-all placeholder:font-extralight placeholder:text-light hover:bg-dark-off focus:ring-2 md:text-lg xl:text-2xl"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-lg md:text-xl xl:text-3xl">
                  What&apos;s up?
                </label>

                <Listbox
                  value={selectedTopic}
                  onChange={setSelectedTopic}
                  name="topic"
                >
                  <Listbox.Button className="ietms-center flex justify-between rounded border border-light py-3 px-4 text-left text-base font-extralight text-light hover:bg-dark-off md:text-lg xl:text-2xl">
                    <span>{selectedTopic.name}</span>
                    <span className="w-8 rotate-90 transition-all ui-open:-rotate-90 xl:w-10">
                      <Caret />
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="rounded border border-light">
                    {options.map((option) => (
                      <Listbox.Option
                        key={option.id}
                        className="cursor-pointer border-b border-light py-3  px-4 text-left text-2xl font-extralight text-light transition-all hover:bg-dark-off ui-selected:bg-dark-off"
                        value={option}
                      >
                        {option.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>

              <div className="flex flex-col gap-4 ">
                <label
                  htmlFor="message"
                  className="text-lg md:text-xl xl:text-3xl"
                >
                  Message
                </label>
                <textarea
                  rows={6}
                  className="rounded border border-light bg-dark py-3 px-4 text-base ring-light transition-all placeholder:font-extralight placeholder:text-light hover:bg-dark-off focus:ring-2 md:text-lg xl:text-2xl"
                  id="message"
                  name="message"
                  placeholder="Enter your message here ..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>

              <div className="text-xl xl:text-2xl">
                <Button
                  text="Send"
                  type={ButtonTypes.Primary}
                  icon={<Send />}
                  clickHandler={handleFormSubmit}
                  submitting={submitting}
                />
              </div>

              {sent && !submitting ? (
                <p className="text-sm font-medium sm:text-lg md:text-xl xl:text-2xl">
                  Thank you for reaching out! I&apos;ll get back to you when I
                  can
                </p>
              ) : (
                ""
              )}
            </form>
          </div>

          <div className="hidden w-2/5 xl:block 2xl:w-1/2">
            <div className="relative -z-10 aspect-square w-full rounded-full bg-light">
              <Image
                className="h-full w-full"
                src="/contact.png"
                alt="Shravan Samsi"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
