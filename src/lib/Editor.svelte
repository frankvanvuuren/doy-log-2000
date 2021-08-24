<script>
  import {CodeJar} from 'svelte-codejar'
  import {activeTab, logs, editor} from '../store'

  editor.subscribe(editor => {
    $logs[$activeTab] = editor
  })

  activeTab.subscribe(tab => {
    $editor = $logs[tab]
  })
</script>

<CodeJar
  style="border: 1px dashed white; background-color: black; color: white; height: 600px;"
  spellcheck={false}
  tab={"\t"}
  bind:value={$editor}
/>
