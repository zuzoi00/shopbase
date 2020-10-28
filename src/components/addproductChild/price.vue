<template>
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
                type="number"
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
                type="number"
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
                type="number"
                class="form-control"
                placeholder="0"
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
</style>