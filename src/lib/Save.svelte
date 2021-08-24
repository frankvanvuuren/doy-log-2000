<script>
  import html2canvas from 'html2canvas'

  const download = (canvas) => {
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = canvas.toDataURL()
    link.click();
  }

  const save = () => {
    html2canvas(document.getElementById('graph')).then(function(canvas) {
          download(canvas);
    });
  }
</script>
<button on:click={save} class="button is-danger">SAVE GRAPH</button>
