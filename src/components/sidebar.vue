<template>
  <div class="">
    <div class="sideb ">
        <router-link tag="a" to="/">
          <div class="img"></div>
        </router-link>
        <div class="cont1">
            <div class="content">Home</div>
            <div class="content">Order</div>
            <div class="content">Products</div>
            <div class="content">Analytics</div>
            <div class="content">Discount</div>
            <div class="content">Customer</div>
            <div class="content">App</div>
            <div class="content">Setting</div>
            <div class="content">Online Store</div>
        </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'


export default {

}
// Delete product
    // let id = 1;
    // let index = array.findIndex(x => 
    // products = product.splice(index,1);
    // );

    // products = products.filter(function (product){
    //     return product.id != 1;
    // });
</script>

<style>
    .sideb {
    height: 100%;
    padding: 70px 0 0 20px; 
    border-right: #e6e6e6 solid 1px;
    position: fixed
}

.sideb .img {
    background: url('../assets/logo.png') center center/cover no-repeat;
    height: 140px;
    width: 150px;
}

.cont1 {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 400px;
    width: 150px;
    background-color: white;
}

.cont1 .content {
  text-align: left;
  padding-left: 30px;
}
.container {
  margin: 0;
  padding: 0;
}

</style>