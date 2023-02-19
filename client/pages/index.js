import MicRecorder from "mic-recorder-to-mp3";

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

  useEffect(() => {
    setAlphabet(text.split(""));
  }, [text]);

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

  const stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setBlobURL(blobURL);
        setIsRecording(false);
        console.log(blobURL);
      })
      .catch((e) => console.log(e));
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
        if (letter === "a") {
          return (
            <Image
              src="/alphabet/a.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "b") {
          return (
            <Image
              src="/alphabet/b.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "c") {
          return (
            <Image
              src="/alphabet/c.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "d") {
          return (
            <Image
              src="/alphabet/d.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "e") {
          return (
            <Image
              src="/alphabet/e.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "f") {
          return (
            <Image
              src="/alphabet/f.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "g") {
          return (
            <Image
              src="/alphabet/g.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "h") {
          return (
            <Image
              src="/alphabet/h.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "i") {
          return (
            <Image
              src="/alphabet/i.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "j") {
          return (
            <Image
              src="/alphabet/j.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "k") {
          return (
            <Image
              src="/alphabet/k.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "l") {
          return (
            <Image
              src="/alphabet/l.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "m") {
          return (
            <Image
              src="/alphabet/m.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "n") {
          return (
            <Image
              src="/alphabet/n.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "o") {
          return (
            <Image
              src="/alphabet/o.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "p") {
          return (
            <Image
              src="/alphabet/p.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "q") {
          return (
            <Image
              src="/alphabet/q.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "r") {
          return (
            <Image
              src="/alphabet/r.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "s") {
          return (
            <Image
              src="/alphabet/s.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "t") {
          return (
            <Image
              src="/alphabet/t.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "u") {
          return (
            <Image
              src="/alphabet/u.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "v") {
          return (
            <Image
              src="/alphabet/v.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "w") {
          return (
            <Image
              src="/alphabet/w.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "x") {
          return (
            <Image
              src="/alphabet/x.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "y") {
          return (
            <Image
              src="/alphabet/y.jpg"
              alt="logo"
              className="sponserImage"
              width={130}
              height={200}
            />
          );
        } else if (letter === "z") {
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
