import Vue from "vue";
import Cloudinary, { CldImage, CldTransformation } from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: { cloudName: "emmieportfoliollaravel" },
  components: [CldImage, CldTransformation],
});
