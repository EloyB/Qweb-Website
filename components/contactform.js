import React, { useState } from "react";

export default function Contactform() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = () => {
    console.log(process.env.MAIL_URL);
    const Http = new XMLHttpRequest();
    const url = process.env.MAIL_URL;
    Http.open("POST", url);
    Http.setRequestHeader("Content-type", "application/json");
    var data = JSON.stringify({
      to: "info@qwebdesign.be",
      from: email,
      subject: `Mail via website van ${name}`,
      message: message,
    });
    Http.send(data);

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div>
      <div className="w-full my-4">
        <input
          type="text"
          placeholder="Email"
          className="outline-none bg-secondary-light py-4 px-6 rounded-lg text-white w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full my-4">
        <input
          type="text"
          placeholder="Name"
          className="outline-none bg-secondary-light py-4 px-6 rounded-lg text-white w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="w-full my-4">
        <textarea
          placeholder="Message"
          rows="7"
          className="outline-none resize-none bg-secondary-light py-4 px-6 rounded-lg text-white w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="cursor-pointer w-full py-4 rounded-lg bg-primary" onClick={sendMail}>
        <p className="text-white font-medium text-center">Send message</p>
      </div>
    </div>
  );
}
