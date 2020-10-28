<template>
  <div class="ap-container row">
    <div class="ap-left pd">
      <router-link tag="a" to="/">
        <div class="ap-product text-left">
          <i
            class="fas fa-caret-left"
            style="display: inline-block; color: #a5a5a5; margin-right: 10px"
          ></i>
          <div class="bach">PRODUCT</div>
        </div>
      </router-link>
      <div style="text-align: left; font-size: 30px">Add product</div>

      <Description></Description>
      <Addimage></Addimage>
      <Price></Price>
      <Inventory></Inventory>

      <!-- variant -->

      <div class="ap-variant">
        <div style="color: blue; margin-bottom: 20px" @click="changeClickBox">
          <!-- toán tử 3 ngôi của v-bind -->
          {{ active === true ? "Add Variant" : "Cancel" }}
        </div>
        <div>
          Cancel Add variants if this product comes in multiple versions, like
          different sizes or colors.
        </div>
        <!-- Nếu dùng dòng AAA ở dưới -->
        <!-- do objClickBox có đặt value là active nên phải nằm trong { }
        nếu chỉ là objClickBox thì k cần { } -->
        <!-- <div class="option" :class="{objClickBox:active}"> AAA-->
        <div class="option" :class="objClickBox">
          <div
            class="r1 row"
            v-for="(option, index) in settingOptions"
            :key="index"
          >
            <div class="col-sm-5 pd" style="margin: 20px 0">
              <div>Option name</div>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="option.name"
              />
            </div>
            <div class="col-sm-6" style="margin: 20px 0">
              <div>Option values</div>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="option.value"
                @change="createVariant"
              />
            </div>
            <div v-if="settingOptions.length > 1" class="col-sm-1">
              <i
                class="fas fa-trash-alt bin2"
                @click="deleteVariant(index)"
              ></i>
            </div>
          </div>
          <button
            @click="addOption"
            v-if="canAddAnotherOptions"
            class="btn btn-outline"
          >
            Add another option
          </button>

          <!-- clickVariantInp là đk để hiện thẻ các giá trị variant -->
          <div class="r2 row">
            <div class="col-sm-3 text-center">Variant</div>
            <div class="col-sm-3 text-center">Price</div>
            <div class="col-sm-3 text-center">SKU</div>
            <div class="col-sm-3 text-center">Barcode</div>
          </div>
          <!-- key là "a"+ để tránh lỗi duplicate: r1 cũng có key = key, r3 cũng thế dẫn tới l -->
          <div class="r3 row" v-for="(value, idx) in variants" :key="'a' + idx">
            <div class="col-sm-1" style="padding: 0 5px">
              <input type="checkbox" />
            </div>
            <!-- .join("/") chuyển từ dạng mảng về string -->
            <div class="col-sm-2" style="padding: 0 5px">
              {{ variants[idx].join("/") }}
            </div>
            <div class="col-sm-3" style="padding: 0 5px">
              <input type="text" class="form-control" />
            </div>
            <div class="col-sm-3" style="padding: 0 5px">
              <input type="text" class="form-control" />
            </div>
            <div class="col-sm-3" style="padding: 0 5px">
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
      </div>
    </div>

      <RightZone></RightZone>
    
  </div>
</template>

<script>
import jsonData from "./products.json";
import Addimage from "./addproductChild/image";
import Inventory from "./addproductChild/inventory";
import Price from "./addproductChild/price";
import Description from "./addproductChild/description";
import RightZone from "./addproductChild/rightzone";


export default {
  components: {
    Addimage,
    Inventory,
    Price,
    Description,
    RightZone,
  },
  data() {
    return {
      jsonData,
      products: [],
      userInput: {
        images: [],
      },
      // cái này để nhập thêm các option của variant, set max là 3
      settingOptions: [],
      urls: [],
      variants: [],
      active: true,
    };
  },
  created() {
    this.products = this.jsonData.data;
  },
  methods: {
    createVariant() {
      let Arr = [];
      this.settingOptions.forEach(function (element) {
        let option = element.value.split(",");
        Arr.push(option);
      });
      function cartesianProduct(arr) {
        return arr.reduce(
          (a, b) =>
            a
              .map((x) => b.map((y) => x.concat(y)))
              .reduce((a, b) => a.concat(b), []),
          [[]]
        );
      }
      let output = cartesianProduct(Arr);
      this.variants = output;
    },
    deleteVariant(index) {
      if (this.settingOptions.length < 3) {
        this.notActiveBut = false;
        console.log("hehehêh");
      }
      this.settingOptions.splice(index, 1);

      this.createVariant();
    },
    // hàm này để add thêm option cho variant
    addOption() {
      if (this.settingOptions.length < 3) {
        this.settingOptions.push({
          value: "",
        });
      }
    },
    // đây là việc cắm cờ, mỗi khi click vào thì nút add ở variant thay đổit rạng thái
    changeClickBox() {
      return (this.active = !this.active);
    },
  },
  computed: {
    canAddAnotherOptions() {
      return this.settingOptions.length < 3;
    },
    // khi data thay đổi hàm này chạy lại, để set style css có được chạy ( true) hay không (false)
    objClickBox() {
      return {
        clickCheckBox: this.active,
      };
    },
  },
  watch: {},
};
</script>

<style>
.ap-container {
  margin: 0;
  padding: 0 50px;
}

.ap-left {
  width: calc(70% - 20px);
  height: 100%;
  margin-right: 20px;
}

.ap-product {
  height: 60px;
  line-height: 60px;
  margin: 15px 0;
  width: 110px;
}

.ap-product .bach {
  display: inline-block;
  color: #a5a5a5;
}

.ap-variant {
  margin: 20px 0;
  border: #e6e6e6 solid 1px;
  padding: 15px 15px;
  text-align: left;
}

.ap-variant .option {
  color: #000;
}

.ap-variant .r1 {
  border-top: #e6e6e6 solid 1px;
  margin: 25px 0 5px 0;
}

.ap-variant .btn-outline {
  color: inherit;
  background-color: transparent;
  border-color: #82869e;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin-bottom: 20px;
}

.ap-variant .btn-outline1 {
  color: inherit;
  background-color: transparent;
  border-color: #82869e;
  -webkit-box-shadow: none;
  box-shadow: none;
  height: 30px;
  margin: 0 5px;
}

.ap-variant .r3 {
  margin-bottom: 10px;
}

.clickCheckBox {
  display: none;
}
</style>
