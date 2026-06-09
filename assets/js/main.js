(function(){
  const navToggle=document.querySelector('[data-nav-toggle]');
  const navMenu=document.querySelector('[data-nav-menu]');
  if(navToggle&&navMenu){
    navToggle.addEventListener('click',()=>{const open=navMenu.classList.toggle('is-open');navToggle.setAttribute('aria-expanded',String(open));});
    navMenu.addEventListener('click',e=>{if(e.target.closest('a')){navMenu.classList.remove('is-open');navToggle.setAttribute('aria-expanded','false');}});
  }
  const tabButtons=document.querySelectorAll('[data-filter]');
  const cards=document.querySelectorAll('.event-card');
  tabButtons.forEach(btn=>btn.addEventListener('click',()=>{const filter=btn.dataset.filter;tabButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');cards.forEach(card=>card.classList.toggle('hidden',!(filter==='all'||card.dataset.category===filter)));}));
  const track=document.querySelector('[data-event-track]');
  const prev=document.querySelector('[data-event-prev]');
  const next=document.querySelector('[data-event-next]');
  function scrollEvents(dir){if(!track)return;const card=track.querySelector('.event-card:not(.hidden)');const distance=card?card.getBoundingClientRect().width+32:320;track.scrollBy({left:dir*distance,behavior:'smooth'});}
  if(prev&&next&&track){track.style.overflowX='auto';track.style.scrollSnapType='x mandatory';track.querySelectorAll('.event-card').forEach(c=>c.style.scrollSnapAlign='start');prev.addEventListener('click',()=>scrollEvents(-1));next.addEventListener('click',()=>scrollEvents(1));}
  const pSlider=document.querySelector('[data-priority-slider]');
  const pBtns=document.querySelectorAll('[data-slide]');let index=0;
  pBtns.forEach(button=>button.addEventListener('click',()=>{if(!pSlider)return;const items=Array.from(pSlider.children);if(!items.length)return;index+=button.dataset.slide==='next'?1:-1;if(index<0)index=items.length-1;if(index>=items.length)index=0;items[index].scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});}));
})();
