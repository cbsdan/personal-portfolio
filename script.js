const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

const menuBtn = document.getElementById('menu');
const navEl = document.querySelector('.navMenu');

const projectBtn = document.getElementById('project-btn');

tabs.forEach((tab)=>{
  tab.addEventListener('click', ()=>{
    const target = document.querySelector(tab.dataset.tabTarget)

    tabContents.forEach(tabContents => {
      tabContents.classList.remove('active')
    })

    tabs.forEach(tab=> {
      tab.classList.remove('active')
    })

    tab.classList.add('active')
    target.classList.add('active')
  });
})

menuBtn.addEventListener('click', ()=>{
  if (navEl.classList.contains('hidden')) {
    navEl.classList.remove('hidden');
  } else {
    navEl.classList.add('hidden');
  }
  
})

document.addEventListener('click', (e)=> {
  if (!menuBtn.contains(e.target)) {
    navEl.classList.add('hidden');
  }
})

projectBtn.addEventListener('click', ()=>{
  
})