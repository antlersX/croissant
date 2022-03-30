<template>
  <div class="h-full w-full" ref="editor"></div>
</template>

<script>

import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {cpp} from "@codemirror/lang-cpp"

export default {
  name:"Editor",
  mounted(){
    let editor = new EditorView({
      state: EditorState.create({
        extensions: [basicSetup, cpp()]
      }),
      parent: this.$refs.editor
    })
  }
}
</script>