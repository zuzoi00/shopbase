<template>
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
              <!-- name là phần hiển thị ra ô collection, còn value là giá trị đc ghi vào v-model=userInput.collections -->
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
      <button @click="save">Save</button>
    </div>
    
</template>

<script>
import jsonCollections from "../collections.json";

export default {
    data() {
        return {
            userInput:{},
            jsonCollections,
            collections: [],
        }
    },
    methods: {
         // hàm này để lưu lại các thay đổi luôn trên phần F12
        save() {
        console.log("đây là obj thông tin ảnh", this.userInput);

        },
    },
    created(){
        this.collections = this.jsonCollections.data;
    }
}
</script>

<style>
.ap-right {
  padding: 10px;
  margin-top: 155px;
}

.ap-right .cont1 {
  width: 100%;
  height: 220px;
  padding: 15px 10px;
  text-align: left;
  border: #e6e6e6 solid 2px;
}

.ap-right .cont1 input {
  height: 16px;
  width: 16px;
}

.ap-right {
  width: calc(30%);
  height: 100%;
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

.pd {
    padding: 0;
}
</style>