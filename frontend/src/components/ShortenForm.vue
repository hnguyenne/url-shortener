<template>
  <form @submit.prevent="handleSubmit" class="form">
    <input v-model="longUrl" type="url" placeholder="Enter URL" required />
    <button>Shorten</button>
  </form>

  <div v-if="shortUrl" class="result">
    <p>Shortened URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a></p>
  </div>
</template>

<script>
import { ref } from "vue";
import { shortenUrl } from "../api/urlServices.js";

export default {
  setup() {
    const longUrl = ref("");
    const shortUrl = ref(""); // Ref to store the shortened URL

    const handleSubmit = async () => {
      if (longUrl.value.trim()) {
        try {
          const data = await shortenUrl(longUrl.value);
          shortUrl.value = data.shortUrl; // Update the shortUrl ref
        } catch (error) {
          console.error("Error shortening URL:", error);
        }
      }
    };

    return { longUrl, shortUrl, handleSubmit };
  },
};
</script>

<style scoped>
.form {
  display: flex;
  gap: 10px;
}
input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
