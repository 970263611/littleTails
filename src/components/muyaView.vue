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

      this.editor = new Muya(ele, {
        markdown: "在这里编辑...",
        imagePathPicker: (e) => {
          console.log(e);
        }
      });
      this.editor.on("change", (changes) => {
        console.log(changes);
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
