<template>
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
</template>

<script>
export default {
    data() {
        return {
            userInput:{
                
            }
        }
    }
}
</script>

<style>
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
</style>