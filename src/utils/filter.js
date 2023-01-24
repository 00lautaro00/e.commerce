
const filterItem = document.querySelector(".items");
const img = document.querySelectorAll("img");
window.onload = async ()=>{ //after window loaded
  filterItem.addEventListener('click',(selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("itemGallery")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      const filterImg = document.querySelectorAll(".gallery .image-gallery");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show-card"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show-card"); //remove show class from the image
        }
      });
    }
  } )  
  // for (let i = 0; i < filterImg.length; i++) {
  //   filterImg[i].setAttribute( "preview(this)"); //adding onclick attribute in all available images
  // }
}

//fullscreen image preview function
//selecting all required elements

