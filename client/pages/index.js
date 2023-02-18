import MicRecorder from "mic-recorder-to-mp3";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

import { useState } from "react";

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);

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
    </div>
  );
};

export default App;
