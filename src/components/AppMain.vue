<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("../assets/img/" + imageName, import.meta.url);
      return imageUrl.href;
    },
  },

  created() {
    axios.get("http://localhost:3000/products").then((res) => {
      this.products = res.data;
    });
  },
};
</script>

<template>
  <div class="container">
    <div class="flex">
      <div v-for="product in products" class="cards">
        <img
          class="first_img"
          :src="buildImagePath(product.frontImage)"
          alt=""
        />
        <img
          class="second_img"
          :src="buildImagePath(product.backImage)"
          alt=""
        />
        <p class="heart">&hearts;</p>
        <p class="sale">
          <span :class="product.badges.type == 'discount' ? 'cut-off' : ''">{{
            product.badges.value
          }}</span>
          <span :class="product.badges.type == 'tag' ? 'tag' : ''">{{
            product.badges.value
          }}</span>
        </p>
        <div class="bottom_text">
          <span>{{ product.brand }}</span
          ><br />
          <b>{{ product.name }}</b>
          <p>
            <span class="new_price">{{ product.price }}</span>
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

.tag {
  background-color: green;
  padding: 5px 15px;
  color: white;
}

.bottom_text {
  position: absolute;
  bottom: -60px;
}

.new_price {
  font-weight: bold;
}
</style>
