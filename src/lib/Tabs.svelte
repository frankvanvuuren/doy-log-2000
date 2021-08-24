<script>
  import {activeTab} from '../store'

  let setEuKickLog = () => $activeTab = 'eu-kick-log'
  let setEuBanLog = () => $activeTab = 'eu-ban-log'
  let setUsKickLog = () => $activeTab = 'us-kick-log'
  let setUsBanLog = () => $activeTab = 'us-ban-log'
</script>
<div>
  <button on:click={setEuKickLog} class="button {$activeTab == 'eu-kick-log' ? 'is-dark' : 'is-black'}">EU KICK LOG</button>
  <button on:click={setEuBanLog} class="button {$activeTab == 'eu-ban-log' ? 'is-dark' : 'is-black'}">EU BAN LOG</button>
  <button on:click={setUsKickLog} class="button {$activeTab == 'us-kick-log' ? 'is-dark' : 'is-black'}">US KICK LOG</button>
  <button on:click={setUsBanLog} class="button {$activeTab == 'us-ban-log' ? 'is-dark' : 'is-black'}">US BAN LOG</button>
</div>
