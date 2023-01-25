
export const notifierRender =  async (notification) => {
    const div = document.getElementById("notifier");
    div.innerHTML = 
    `
    <div class="modal-confirm shadow-tomato">
  <div class="card">
      <div class="card-header">
          <h3>${notification}</h3>
      </div>
  </div>
    `
} 
