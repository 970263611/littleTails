<template>
  <div ref="editor"></div>
</template>

<script>
import Muya from "../libs/muya/lib";
import TablePicker from "../libs/muya/lib/ui/tablePicker";
import QuickInsert from "../libs/muya/lib/ui/quickInsert";
import CodePicker from "../libs/muya/lib/ui/codePicker";
import EmojiPicker from "../libs/muya/lib/ui/emojiPicker";
import ImagePathPicker from "../libs/muya/lib/ui/imagePicker";
import ImageSelector from "../libs/muya/lib/ui/imageSelector";
import FormatPicker from "../libs/muya/lib/ui/formatPicker";
import FrontMenu from "../libs/muya/lib/ui/frontMenu";
import "../libs/muya/themes/default.css";
import "../assets/index.css";
import bus from '../components/bus'
export default {
  props:{
    // muyaData:{
    //   type: Object,
    //   default () {
    //     return {}
    //   }
    // }
  },
  data(){
    return{
      muyaData:{}
    }
  },
  mounted() {
    bus.$on('articleContent',params=>{
          // this.$q.loading.show()

// hiding in 2s
// this.timer = setTimeout(() => {
  // this.$q.loading.hide()
  this.editor.setMarkdown(params)

  // this.timer = void 0
// }, 1000)
      })
  },
  created() {
    this.$nextTick(() => {
      const ele = this.$refs.editor;

      Muya.use(TablePicker);
      Muya.use(QuickInsert);
      Muya.use(CodePicker);
      Muya.use(EmojiPicker);
      Muya.use(ImagePathPicker);
      Muya.use(ImageSelector);
      Muya.use(FormatPicker);
      Muya.use(FrontMenu);
      // bus.$on('articleContent',params=>{
      //     console.log(params);
      //     // bus.sendData = args
      // })
      this.editor = new Muya(ele, {
        markdown: "",
        imagePathPicker: (e) => {
          console.log(e);
        }
      });
//       this.editor.setMarkdown(`# 离线同步 — 没网也可以随时查看笔记.md你可以利用为知笔记随时随地记录和查看有价值的信息，所有数据在电脑、手机、平板、网页可通过同步保持一致。

// #### 有用信息同步到云端，安全又省事

// 你是不是偶尔会遇到下面一些情况：

// 1. 手机意外重启，写了好久的内容还没来得及保存？
// 2. 手机丢失，各种照片和信息没有备份，无法找回？芙蓉湖好烦人 今日进入
// 3. 更换手机或电脑，各种信息还需要来来回回 copy 才能继续使用？

// 无需费劲的备份或拷贝，利用为知笔记，数据都保存到云端，再也不用担心数据丢失。

// `)
      this.editor.on("change", (changes) => {
        console.log(changes);
        bus.$on('markdownChang',args=>{
          // console.log(params);
          bus.sendDataAll = args
        })
        bus.$emit('markdownChang',changes)
        this.muyaData = changes.markdown
        // 事件先注册$on 后触发$emit,否则监听不到
        bus.$on('muyaData',args=>{
          // console.log(params);
          bus.sendData = args
        })
        bus.$emit('muyaData', this.muyaData)
       
      });
      // const { container } = this.contentEditor = new Muya(ele, {
      //   // imagePathPicker: () => {
      //     // return new Promise((resolve, reject) => {
      //       // this.importImageFromLocal().then(paths => {
      //       //   debugLogger.Info(paths)
      //       //   resolve(paths ? paths[0] : '')
      //       // }).catch(err => {
      //       //   debugLogger.Error(err)
      //       //   reject(err)
      //       // })
      //     // })
      //   // },
      //   // imageAction: this.uploadImage
      // })
      // console.log(container);
    });
  },
}
</script>
