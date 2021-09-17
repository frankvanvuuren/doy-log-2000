<script>
  import doy from './assets/doy.gif'
  import logo from './assets/text.gif'
  import lls from './assets/lls.gif'
  import mhp from './assets/mhp.gif'
  import rake from './assets/rake.gif'
  import Editor from './lib/Editor.svelte'
  import  Tabs from './lib/Tabs.svelte'
  import  Chart from './lib/Chart.svelte'
  import {version} from '../package.json'
  import easyHighlighter from './lib/easy-highlighter.js'
  import 'bulma'
  import {activeTab} from './store';

  let euKickShow = true
  let euBanShow = false
  let usKickShow = false
  let usBanShow  = false

  activeTab.subscribe(tab => {
    switch(tab) {
      case 'eu-kick':
        euKickShow = true
        euBanShow = false
        usKickShow = false
        usBanShow  = false
        break;
      case 'eu-ban':
        euKickShow = false
        euBanShow = true
        usKickShow = false
        usBanShow  = false
        break;
      case 'us-kick':
        euKickShow = false
        euBanShow = false
        usKickShow = true
        usBanShow  = false
        break;
      case 'us-ban':
        euKickShow = false
        euBanShow = false
        usKickShow = false
        usBanShow  = true
        break;
      default:
    }
  })
</script>

<main class="container">
  <img src="{logo}" alt="DOY [LOG]2000">
  <img src="{rake}" alt="rake" style="float: right;">
  <div class="columns">
    <div class="column">
      <strong>V{version}</strong>
      <Tabs />
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <Editor highlight={easyHighlighter} tab={"eu-kick"} show={euKickShow} />
      <Editor highlight={easyHighlighter} tab={"eu-ban"} show={euBanShow} />
      <Editor highlight={easyHighlighter} tab={"us-kick"} show={usKickShow} />
      <Editor highlight={easyHighlighter} tab={"us-ban"} show={usBanShow} />
    </div>
    <div class="column">
      <img class="image" src={doy} alt="Duke of York" />
      <img class="image" src={lls} alt="Long live Stalweidism" />
    </div>
  </div>
  <hr />
  <Chart />
  <hr />
  <div class="columns">
    <div class="column">
    </div>
    <div class="column">
      <img src={mhp} alt="Made By Frank\nHosted on Sacrilege\nProperty of Duke of York"/>
    </div>
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: black;
  }
</style>
