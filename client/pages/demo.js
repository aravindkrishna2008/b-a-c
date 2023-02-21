import MicRecorder from "mic-recorder-to-mp3";
import axios from "axios";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

import Image from "next/image";

// Import alphabet images

import { useEffect, useState } from "react";

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);

  const [text, setText] = useState([]);
  const [alphabet, setAlphabet] = useState([]);

  const [file, setFile] = useState(null);
  const [data, setData] = useState("");

  useEffect(() => {
    setAlphabet(data.split(""));
    history();
  }, [data]);

  const start = () => {
    if (isBlocked) {
      console.log("Permission Denied");
    } else {
      setData("");
      Mp3Recorder.start()
        .then(() => {
          setIsRecording(true);
        })
        .catch((e) => console.error(e));
    }
  };

  // create function to send file to server using form data
  const sendFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post(
        "http://6acd-24-5-37-45.ngrok.io/upload-file/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // const { fileName, filePath } = res.data;
      // setFile({ fileName, filePath });
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const history = () => {
    // get all the past text from the server using fetch
    fetch("http://6acd-24-5-37-45.ngrok.io/translations/")
      .then((response) => response.json())
      .then((data) => {
        // setText(data);
        console.log(data);
        setText(data.map((item) => item.text));
      })
      .catch((error) => console.error(error));
  };

  const stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        // save the mp3 file
        const file = new File(buffer, "me-at-thevoice.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        });

        const player = new Audio(URL.createObjectURL(file));
        // send file to server
        sendFile(file);
        console.log(player);
        setBlobURL(blobURL);
        setIsRecording(false);
        console.log(blobURL);
      })
      .catch((e) => console.log(e));
    // save the mp3 file
  };

  const renderTextArray = () => {
    return text.map((text, key) => {
      return (
        // <li key={text._id}>
        <button
          key={key}
          onClick={() => {
            setData(text);
          }}
          className="history-item"
        >
          <p className="text-in-button">{text.substring(0, 30)}</p>
        </button>
        // </li>
      );
    });
  };
  return (
    <div className="app">
      <div className="app-header">
        <div className="controls">
          <button
            className="glow-on-hover"
            onClick={start}
            disabled={isRecording}
          >
            <p className="text-in-button">Record</p>
          </button>
          <button
            className="glow-on-hover"
            style={{ backgroundColor: "red" }}
            onClick={stop}
            disabled={!isRecording}
          >
            <p className="text-in-button">Stop</p>
          </button>
          {isRecording ? (
            <div className="blink_me"></div>
          ) : (
            <div>Waiting to start...</div>
          )}{" "}
        </div>

        <ul className="history-page">
          <h2>History</h2>
          {renderTextArray()}
        </ul>
      </div>
      <ul className="sign-language">
        {alphabet.map((letter, index) => {
          if (letter.toLowerCase() === "a") {
            return (
              <Image
                key={index}
                src="/alphabet/a.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "b") {
            return (
              <Image
                key={index}
                src="/alphabet/b.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "c") {
            return (
              <Image
                key={index}
                src="/alphabet/c.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "d") {
            return (
              <Image
                key={index}
                src="/alphabet/d.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "e") {
            return (
              <Image
                key={index}
                src="/alphabet/e.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "f") {
            return (
              <Image
                key={index}
                src="/alphabet/f.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "g") {
            return (
              <Image
                key={index}
                src="/alphabet/g.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "h") {
            return (
              <Image
                key={index}
                src="/alphabet/h.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "i") {
            return (
              <Image
                key={index}
                src="/alphabet/i.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "j") {
            return (
              <Image
                key={index}
                src="/alphabet/j.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "k") {
            return (
              <Image
                key={index}
                src="/alphabet/k.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "l") {
            return (
              <Image
                key={index}
                src="/alphabet/l.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "m") {
            return (
              <Image
                key={index}
                src="/alphabet/m.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "n") {
            return (
              <Image
                key={index}
                src="/alphabet/n.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "o") {
            return (
              <Image
                key={index}
                src="/alphabet/o.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "p") {
            return (
              <Image
                key={index}
                src="/alphabet/p.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "q") {
            return (
              <Image
                key={index}
                src="/alphabet/q.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "r") {
            return (
              <Image
                key={index}
                src="/alphabet/r.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "s") {
            return (
              <Image
                key={index}
                src="/alphabet/s.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "t") {
            return (
              <Image
                key={index}
                src="/alphabet/t.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "u") {
            return (
              <Image
                key={index}
                src="/alphabet/u.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "v") {
            return (
              <Image
                key={index}
                src="/alphabet/v.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "w") {
            return (
              <Image
                key={index}
                src="/alphabet/w.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "x") {
            return (
              <Image
                key={index}
                src="/alphabet/x.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "y") {
            return (
              <Image
                key={index}
                src="/alphabet/y.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === "z") {
            return (
              <Image
                key={index}
                src="/alphabet/z.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          } else if (letter.toLowerCase() === " ") {
            return (
              <Image
                key={index}
                src="/alphabet/space.jpg"
                alt="logo"
                className="asl-image"
                width={130}
                height={200}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

export default App;
