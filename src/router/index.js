import addproduct from '@/components/addproduct.vue';
import Content from '@/components/Content.vue';
import Editproduct from '@/components/EditProduct.vue';

export default [
  {
    path: "/",
    name: "Content",
    component: Content
  }
  ,
  {
    path: "/addproduct",
    name: "addproduct",
    component: addproduct
  }
  ,
  {
    path: "/editproduct",
    name: "editproduct",
    component: Editproduct
  }  
  ]
