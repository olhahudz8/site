document.querySelectorAll('.tab-buttons button')
    .forEach( el => el.addEventListener('click', switchTab));
    
    
function switchTab(e) {
  const clickedButton = e.target;
  const tabNum = clickedButton.dataset.tab;
  
  document.querySelectorAll('.tab-buttons button')
    .forEach( el => {
        if (el.dataset.tab === tabNum) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    })
  
}