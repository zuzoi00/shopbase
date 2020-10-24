<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" style="padding: 0 0 0 100px" href="#"
        ><img style="height: 50px" src="@/assets/logo.png"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        style="padding-left: 300px"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <a
            class="nav-item nav-link active"
            href="./about.html"
            target="_blank"
            >About Us <span class="sr-only"> (current)</span></a
          >
          <a class="nav-item nav-link active" href="#"
            >Shop <span class="sr-only"> (current)</span></a
          >
          <a class="nav-item nav-link active" href="#"
            >Order Tracking <span class="sr-only"> (current)</span></a
          >
          <a class="nav-item nav-link active" href="./contact.html"
            >Contact Us <span class="sr-only"> (current)</span></a
          >
        </div>
      </div>
    </nav>

    <!-- 	Điểm nổi bật -->
    <div class="cont4 row">
      <div class="col-sm-6">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="@/assets/8.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="@/assets/2.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="@/assets/3.jpg"
                alt="Third slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="@/assets/4.jpg"
                alt="Third slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="@/assets/5.jpg"
                alt="Third slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="@/assets/6.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="col-sm-6" style="text-align: left; padding: 0 0 0 50px">
        <div class="tensp">shoe</div>
        <div class="giatien">10 000</div>
        <div class="quantity" style="display: flex">
          <button @click="quantity -= 1" class="bt">
            <i class="fas fa-minus" style="font-size: 15px"></i>
          </button>
          <input
            class="inp"
            type="number"
            :value="quantity"
            min="1"
            max="Infinity"
          />
          <button @click="quantity += 1" class="bt">
            <i class="fas fa-plus" style="font-size: 15px"></i>
          </button>
        </div>
        <button class="cart">ADD TO CART</button>
        <!-- 	Đối tác  -->

        <div class="cont5">
        <div class="cont">Happy Customers</div>
        <div class="branch">
            <img src="@/assets/c1.png" />
            <img src="@/assets/c2.png" />
            <img src="@/assets/c3.png" />
            <img src="@/assets/c4.png" />
            <img src="@/assets/c5.png" />
        </div>
        </div>
      </div>
    </div>

    

    <!-- 	Liên hệ -->

    <div class="cont6">
      <div class="row">
        <img src="" class="col-sm-2" />
        <div class="col-sm-10 cont" style="font-size: 18px; margin: 15px 0">
          Công ty TNHH Thương mại Dịch vụ & Quảng cáo truyền thông AM
        </div>
      </div>
      <div class="row">
        <img src="" class="col-sm-2" />
        <div class="col-sm-10 cont">
          Số 21, ngách 99/4. Nguyễn Chí Thanh, Đống Đa, Hà Nội
        </div>
      </div>
      <div class="row">
        <img src="" class="col-sm-2" />
        <div class="col-sm-10 cont">Email: contact@ammedia.vn</div>
      </div>
      <div class="row">
        <img src="" class="col-sm-2" />
        <div class="col-sm-10 cont">Hotline: 034 508 8613</div>
      </div>
      <div class="row">
        <img src="" class="col-sm-2" />
        <a
          href="https://www.facebook.com/ammediavietnam/"
          class="col-sm-10 cont"
          >https://www.facebook.com/ammediavietnam/</a
        >
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      quantity: 1,
    };
  },
};
// $(document).ready(function() {
//     let n = 0; // screen (img) hien tai

//     setInterval(function() {
//         $(".trai .img-item").fadeIn(); // cho class mờ đi, hoặc addClass('hide') có display :none cho ẩn element đi
//         $(".trai .img-item").eq(n).fadeOut();  //eq chon screen thu (n) hiện lên
//         if ($(".trai .img-item").length > (n+1)) {   // .length de dem slide, vd 2 slide thi khi n= 3 se quay lai slide 0
//             n++;
//         } else {
//             n = 0;
//         }
//     }, 2500);
// });
</script>

<style >
nav {
  background-color: white;
}

.navbar-nav a {
  color: black;
  font-weight: 600;
  padding-right: 30px !important;
  padding-left: 30px !important;
}

.cont4 {
  margin-top: 20px;
  padding: 40px 20px;
  width: 100%;
  height: 600px;
}

.cont4 button {
  width: 300px;
  height: 50px;
  font-size: 22px;
  font-weight: 600;
}

.cont4 .text {
  margin: 60px 0;
}

.cont4 .a {
  font-size: 45px;
  font-weight: 400;
  color: grey;
}

.cont4 .r1 {
  width: 100%;
  height: 100px;
  padding: 20px;
  margin: 0;
}

.cont4 i {
  font-size: 60px;
  color: grey;
}

.cont4 h3 {
  color: green;
}

.cont4 .r1 .col-sm-2 {
  margin: 0 20px;
}

.cont4 .bt {
  width: 33%;
  border: grey solid 1px;
  width: 40px;
  height: 40px;
  background: transparent;
}

.cont4 .bt:focus {
  border-radius: 0%;
  border: none;
}

.cont4 .tensp {
  font-size: 25px;
  margin-bottom: 15px;
}

.cont4 .giatien {
  color: red;
  font-size: 20px;
  margin-bottom: 15px;
}

.cont4 .inp {
  text-align: center;
  width: 100px;
}

.cont4 .cart {
  width: 300px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: white;
  background-color: #4e53f7;
  border: none;
}

input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.cont4 .quantity {
  margin-bottom: 15px;
}

.cont5 {
  width: 100%;
  height: 200px;
  border: #e8e8e8 solid 2px;
}

.cont5 .cont {
  text-align: center;
  font-size: 35px;
  margin: 20px;
}

.cont5 .branch {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.cont5 img {
  width: 70px;
}

.cont6 {
  width: 100%;
  height: 220px;
  padding: 10px 50px;
  background-color:#4e53f7;
}

.cont6 .cty {
  font-size: 20px;
  color: white;
  text-align: right;
  margin: 15px 0;
}

.cont6 .cont {
  color: white;
  font-size: 15px;
  text-align: right;
  padding: 5px 0;
}

.hide {
  display: none;
}
</style>