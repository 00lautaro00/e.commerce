
export const notifierRender =  async (notification) => {
    const div = document.getElementById("notifier");
    div.innerHTML = 
    `
                        <div class="card modal-confirm shadow-blue modal-animation-fall">
                            <div class="card-header">
                                    <h3>Notification</h3>
                            </div>
                            <div class="card-body notify" id="productModal">
                                <span> ${notification}</span>
                            </div>
                        </div>
    `
} 
