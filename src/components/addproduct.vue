<template>
  <div class="ap-container row">
    <div class="ap-left pd">
      <router-link tag="a" to="/">
        <div class="ap-product text-left">
          <i
            class="fas fa-caret-left"
            style="display: inline-block; color: #a5a5a5;margin-right: 10px;"
          ></i>
          <div class="bach">PRODUCT</div>
        </div>
      </router-link>
      
      <div style="text-align: left;font-size: 30px;">Add product</div>

      <div class="ap-tit-descript">
        <div>Tittle</div>
        <input
          type="text"
          v-model="userInput.title"
          placeholder="Title of your product"
        />
        <div>Description</div>
        <input
          type="text"
          v-model="userInput.description"
          placeholder="About your product"
        />
      </div>

      <!-- ################################################################### -->
      <!-- img -->

      <div class="ap-adimg">
        <div class="ap-adimg1">Image</div>
        <div class="ap-adimg2">Add image from URL</div>
        <div class="ap-adimg3" @click="InputImg">Add image</div>
        <input
          type="file"
          style="display: none"
          ref="fileInputImg"
          multiple
          @change="changeLayout"
        />
        <div class="preview row">
          <div
            class="col-sm-3 place"
            style="padding: 0"
            v-for="(image, index) in userInput.images"
            :key="index"
          >
            <img :src="image.url"/>
            <i class="fas fa-trash-alt bin" @click="deleteImg(index)"></i>
          </div>
        </div>
      </div>

      <!-- ################################################################### -->
      <!-- price -->

      <div class="ap-price">
        <div class="pricing">Pricing</div>
        <div class="row">
          <div class="price col-sm-6">
            <div>Price</div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">USD</span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="0"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div>Cost per item</div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">USD</span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="0"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div class="compare col-sm-6">
            <div>Compare at price</div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">USD</span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="0"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- ################################################################### -->
      <!-- inventory -->

      <div class="ap-inventory">
        <div class="inventory">Inventory</div>
        <div class="row">
          <div class="col-sm-6">
            <span class="sku">
              <div>SKU (stock keeping unit)</div>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </span>
            <span class="policy">
              <div>Inventory policy</div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Don't track inventory</option>
                <option value="1">Track inventory</option>
              </select>
            </span>
          </div>

          <div class="col-sm-6">
            <div class="barcode">
              <div>Barcode (ISBN, UPC, GTIN, etc.)</div>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- ################################################################### -->
      <!-- variant -->

      <div class="ap-variant">
        <div
          style="color: blue; margin-bottom: 20px"
          @click="changeClickBox">
          <!-- toán tử 3 ngôi của v-bind -->
          {{ active=== true ? "Add Variant" : "Cancel"}}
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
          <div class="r1 row" v-for="(option,index) in settingOptions" :key="index">
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
            <div v-if="settingOptions.length > 1" class=" col-sm-1">
              <i class="fas fa-trash-alt bin2"  @click="deleteVariant(index)"></i>
            </div>
  
          </div>
          <button @click="addOption" v-if="canAddAnotherOptions" class="btn btn-outline" >Add another option</button>
          
          <!-- clickVariantInp là đk để hiện thẻ các giá trị variant -->
          <div class="r2 row" >
            <div class="col-sm-3 text-center">Variant</div>
            <div class="col-sm-3 text-center">Price</div>
            <div class="col-sm-3 text-center">SKU</div>
            <div class="col-sm-3 text-center" >Barcode</div>
          </div>
          <div class="r3 row" v-for="(value,idx) in variants" :key="idx" >
            <div class="col-sm-1" style="padding: 0 5px" ><input type="checkbox" /></div>
            <!-- toString để chuyển từ dạng mảng về string -->
            <div class="col-sm-2" style="padding: 0 5px">{{ variants[idx].join("/") }}</div>
            <div class="col-sm-3" style="padding: 0 5px"><input type="text" class="form-control " ></div>
            <div class="col-sm-3" style="padding: 0 5px"><input type="text" class="form-control " ></div>
            <div class="col-sm-3" style="padding: 0 5px"><input type="text" class="form-control " ></div>
            
          </div>
        </div>
      </div>
      <!-- ################################################################### -->
      <!-- RIGHT -->
    </div>

    <div class="ap-right pd">
      <div class="cont1">
        <div style="font-weight: 600">Product availability</div>
        <div>Manage the availability of the product in these channels</div>
        <div class="row">
          <div class="col-sm-2">
            <input type="checkbox" style="display: inline-block" />
          </div>
          <div class="col-sm-10" style="display: inline-block">
            Online store listing pages
          </div>
        </div>
        <div class="row">
          <div class="col-sm-2">
            <input type="checkbox" style="display: inline-block" />
          </div>
          <div class="col-sm-10" style="display: inline-block">
            Search Engine Bot Crawlers, Sitemap files
          </div>
        </div>
      </div>

      <div class="cont2">
        <div style="font-weight: 600">Organization</div>
        <div>
          <div>Product type</div>
          <input
            v-model="userInput.product_type"
            type="text"
            class="form-control"
            placeholder="Product type"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <div>Vendor</div>
          <input
            v-model="userInput.vendor"
            type="text"
            class="form-control"
            placeholder="Nikola's Electrical Supplies"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <div>Collections</div>

          <div class="form-group">
            <select
              v-model="userInput.collections"
              class="custom-select"
              id="inputGroupSelect01"
            >
              <!-- name là phần hiển thị ra ô collection, còn value là giá trị đc ghi vào userInput.collections -->
              <option
                v-for="(collection, index) in collections"
                :key="index"
                :value="collection"
              >
                {{ collection.name }}
              </option>
            </select>
          </div>
        </div>
        <div>
          Add this product to a collection so it’s easy to find in your store.
        </div>
        <div>
          <div>Tags</div>
          <input
            type="text"
            class="form-control"
            placeholder="Search for collection"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
    <button @click="save">Save</button>
  </div>
</template>

<script>
import jsonData from "./products.json";
import jsonCollections from "./collections.json";

export default {
  data() {
    return {
      jsonData,
      products: [],
      jsonCollections,
      collections: [],
      userInput: {
        images: [],
      },
      // cái này để nhập thêm các option của variant, set max là 3
      settingOptions:[],
      urls: [],
      variants: [],
      active:true,

    };
  },
  created() {
    this.products = this.jsonData.data;
    this.collections = this.jsonCollections.data;
  },
  methods: {
    
    createVariant(){
      let arr = [];
      this.settingOptions.forEach(function(element){
        let option = element.value.split(",");
        arr.push(option);
      });
      const f = (a, b) => 
        [].concat(...a.map(d => 
          b.map(e => [].concat(d, e)
          )
        )
      );
      const cartesian = (a, b, ...c) => 
        (b ? cartesian(f(a, b), ...c) : a);

      let output = cartesian(...arr);
      this.variants = output;
      console.log("đây", this.variants);
    },
    deleteVariant(index) {
      if(this.settingOptions.length < 3){
        this.notActiveBut = false;
        console.log("hehehêh");
      }
      this.settingOptions.splice(index, 1);
      
    },
    // hàm này để add thêm option cho variant
    addOption() {
      if (this.settingOptions.length < 3) {
        this.settingOptions.push({
          value:''
        });
      }
    },
    // khi click vào ô Img thì link tới input file đã bị ẩn bằng reffences
    // thẻ có chứa thuộc tính ref sẽ là thẻ đc tương tác, ở đây là đc click
    InputImg() {
      this.$refs.fileInputImg.click();
    },
    // khi click vào hình sọt rác thì link tới ô đã bị ẩn
    deleteImg(index) {
      this.userInput.images.splice(index, 1);
      
    },
    // hàm này để lấy link ảnh từ máy và thêm vào html khi nhận sự kiện change
    changeLayout(event) {
      const file = event.target.files; // event.target.files đây là đường dẫn tới file ảnh(cả cụm 0:File ... luôn)
      for (let n = 0; n < file.length; n++) {
        // tạo obj và push đường dẫn ảnh vào để ở trên có thể v-for ra các div
        let obj = {};
        // bởi url trong file products.json lưu ở dạng images.url nên ở đây cũng làm cho đồng bộ
        obj.url = URL.createObjectURL(file[n]);
        this.userInput.images.push(obj);
      }
    },
    
    // hàm này để lưu lại các thay đổi luôn trên phần F12
    save() {
      console.log("đây là obj thông tin ảnh", this.userInput);
      console.log("mảng", this.settingOptions);
      // console.log(this.products);
    },
    // đây là việc cắm cờ, mỗi khi click vào thì nút add ở variant thay đổit rạng thái
    changeClickBox(){
      return this.active = !this.active
    },
    
  },
  computed: {
    canAddAnotherOptions() {
      return this.settingOptions.length < 3;
    },
    // khi data thay đổi hàm này chạy lại, để set style css có được chạy ( true) hay không (false)
    objClickBox() {
      return{
        clickCheckBox : this.active
      }
    },
  }
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

.ap-right {
  width: calc(30%);
  height: 100%;
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

.ap-tit-descript {
  padding: 25px 15px 15px 15px;
  height: 200px;
  margin: 20px 0 15px 0;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
  border: #e6e6e6 solid 2px;
}

.ap-tit-descript input {
  background-color: #f5f5f5;
  border: none;
}

.ap-tit-descript input :hover {
  border: red solid 10px;
  border-radius: 20px;
}

/* ########################################### */
/* img */

.ap-adimg {
  width: 100%;
  border: #e6e6e6 solid 2px;
  line-height: 80px;
  padding: 0 15px;
}

.ap-adimg1 {
  font-weight: 600;
  float: left;
}

.ap-adimg2 {
  display: inline-block;
  color: blue;
  margin-left: 340px;
}
.ap-adimg3 {
  color: blue;
  float: right;
}

.ap-adimg .bin {
  position: absolute;
  bottom: 15px;
  right: 75px;
  color: rgba(105, 105, 105, 0);
}

.ap-adimg .preview .place:hover .bin {
  display: block;
  color: rgba(105, 105, 105, 1);
}

.ap-adimg .preview img {
  width: 100%;
  height: 150px;
  padding: 15px 15px;
  position: relative;
}

/* ###################### */
/* variant */



.ap-variant .bin2  {
  position: absolute;
  bottom: 30px;
  right: 44px;
  color: rgba(105, 105, 105, 1);
}

.clickHereButtonAdd {
  display: none;
}

.ap-price {
  margin: 20px 0;
  border: #e6e6e6 solid 1px;
  padding: 15px 15px;
  text-align: left;
}

.ap-price .pricing {
  margin: 10px 0;
  font-weight: 600;
}

.ap-inventory {
  margin: 20px 0;
  border: #e6e6e6 solid 1px;
  padding: 15px 15px;
  text-align: left;
}

.ap-inventory .inventory {
  margin: 10px 0;
  font-weight: 600;
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
  border-top:#e6e6e6 solid 1px; 
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
    
.ap-right {
  padding: 10px;
  margin-top: 152px;
}

.ap-right .cont1 {
  width: 100%;
  height: 220px;
  padding: 0 15px;
  text-align: left;
  border: #e6e6e6 solid 2px;
}

.ap-right .cont1 input {
  height: 16px;
  width: 16px;
}

.ap-right .cont2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;
  padding: 15px 15px;
  height: 460px;
  width: 100%;
  text-align: left;
  border: #e6e6e6 solid 2px;
}

/* ############################## */

.clickCheckBox {
  display: none;
}
</style>
