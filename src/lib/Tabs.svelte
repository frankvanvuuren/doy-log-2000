<script>
  import {activeTab} from '../store'

  let setEuKickLog = () => $activeTab = 'eu-kick'
  let setEuBanLog = () => $activeTab = 'eu-ban'
  let setUsKickLog = () => $activeTab = 'us-kick'
  let setUsBanLog = () => $activeTab = 'us-ban'
</script>
<div>
  <button on:click={setEuKickLog} class="button {$activeTab == 'eu-kick' ? 'is-dark' : 'is-black'}">EU KICK LOG</button>
  <button on:click={setEuBanLog} class="button {$activeTab == 'eu-ban' ? 'is-dark' : 'is-black'}">EU BAN LOG</button>
  <button on:click={setUsKickLog} class="button {$activeTab == 'us-kick' ? 'is-dark' : 'is-black'}">US KICK LOG</button>
  <button on:click={setUsBanLog} class="button {$activeTab == 'us-ban' ? 'is-dark' : 'is-black'}">US BAN LOG</button>
</div>
