<script>
export default {};
</script>

<template>
  <div class="sticky">
    <div class="flex container">
      <div class="text">
        <a href="#">Donna</a>
        <a href="#">Uomo</a>
        <a href="#">Bambini</a>
      </div>
      <div class="logo">
        <img src="../img/boolean-logo.png" alt="boolean-logo" />
      </div>
      <div class="text">
        <i class="fa-regular fa-user"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-bag-shopping"></i>
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

.flex {
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;

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

    a,
    i {
      cursor: pointer;
      padding: 5px;
    }
  }
}
</style>
