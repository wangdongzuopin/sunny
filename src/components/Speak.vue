<template>
  <div class="center">
    <div>
      <input class="input" v-model="input" type="text" />
    </div>
    <div>
      <wd-Button @click.native="playVoicehhh">你写什么我说什么</wd-Button>
      <!-- <wd-Button @click.native="pause">暂停</wd-Button>
      <wd-Button @click.native="resume">继续</wd-Button> -->
    </div>
    <div class="text">
      <span>{{ msg }}</span>
    </div>
  </div>
</template>

<script>
const synth = window.speechSynthesis;
const msg = new SpeechSynthesisUtterance('你说嘿，我说嘿，大家一起嘿嘿嘿');
window.speechSynthesis.speak(msg);
export default {
  data() {
    return {
      input: "",
      msg: "",
    };
  },
  methods: {
    playVoicehhh() {
      if (this.input) {
        console.log(typeof this.input);
        console.log(this.input instanceof String);
        if ([] instanceof Number) {
          this.input.split("").join(" ");
        }
        this.handleSpeak(this.input); // 传入需要播放的文字
      }
    },
    // 语音播报的函数
    handleSpeak(text) {
      msg.text = text; // 文字内容: 小朋友，你是否有很多问号
      msg.lang = "zh-CN"; // 使用的语言:中文
      msg.volume = 1; // 声音音量：1
      msg.rate = 1; // 语速：1
      msg.pitch = 1; // 音高：1
      synth.speak(msg); // 播放
      this.msg = this.input;
      // setTimeout(() => {
      //   this.msg = "";
      // }, 2000);
    },
    // pause(){
    //   synth.pause()
    // },
    // resume(){synth.resume()},
    // 语音停止
    handleStop(e) {
      msg.text = e;
      msg.lang = "zh-CN";
      synth.cancel(msg);
    },
  },
};
</script>