const menuBtn=document.getElementById('nMenuBtn');
const mobileMenu=document.getElementById('mMenu');

function closeMenu(){
  if(!menuBtn||!mobileMenu)return;
  menuBtn.classList.remove('o');
  mobileMenu.classList.remove('o');
  menuBtn.setAttribute('aria-expanded','false');
}

function toggleMenu(){
  if(!menuBtn||!mobileMenu)return;
  const open=mobileMenu.classList.toggle('o');
  menuBtn.classList.toggle('o',open);
  menuBtn.setAttribute('aria-expanded',String(open));
}

if(menuBtn&&mobileMenu){
  menuBtn.addEventListener('click',toggleMenu);
  document.addEventListener('click',e=>{
    if(!mobileMenu.classList.contains('o'))return;
    if(e.target.closest('#mMenu')||e.target.closest('#nMenuBtn'))return;
    closeMenu();
  });
  window.addEventListener('resize',()=>{if(window.innerWidth>640)closeMenu();});
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
}

const pendants=document.getElementById('pendants');
if(pendants){
  const COUNT=8;
  for(let i=0;i<COUNT;i++){
    const pct=6+(i/(COUNT-1))*88;
    const cordH=46+Math.random()*14;
    const swayDur=3.8+Math.random()*2.2;
    const swayDel=Math.random()*2.5;
    const bright=.82+Math.random()*.18;
    const scale=.92+Math.random()*.16;
    const floorSize=46+Math.random()*20;
    const div=document.createElement('div');
    div.className='pendant';
    div.style.cssText=`
      left:${pct}%;
      animation-duration:${swayDur}s;
      animation-delay:${swayDel}s;
      opacity:${bright};
      transform:scale(${scale});
    `;
    div.innerHTML=`
      <div class="p-glow"></div>
      <div class="p-hanger"></div>
      <div class="p-cord" style="height:${cordH}px;"></div>
      <div class="p-cap"></div>
      <div class="p-neck"></div>
      <div class="p-bulb">
        <div class="p-bulb-inner"></div>
        <div class="p-bulb-shine"></div>
        <div class="p-bulb-post l"></div>
        <div class="p-bulb-post r"></div>
        <div class="p-bulb-fil"></div>
      </div>
      <div class="p-floor" style="width:${floorSize}px;"></div>
    `;
    pendants.appendChild(div);
  }
}
