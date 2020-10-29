<template>
  <div class="ap-adimg">
        <div class="ap-adimg1">Image ({{ number }} / 120)</div>
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
            <img :src="image.url" />
            <i class="fas fa-trash-alt bin" @click="deleteImg(index)"></i>
          </div>
        </div>
      </div>
</template>

<script>

export default {
  data() {
    return {
      userInput: {
        images: [],
      },
      number: 0
    };
  },
  methods: {
    //  khi click vào ô Img thì link tới input file đã bị ẩn bằng reffences
    //  thẻ có chứa thuộc tính ref sẽ là thẻ đc tương tác, ở đây là đc click
    InputImg() {
      this.$refs.fileInputImg.click();
    },
    deleteImg(index) {
      this.userInput.images.splice(index, 1);
      this.number = this.userInput.images.length;
    },
    changeLayout(event) {
      const file = event.target.files; // event.target.files đây là đường dẫn tới file ảnh(cả cụm 0:File ... luôn)
      for (let n = 0; n < file.length; n++) {
        // tạo obj và push đường dẫn ảnh vào để ở trên có thể v-for ra các div
        let obj = {};
        // bởi url trong file products.json lưu ở dạng images.url nên ở đây cũng làm cho đồng bộ
        obj.url = URL.createObjectURL(file[n]);
        this.userInput.images.push(obj);
        this.number = this.userInput.images.length;
      }
    }
  }
};
</script>

<style>
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
  margin-left: 233px;
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
</style>