<script>
export default {};
</script>

<template>
  <div class="sticky">
    <div class="flex-between container">
      <div class="text">
        <a href="#">Donna</a>
        <a href="#">Uomo</a>
        <a href="#">Bambini</a>
      </div>
      <div class="logo">
        <img src="../assets/img/boolean-logo.png" alt="boolean-logo" />
      </div>
      <div class="text">
        <font-awesome-icon icon="fa-solid fa-user" class="i pointer" />
        <font-awesome-icon icon="fa-solid fa-heart" class="i pointer" />
        <font-awesome-icon icon="fa-solid fa-bag-shopping" class="i pointer" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sticky {
  position: sticky;
  top: 0;
  z-index: 1;

  background-color: #ff6900;
  height: 70px;
  color: white;
  font-weight: bold;
  box-shadow: 0px 2px 5px 0px #444;
}

.logo {
  height: 30px;
  align-items: center;

  img {
    height: 100%;
  }
}

.text {
  width: 180px;
  text-align: center;

  .i,
  a {
    padding: 5px;
  }
}
</style>
