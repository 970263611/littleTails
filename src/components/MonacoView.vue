
<template>
  <div
    ref="container"
    class="monaco-editor"
    style="height:90%;margin-top:30px"
  ></div>
</template>

<script>
import * as monaco from 'monaco-editor'
import bus from '../components/bus'


export default {
  name: 'AcMonaco',
  inject: ['reload'],
  props: {
    opts: {
      type: Object,
      default () {
        return {}
      }
    },
    height: {
      type: Number,
      default: 300
    },
    isDiff: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 主要配置
      defaultOpts: {
        value: '', // 编辑器的值
        theme: '', // 编辑器主题：vs, hc-black, or vs-dark，更多选择详见官网
        roundedSelection: true, // 右侧不显示编辑器预览框
        autoIndent: true // 自动缩进
      },
      // 编辑器对象
      monacoEditor: {},
      oldValue: '',
      newValue: '',
      muyaData_:{}
    }
  },
  watch: {
    opts: {
      handler () {
        this.reload()
      },
      deep: true
    }
  },
  mounted () {
    this.init()
    this.shuru()
    // this.getData()
  },
  methods: {
    init () {
      // 初始化container的内容，销毁之前生成的编辑器
      this.$refs.container.innerHTML = ''
      // 生成编辑器配置
      let editorOptions = Object.assign(this.defaultOpts, this.opts)
      // if (!this.isDiff) {
        // 初始化编辑器实例
        this.monacoEditor = monaco.editor.create(this.$refs.container, editorOptions)
        monaco.editor.defineTheme('Memocast-Light', {
        base: 'vs',
        inherit: true,
        rules: [{ background: '#ffffff' }],
        colors: {
          // 相关颜色属性配置
          'editor.foreground': '#000000',
          'editor.background': '#ffffff',
          'editorCursor.foreground': '#FFCC00',
          'editor.lineHighlightBackground': '#0000FF20',
          'editorLineNumber.foreground': '#008800',
          'editor.selectionBackground': '#88000030',
          'editor.inactiveSelectionBackground': '#88000015'
        }
      })
      monaco.editor.setTheme('CodeSampleTheme')

        // 编辑器内容发生改变时触发
        this.monacoEditor.onDidChangeModelContent(() => {
          this.$emit('change', this.monacoEditor.getValue())
        })
      // } else {  开启代码比较
      //   this.oldValue = this.readLocalFile('./testCode1.js');
      //   this.newValue = this.readLocalFile('./testCode2.js');
      //   editorOptions.readOnly = true;
      //   editorOptions.language = 'javascript'
      //   // editorOptions.inlineHints = true;
      //   // 初始化编辑器实例
      //   this.monacoDiffInstance = monaco.editor.createDiffEditor(this.$refs['container'], editorOptions)
      //   this.monacoDiffInstance.setModel({
      //     original: monaco.editor.createModel(this.oldValue, editorOptions.language),
      //     modified: monaco.editor.createModel(this.newValue, editorOptions.language)
      //   })

      // }
    },
    upDateDiff (val) {
      this.monacoDiffInstance.updateOptions({
        renderSideBySide: !val
      });
    },
    // 供父组件调用手动获取值
    getVal () {
      return this.monacoEditor.getValue()
    },
    // 读取本地文件函数
    readLocalFile (fileUrl) {
      let xhr = null
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
      } else {
        // eslint-disable-next-line
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
      }
      const okStatus = document.location.protocol === 'file' ? 0 : 200
      xhr.open('GET', fileUrl, false)
      xhr.overrideMimeType('text/html;charset=utf-8')
      xhr.send(null)
      return (xhr.status === okStatus ? xhr.responseText : null)
    },
    // getData(){
    //   console.log(bus.sendData)

    // },
    shuru(){
      // bus.$on('muyaData', (params)=>{
      //   console.log(params);
      // })
      console.log(bus);
      // console.log(this.muyaData_);
      // console.log(this.opts);
        this.monacoEditor.setValue(bus.sendData)
    }
  }
}
</script>


