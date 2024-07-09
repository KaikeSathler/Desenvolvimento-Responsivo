<scritp lang="ts"></scritp>
<template>
  <div class="error-page">
    <h1>Erro 404</h1>
    <p>A página que você está procurando não existe.</p>
  </div>
</template>

<style lang="scss">
.error-page {
  text-align: center;
  h1 {
    font-size: 8rem;
    margin: 1rem;
    background: -webkit-linear-gradient(90deg, rgba(13, 68, 58, 1) 0%, rgba(0, 108, 31, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

@media screen and (max-width: 608px) {
  .error-page {
    h1 {
      font-size: 4rem;
    }
  }
}
</style>
