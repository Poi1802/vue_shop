<template>
  <div class="sidebar-holder">
    <form action="#0" class="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated">
      <div class="footer-input-box p-0 "> <input type="email" placeholder="Email address" name="email">
        <button type="submit" class="subscribe_btn"> <i class="flaticon-magnifying-glass"></i> </button>
      </div>
    </form>
    <div class="single-sidebar-box mt-30 wow fadeInUp animated ">
      <h4>Select Categories</h4>
      <div class="checkbox-item">
        <form>
          <div class="form-group"> <input type="checkbox" id="bedroom"> <label for="bedroom">Bedroom</label>
          </div>
          <div class="form-group"> <input type="checkbox" id="decoration"> <label for="decoration">Decoration</label>
          </div>
          <div class="form-group"> <input type="checkbox" id="kitchen"> <label for="kitchen">Kitchen</label>
          </div>
          <div class="form-group"> <input type="checkbox" id="clothing"> <label for="clothing">Clothing</label> </div>
          <div class="form-group"> <input type="checkbox" id="office"> <label for="office">Office</label>
          </div>
          <div class="form-group m-0"> <input type="checkbox" id="lighting"> <label for="lighting">Lighting</label> </div>
        </form>
      </div>
    </div>
    <div class="single-sidebar-box mt-30 wow fadeInUp animated">
      <h4>Color Option </h4>
      <ul class="color-option">
        <li> <a href="#0" class="color-option-single"> <span> Black</span> </a> </li>
        <li> <a href="#0" class="color-option-single bg2"> <span> Yellow</span> </a>
        </li>
        <li> <a href="#0" class="color-option-single bg3"> <span> Red</span> </a> </li>
        <li> <a href="#0" class="color-option-single bg4"> <span> Blue</span> </a> </li>
        <li> <a href="#0" class="color-option-single bg5"> <span> Green</span> </a>
        </li>
        <li> <a href="#0" class="color-option-single bg6"> <span> Olive</span> </a>
        </li>
        <li> <a href="#0" class="color-option-single bg7"> <span> Lime</span> </a> </li>
        <li> <a href="#0" class="color-option-single bg8"> <span> Pink</span> </a> </li>
        <li> <a href="#0" class="color-option-single bg9"> <span> Cyan</span> </a> </li>
        <li> <a href="#0" class="color-option-single bg10"> <span> Magenta</span> </a>
        </li>
      </ul>
    </div>
    <div class="single-sidebar-box mt-30 wow fadeInUp animated">
      <h4>Filter By Price</h4>
      <div class="slider-box">
        <div id="price-range" class="slider"></div>
        <div class="output-price"> <label for="priceRange">Price:</label> <input type="text" id="priceRange" readonly>
        </div> <button class="filterbtn" type="submit"> Filter </button>
      </div>
    </div>
    <div class="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0 ">
      <h4>Tags </h4>
      <ul class="popular-tag">
        <li><a href="#0">Tools</a></li>
        <li><a href="#0">Store</a></li>
        <li><a href="#0">Decoration</a></li>
        <li><a href="#0">Online</a></li>
        <li><a href="#0">Furnitures</a></li>
        <li><a href="#0">Beauty</a></li>
        <li><a href="#0">Fashion</a></li>
        <li><a href="#0">Office</a></li>
        <li><a href="#0">Clothing</a></li>
        <li><a href="#0">Interior</a></li>
        <li><a href="#0">Good</a></li>
        <li><a href="#0">Standard</a></li>
        <li><a href="#0">Chair’s</a></li>
        <li><a href="#0">Living Room</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

</style>