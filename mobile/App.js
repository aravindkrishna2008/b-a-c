import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from "react-native-audio-recorder-player";
import { Card } from "react-native-paper";
import React from "react";

export default function App() {
  const audioRecorderPlayer = new AudioRecorderPlayer();
  const [recordSecs, setRecordSecs] = React.useState(0);
  const [recordTime, setRecordTime] = React.useState(0);
  const [currentPositionSec, setCurrentPositionSec] = React.useState(0);
  const [currentDurationSec, setCurrentDurationSec] = React.useState(0);
  const [playTime, setPlayTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener((e) => {
      setRecordSecs(e.current_position);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.current_position)));
      return;
    });
    console.log(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    console.log(result);
  };

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
