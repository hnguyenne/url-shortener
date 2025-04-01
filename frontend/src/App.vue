<template>
  <div id="app">
    <header>
      <h1>URL Shortener</h1>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

#app {
  text-align: center;
}

header {
  background: #007bff;
  color: white;
  padding: 15px;
}

main {
  padding: 20px;
}
</style>
