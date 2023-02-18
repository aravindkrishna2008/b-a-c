import MicRecorder from "mic-recorder-to-mp3";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

import Image from "next/image";

// Import alphabet images
import a from "../public/alphabet/a.jpg";
import b from "../public/alphabet/b.jpg";
import c from "../public/alphabet/c.jpg";
import d from "../public/alphabet/d.jpg";
import e from "../public/alphabet/e.jpg";
import f from "../public/alphabet/f.jpg";
import g from "../public/alphabet/g.jpg";
import h from "../public/alphabet/h.jpg";
import i from "../public/alphabet/i.jpg";
import j from "../public/alphabet/j.jpg";
import k from "../public/alphabet/k.jpg";
import l from "../public/alphabet/l.jpg";
import m from "../public/alphabet/m.jpg";
import n from "../public/alphabet/n.jpg";
import o from "../public/alphabet/o.jpg";
import p from "../public/alphabet/p.jpg";
import q from "../public/alphabet/q.jpg";
import r from "../public/alphabet/r.jpg";
import s from "../public/alphabet/s.jpg";
import t from "../public/alphabet/t.jpg";
import u from "../public/alphabet/u.jpg";
import v from "../public/alphabet/v.jpg";
import w from "../public/alphabet/w.jpg";
import x from "../public/alphabet/x.jpg";
import y from "../public/alphabet/y.jpg";
import z from "../public/alphabet/z.jpg";

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
        src="/apple.png"
        layout="fill"
        alt="logo"
        className="sponserImage"
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
