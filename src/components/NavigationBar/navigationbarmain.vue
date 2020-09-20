<template>
  <div id="app" class="static">
    <header>
      <Navbar />
    </header>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
div.static {
  position: absolute;
  left: 10px;
  top: 10px;
  border: 30px solid rgb(34,136,255);
}
* {
  color: #FFF;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
  background-color:rgb(34,136,255);
}

header {
  width: 100%;
  background-color: #222;
  padding: 10px;
}
</style>
