import React, { useState } from "react";

export default function Contactform() {
  const defaultValue = {
    value: "",
    error: false,
  };
  const [email, setEmail] = useState({ ...defaultValue });
  const [name, setName] = useState({ ...defaultValue });
  const [message, setMessage] = useState({ ...defaultValue });

  const sendMail = () => {
    if (email.value === "" || name.value === "" || message.value === "") {
      if (email.value === "") {
        setEmail({ ...email, error: true });
      }

      if (name.value === "") {
        setName({ ...name, error: true });
      }

      if (message.value === "") {
        setMessage({ ...message, error: true });
      }

      return;
    }
    const Http = new XMLHttpRequest();
    const url = process.env.MAIL_URL;
    Http.open("POST", url);
    Http.setRequestHeader("Content-type", "application/json");
    var data = JSON.stringify({
      to: "info@qwebdesign.be",
      from: email.value,
      subject: `Mail via website van ${name.value}`,
      message: message.value,
    });
    Http.send(data);

    setEmail({ ...defaultValue });
    setName({ ...defaultValue });
    setMessage({ ...defaultValue });
  };

  return (
    <div>
      <div className="w-full my-4">
        <input
          type="text"
          placeholder="Email"
          className={`outline-none bg-secondary-light py-4 px-6 rounded-lg text-white w-full ${
            email.error && "ring-red-500 ring-2"
          }`}
          value={email.value}
          onChange={(e) => setEmail({ ...email, value: e.target.value })}
        />
      </div>
      <div className="w-full my-4">
        <input
          type="text"
          placeholder="Name"
          className={`outline-none bg-secondary-light py-4 px-6 rounded-lg text-white w-full ${
            name.error && "ring-red-500 ring-2"
          }`}
          value={name.value}
          onChange={(e) => setName({ ...name, value: e.target.value })}
        />
      </div>
      <div className="w-full my-4">
        <textarea
          placeholder="Message"
          rows="7"
          className={`outline-none resize-none bg-secondary-light py-4 px-6 rounded-lg text-white w-full ${
            message.error && "ring-red-500 ring-2"
          }`}
          value={message.value}
          onChange={(e) => setMessage({ ...message, value: e.target.value })}
        ></textarea>
      </div>
      <div className="cursor-pointer w-full py-4 rounded-lg bg-primary" onClick={sendMail}>
        <p className="text-white font-medium text-center">Send message</p>
      </div>
    </div>
  );
}
