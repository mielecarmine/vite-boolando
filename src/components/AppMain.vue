<script>
export default {};
</script>

<template>
  <div class="container">
    <div class="flex">
      <div class="cards">
        <img class="first_img" src="../img/1.webp" alt="" />
        <img class="second_img" src="../img/1b.webp" alt="" />
        <p class="heart">&hearts;</p>
        <p class="sale">
          <span class="cut-off">-50%</span>
          <span class="sustenaibl">Sostenibilità</span>
        </p>
        <div class="bottom_text">
          <span>Levi's</span><br />
          <b>RELAXED FIT TEE UNISEX</b>
          <p>
            <span class="new_price">14,99 $</span>
            <span class="old_price">29,99 $</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cards {
  position: relative;
  margin: 50px 10px;
  width: calc(100% / 3 - 40px);

  .second_img {
    display: none;
  }

  &:hover {
    .first_img {
      display: none;
    }
    .second_img {
      display: block;
    }
  }
}

.heart {
  position: absolute;
  top: 10px;
  padding: 5px 15px;
  background-color: white;
  right: 0px;
  font-size: 2rem;
}

.sale {
  position: absolute;
  bottom: 35px;
}

.cut-off {
  background-color: red;
  padding: 5px 15px;
  color: white;
  margin-right: 3px;
}

.sustenaibl {
  background-color: green;
  padding: 5px 15px;
  color: white;
}

.bottom_text {
  position: absolute;
  bottom: -60px;
}

.new_price {
  color: red;
  font-weight: bold;
}

.old_price {
  text-decoration: line-through;
}
</style>
