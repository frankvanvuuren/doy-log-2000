<script>
  import doy from './assets/doy.gif'
  import logo from './assets/text.gif'
  import lls from './assets/lls.gif'
  import mhp from './assets/mhp.gif'
  import rake from './assets/rake.gif'
  import Editor from './lib/Editor.svelte'
  import  Navbar from './lib/Navbar.svelte'
  import  Tabs from './lib/Tabs.svelte'
  import  Chart from './lib/Chart.svelte'
  import Save from './lib/Save.svelte'
  import {version} from '../package.json'
  import 'bulma'
  import {activeTab, logs, editor} from './store'
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
      <Editor />
    </div>
    <div class="column">
      <img class="image" src={doy} alt="Duke of York" />
      <img class="image" src={lls} alt="Long live Stalweidism" />
    </div>
  </div>
  <br />
  <Chart />
  <hr />
  <div class="columns">
    <div class="column">
      <Save />
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
