
const filterItem = document.querySelector(".items");
const img = document.querySelectorAll("img");
window.onload = async ()=>{ 
  filterItem.addEventListener('click',(selectedItem)=>{ 
    if(selectedItem.target.classList.contains("itemGallery")){ 
      filterItem.querySelector(".active").classList.remove("active"); 
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      const filterImg = document.querySelectorAll(".gallery .image-gallery");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); 
          image.classList.add("show-card"); 
        }else{
          image.classList.add("hide"); 
          image.classList.remove("show-card"); 
        }
      });
    }
  } )  

}


