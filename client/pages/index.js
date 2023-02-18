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
      <Image
        src="/alphabet/a.jpg"
        alt="logo"
        className="sponserImage"
        width={300}
        height={300}
      />
      {alphabet.map((letter) => {
        if (letter === "a") {
          return <img src={a} />;
        } else if (letter === "b") {
          return <img src={b} />;
        } else if (letter === "c") {
          return <img src={c} />;
        } else if (letter === "d") {
          return <img src={d} />;
        } else if (letter === "e") {
          return <img src={e} />;
        }
      })}
    </div>
  );
};

export default App;
