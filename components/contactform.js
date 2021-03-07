import React, { useState } from "react";

export default function Contactform() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = () => {
    const Http = new XMLHttpRequest();
    const url =
      "https://prod-61.westeurope.logic.azure.com:443/workflows/81b128fb062243518c2971242f211a0c/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=d__qChh5wtEOQKVcgBv4M91fXLeALnm4hHoOQarzW9Y";
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
