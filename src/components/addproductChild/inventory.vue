<template>
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
</template>

<script>
export default {

}
</script>

<style>
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
</style>