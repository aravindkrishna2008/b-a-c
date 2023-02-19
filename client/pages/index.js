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

  const [text, setText] = useState("");
  const [alphabet, setAlphabet] = useState([]);

  const [file, setFile] = useState(null);
  const [data, setData] = useState("");

  useEffect(() => {
    setAlphabet(data.split(""));
  }, [data]);

  const start = () => {
    if (isBlocked) {
      console.log("Permission Denied");
    } else {
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
        "http://localhost:5001/upload-file/",
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
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={start} disabled={isRecording}>
          Record
        </button>
        <button onClick={stop} disabled={!isRecording}>
          Stop
        </button>
        <audio src={blobURL} controls="controls" />
      </header>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {alphabet.map((letter) => {
        if (letter.toLowerCase() === "a") {
          return (
            <Image
              src="/alphabet/a.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "b") {
          return (
            <Image
              src="/alphabet/b.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "c") {
          return (
            <Image
              src="/alphabet/c.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "d") {
          return (
            <Image
              src="/alphabet/d.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "e") {
          return (
            <Image
              src="/alphabet/e.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "f") {
          return (
            <Image
              src="/alphabet/f.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "g") {
          return (
            <Image
              src="/alphabet/g.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "h") {
          return (
            <Image
              src="/alphabet/h.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "i") {
          return (
            <Image
              src="/alphabet/i.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "j") {
          return (
            <Image
              src="/alphabet/j.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "k") {
          return (
            <Image
              src="/alphabet/k.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "l") {
          return (
            <Image
              src="/alphabet/l.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "m") {
          return (
            <Image
              src="/alphabet/m.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "n") {
          return (
            <Image
              src="/alphabet/n.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "o") {
          return (
            <Image
              src="/alphabet/o.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "p") {
          return (
            <Image
              src="/alphabet/p.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "q") {
          return (
            <Image
              src="/alphabet/q.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "r") {
          return (
            <Image
              src="/alphabet/r.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "s") {
          return (
            <Image
              src="/alphabet/s.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "t") {
          return (
            <Image
              src="/alphabet/t.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "u") {
          return (
            <Image
              src="/alphabet/u.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "v") {
          return (
            <Image
              src="/alphabet/v.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "w") {
          return (
            <Image
              src="/alphabet/w.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "x") {
          return (
            <Image
              src="/alphabet/x.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "y") {
          return (
            <Image
              src="/alphabet/y.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter.toLowerCase() === "z") {
          return (
            <Image
              src="/alphabet/z.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        }
      })}
    </div>
  );
};

export default App;
