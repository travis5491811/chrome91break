<template>
  <div class="container-fluid">
    <br>

    <h1>Page not found!</h1>

    <div class="confirm_selection">
      404
    </div>

    <dir>
      RETURN TO LAST PAGE
      <button class="tst-btn" @click="$router.go(-1)">BACK</button>
    </dir>
  </div>
</template>

<style lang="scss" scoped>
.confirm_selection {
  animation: glow 1s infinite alternate;
}

@keyframes glow {
  to {
    text-shadow: 0 0 10px red;
  }
}

.confirm_selection {
  font-size: 10em;
  font-weight: bold;
}
</style>
