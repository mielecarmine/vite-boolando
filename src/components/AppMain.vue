<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          frontImage: "1.webp",
          backImage: "1b.webp",
          brand: "Levi's",
          name: "Relaxed Fit",
          price: 29.99,
          isInFavorites: true,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
            {
              type: "discount",
              value: "-50%",
            },
          ],
        },
        {
          id: 2,
          frontImage: "2.webp",
          backImage: "2b.webp",
          brand: "Guess",
          name: "Roses Tee",
          price: 20.99,
          isInFavorites: true,
          badges: [
            {
              type: "discount",
              value: "-30%",
            },
          ],
        },
        {
          id: 3,
          frontImage: "3.webp",
          backImage: "3b.webp",
          brand: "Come Zucchero Filato",
          name: "Voglia di colori pastello",
          price: 129.99,
          isInFavorites: false,
          badges: [
            {
              type: "discount",
              value: "-30%",
            },
          ],
        },
        {
          id: 4,
          frontImage: "4.webp",
          backImage: "4b.webp",
          brand: "Levi's",
          name: "Tee Unisex",
          price: 14.99,
          isInFavorites: false,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
            {
              type: "discount",
              value: "-50%",
            },
          ],
        },
        {
          id: 5,
          frontImage: "5.webp",
          backImage: "5b.webp",
          brand: "Maya Deluxe",
          name: "Stripe Bodice",
          price: 99.99,
          isInFavorites: true,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
            {
              type: "discount",
              value: "-50%",
            },
          ],
        },
        {
          id: 6,
          frontImage: "6.webp",
          backImage: "6b.webp",
          brand: "Esprit",
          name: "Maglione - Black",
          price: 29.99,
          isInFavorites: true,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
          ],
        },
      ],
    };
  },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("../assets/img/" + imageName, import.meta.url);
      return imageUrl.href;
    },
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
