<template>
  <div class="container">
    <h1 class="fw-light text-center text-lg-start mt-4 mb-0">Photogram</h1>

    <hr class="mt-2 mb-5" />

    <div v-for="photo of APIData" :key="photo.data">
     
        <div class="col-12">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail mx-auto d-block"
              :src="photo.photo_url"
              alt=""
            />
          </a>
        </div>
    </div>
  </div> 

</template>

<script>
import { getAPI } from "../axios.api";

export default {
  data() {
    return {
      APIData: [],
    };
  },

  created() {
    getAPI
      .get("/v1/api/photo")
      .then((response) => {
        console.log("API Call succeed");
        this.APIData = response.data;
        console.log(this.APIData);
      })
      .catch((error) => {
        console.log("Something went wrong" + error);
      });
  },
};
</script>