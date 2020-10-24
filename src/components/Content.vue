<template>
  <div class="">
    <div class="container">
      <div class="cont2 mg">
        <h3 class="row mg">Products</h3>
        <div class="row mg">
          <div class="col-sm-6 mg">
            <div class="a a1 mg">Export</div>
            <div class="a a5 mg">Import</div>
          </div>
          <div class="col-sm-6 mg pd">
            <div class="a a2 mg">Add from Services</div>
            <router-link tag="a" to="/addproduct">
              <div class="a a3 mg">Add product</div>
            </router-link>
          </div>
        </div>
        <div class="row mg" style="text-align: left">
          <span class="a4">All</span>
          <span class="a4">Available product</span>
          <span class="a4">Unavailable product</span>
        </div>
        <div class="row mg">
          <input
            type="text"
            class="search col-sm-9 a mg"
            placeholder="Tìm kiếm..."
          />
          <div class="col-sm-2 filter a pd" style="left:15px">More filter</div>
        </div>
      </div>

      <div class="cont3 row">
        <table class="" style="width: 100%">
          <thead>
            <tr class="row hd">
              <th class="col-sm-1"><input type="checkbox" @click="clickAllCheckbox"/></th>
              <th class="col-sm-5 text-left">Product</th>
              <th class="col-sm-3">Type</th>
              <th class="col-sm-3">Vendor</th>
            </tr>
          </thead>
          <tbody>
            
            <tr
              class="row sanpham hd"
              v-for="(product, index) in products"
              :key="index"
            >
              <td class="col-sm-1 cb"><input type="checkbox" :checked="clicked" /></td>
              <td class="col-sm-1">
                <img style="display:inline-block" src="@/assets/logo.png" alt="" />
              </td>
              <td class="col-sm-4 name">
                {{ product.name }}
                <router-link tag="a" to = "/EditProduct" >
                  <i class="fas fa-eye eye"></i>
                </router-link>
              </td>
              <td class="col-sm-3">{{ product.description }}</td>
              <td class="col-sm-3">{{ product.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "./products.json";
export default {
  data() {
    return {
      products: [],
      jsonData,
      clicked: false,
    };
  },
  methods: {
    clickAllCheckbox(){
      this.clicked = !this.clicked
    },
  },
  created() {
    this.products = this.jsonData.data;
    // console.log(this.products) để thấy biến này trả về 1 mảng gồm nhiều obj
    // muốn gọi 1 trong các obj đó ra thì cần .data 1 lần nữa: this.jsonData.data
    console.log(this.products);
  },
};
</script>

<style>
.cont2 {
  margin: 0;
  padding: 0 150px;
  height: 260px;
  width: 100%;
}

h3 {
  text-align: left;
}

.mg {
  margin: 0;
}

.pd {
  padding: 0;
}

.cont2 .a {
  display: inline-block;
  background-color: #e6e6e6;
  border: grey solid 1px;
  border-radius: 5px;
  height: 35px;
  line-height: 35px;
  width: 80px;
  margin: 20px 5px;
}

.cont2 .a1 {
  position: absolute;
  left: 0;
  margin-left: 0;
}

.cont2 .a5 {
  position: absolute;
  left:110px;

}

.cont2 .a2 {
  width: 180px;
  margin: 20px 5px;
}

.cont2 .a3 {
  width: 120px;
  margin: 20px 5px;
}

.cont2 .a4 {
  margin-right: 15px;
}

.cont2 .search {
  margin: 15px 15px 15px 0;
}

.cont2 .filter {
  width: 90px;
  margin: 15px 0;
}

.cont3 {
  height: 100px;
  padding: 0 150px;
  margin: 0;
}

.cont3 .col {
  padding: 0;
}

.cont3 img {
  width: 100%;
}

.cont3 .hd {
  border-bottom: gray solid 1px;
  margin: 0;
}

.cont3 .name {
  padding: 0;
  text-align: left;
}

.cont3 .eye {
  display: none;
}

.cont3 .sanpham:hover .eye {
  display: inline-block;
  color: black;
}

.cont3 .sanpham {
  height: 70px;
  line-height: 70px;
  border-bottom: grey solid 1px;
}

.cont3 .sanpham:hover {
  background-color: #e6e6e6;
}
</style>