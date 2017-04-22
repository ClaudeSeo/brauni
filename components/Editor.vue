<template>
  <div class="contents">
    <div class="editor col float-left">
      <div class="header">
        <p class="title">Editor <span class="float-right save" @click="saveAs">Save as</span></p>
      </div>
      <textarea ref='codemirror'></textarea>
    </div>
    <div class="preview col float-left">
      <div class="header bl-0">
        <p class="title">Preview</p>
      </div>
      <div class="preview-content" v-html="preview"></div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import FileSaver from 'file-saver'
import '~/assets/css/github.css'

if (process.BROWSER_BUILD) {
  window.CodeMirror = require('codemirror/lib/codemirror.js')
  require('codemirror/lib/codemirror.css')
  require('codemirror/mode/meta')
  require('codemirror/mode/markdown/markdown.js')
  require('codemirror/addon/selection/active-line.js')
  require('codemirror/addon/edit/matchbrackets.js')
  require('codemirror/addon/comment/comment.js')
  require('codemirror/addon/dialog/dialog.js')
  require('codemirror/addon/dialog/dialog.css')
  require('codemirror/addon/search/searchcursor.js')
  require('codemirror/addon/search/search.js')
  require('codemirror/keymap/sublime.js')
}

export default {
  name: 'editor',
  data () {
    return {
      code: '# Brauni\nmarkdown editor with vuejs & nuxt',
      preview: '',
      editorOptions: {
        tabSize: 4,
        mode: 'text/x-markdown',
        keyMap: 'sublime',
        line: true,
        lineNumbers: true,
        autoCloseBrackets: true,
        styleActiveLine: true
      }
    }
  },
  mounted () {
    this.preview = marked(this.code)
    this.editor = window.CodeMirror.fromTextArea(this.$refs.codemirror, this.editorOptions)
    this.editor.setValue(this.code)
    this.editor.on('change', (cm) => {
      this.code = cm.getValue()
      this.preview = marked(this.code)
    })
  },
  methods: {
    saveAs () {
      const blob = new Blob([this.code], {type: 'text/plain;charset=utf-8'})
      FileSaver.saveAs(blob, this.$store.state.fileName)
    }
  }
}
</script>
<style scoped>
textarea {
  display: none;
}
.col {
  width: 50%;
}
.save {
  font-size: 0.7rem;
  cursor: pointer;
}
.editor {
  height: calc(100vh - 172px);
}
.preview-content {
  padding: 15px;
}
@media screen and (max-width: 768px) {
  .col {
    width: 100%;
  }
  .editor {
    height: 100%;
  }
  .preview {
    margin-top: 1rem;
  }
  .preview-content {
    padding: 0 15px;
  }
}
</style>
