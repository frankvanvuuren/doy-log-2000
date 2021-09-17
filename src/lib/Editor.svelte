<script>
  import {CodeJar} from "@novacbn/svelte-codejar";
  import {activeTab, logs} from '../store';
  import easyHighlighter from './easy-highlighter.js';

  export let highlight;
  export let show;
  export let tab;
</script>

<CodeJar
  style="display: {show ? "block" : "none" }; border: 1px dashed white; background-color: black; color: white; height: 600px;"
  spellcheck={false}
  syntax="ban-log"
  tab={"\t"}
  {highlight}
  on:change={(v) => $logs[tab] = v.detail.value}
/>
