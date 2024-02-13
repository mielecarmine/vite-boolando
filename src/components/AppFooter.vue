<script>
export default {};
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="flex-between">
        <div class="text">
          <span>Boolando s.r.l</span><br />
          <a href="#">Informazioni legali</a>
          <a href="#">Informativa sulla Privacy</a>
          <a href="#">Diritto di recesso</a>
        </div>
        <div class="text">
          <span>Trovaci anche su</span><br />
          <a class="icons" href="#">
            <font-awesome-icon icon="fa-brands fa-square-twitter" />
          </a>
          <a class="icons" href="#">
            <font-awesome-icon icon="fa-brands fa-square-facebook" />
          </a>
          <a class="icons" href="#">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
          <a class="icons" href="#">
            <font-awesome-icon icon="fa-brands fa-square-pinterest" />
          </a>
          <a class="icons" href="#">
            <font-awesome-icon icon="fa-brands fa-square-youtube" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 50px;
  background-color: #292929;
  height: 70px;
  color: white;
  font-weight: bold;

  .text {
    line-height: 25px;

    a {
      font-size: small;
      margin-right: 5px;
    }
    .icons {
      font-size: large;
      padding-right: 7px;
    }
  }
}
</style>
