import React, { useEffect, useRef, useState } from 'react';
import { Home as HomeIcon, Target, Users, Trophy, Warehouse, Calendar, Star, Bell, Clock, Play, Heart, ChevronRight, Sparkles, Search, Check, ArrowLeft, Copy, Lock, X, Plus, Menu, GitFork, BookOpen } from 'lucide-react';
import { RenaultLogo, Flag, Avatar, Initials } from './components/graphics';
import { Customizer, Equipped } from './components/Customizer';
import Home from './screens/Home';
import Missions from './screens/Missions';
import MissionDetail from './screens/MissionDetail';
import MissionSuccess from './screens/MissionSuccess';
import Garage from './screens/Garage';
import Community from './screens/Community';
import Leaderboard from './screens/Leaderboard';
import Events from './screens/Events';
import Projects from './screens/Projects';
import Learning from './screens/Learning';

const screens = { home: Home, missions: Missions, 'mission-detail': MissionDetail, garage: Garage, community: Community, leaderboard: Leaderboard, events: Events, projects: Projects, learning: Learning };
const navigation = [['home','Home',HomeIcon],['garage','My Garage',Warehouse],['community','Community',Users],['leaderboard','Leaderboard',Trophy],['learning','Learning',BookOpen],['missions','Missions',Target],['events','Events',Calendar],['projects','Projects',GitFork]];
const icons = {home:HomeIcon, missions:Target, community:Users, leaderboard:Trophy, garage:Warehouse, events:Calendar, projects:GitFork, learning:BookOpen, star:Star, target:Target, bell:Bell, clock:Clock, play:Play, heart:Heart, chevronRight:ChevronRight, users:Users, trophy:Trophy, sparkle:Sparkles, search:Search, check:Check, arrowLeft:ArrowLeft, copy:Copy, lock:Lock, close:X, plus:Plus, gitfork:GitFork};
const promptText = 'You are my meeting assistant. Turn the notes below into an action list. For each item give: owner, task, due date. Group by owner. Flag anything with no owner.\n\nNotes: """ <paste your notes here> """';
const countries = ['Türkiye','France','Romania','India','Colombia'];
const people = ['Amélie Laurent','Mert Demir','Ana Popescu','Rahul Nair','Camila Rojas','Sofia Marin','Deniz Yılmaz'];
const eventNames = ['AI Summit 2026','AI Agent Hackathon','AI Coffee Chat','Show & Tell: Reporting','Microsoft Copilot Training'];

const textOf = node => typeof node === 'string' || typeof node === 'number' ? String(node) : React.isValidElement(node) ? React.Children.toArray(node.props.children).map(textOf).join(' ').trim() : '';
const getRoute = () => location.hash.slice(1) in screens ? location.hash.slice(1) : 'home';

const onlyMatch = (list, text, inherited) => {
 const hits = list.filter(item => text.includes(item));
 return hits.length === 1 ? hits[0] : inherited;
};

const outlineColor = node => {
 for (const child of React.Children.toArray(node.props.children)) {
  const outline = React.isValidElement(child) ? child.props.style?.outline : null;
  if (typeof outline !== 'string') continue;
  const token = outline.match(/var\((--[\w-]+),\s*([^)]+)\)/);
  if (token) return `var(${token[1]}, ${token[2].trim()})`;
  const hex = outline.match(/#[0-9a-fA-F]{3,8}/);
  if (hex) return hex[0];
 }
 return 'currentColor';
};

const isRowStyle = style => typeof style.display === 'string' && style.display.includes('flex') && style.flexDirection !== 'column';
const hasAbsoluteChild = children => React.Children.toArray(children).some(child => React.isValidElement(child) && child.props.style?.position === 'absolute');
const isFlagBox = (style, children) => React.Children.count(children) === 0 && style.borderRadius === 3
 && typeof style.width === 'number' && style.width >= 20 && style.width <= 26
 && typeof style.height === 'number' && style.height >= 14 && style.height <= 18;
const isAvatarCircle = (style, children) => React.Children.count(children) === 0 && style.borderRadius === 9999
 && typeof style.width === 'number' && style.width >= 24 && style.width <= 44 && style.width === style.height;

const fluid = (style, breakpoint, rowChild, frozen) => {
 const s = {...style};
 if (s.height === '100%') s.height = 'auto';

 if (s.overflow === 'hidden' && typeof s.height !== 'number') delete s.overflow;
 if (frozen || breakpoint === 'wide') return s;

 if (isRowStyle(s) && (s.gap >= 12 || s.alignSelf === 'stretch')) s.flexWrap = 'wrap';

 if (typeof s.height === 'number' && s.height >= 200) { s.minHeight = s.height; delete s.height; }
 if (rowChild) {
  if (s.flex === '1 1 0') s.flex = '1 1 280px';
  else if (typeof s.width === 'number' && s.width >= 240) { delete s.width; s.flex = '1 1 280px'; s.maxWidth = '100%'; }
 }
 if (breakpoint === 'mobile') {
  for (const side of ['paddingLeft','paddingRight']) if (typeof s[side] === 'number' && s[side] > 20) s[side] = 20;
  if (typeof s.paddingTop === 'number' && s.paddingTop > 28) s.paddingTop = 28;
  if (typeof s.fontSize === 'number' && s.fontSize >= 32) { s.fontSize = 24; s.lineHeight = '30px'; }
  if (typeof s.width === 'number' && s.width >= 200) { s.width = '100%'; s.maxWidth = '100%'; }
 }
 return s;
};

const readBreakpoint = () => typeof matchMedia !== 'function' ? 'wide'
 : matchMedia('(max-width: 800px)').matches ? 'mobile'
 : matchMedia('(max-width: 1200px)').matches ? 'narrow' : 'wide';

const useBreakpoint = () => {
 const [breakpoint, setBreakpoint] = useState(readBreakpoint);
 useEffect(() => {
  const narrow = matchMedia('(max-width: 1200px)');
  const mobile = matchMedia('(max-width: 800px)');
  const update = () => setBreakpoint(readBreakpoint());
  update();
  narrow.addEventListener('change', update);
  mobile.addEventListener('change', update);
  return () => { narrow.removeEventListener('change', update); mobile.removeEventListener('change', update); };
 }, []);
 return breakpoint;
};

export default function App() {
 const [route,setRoute] = useState(getRoute);
 const [menu,setMenu] = useState(false);
 const [result,setResult] = useState('');
 const [reflection,setReflection] = useState('');
 const [completed,setCompleted] = useState(false);
 const [notice,setNotice] = useState('');
 const [look,setLook] = useState({hair:'Tousled',skin:'Medium',outfit:'Renault yellow jacket',shoes:'Yellow-trim sneakers',accessories:[]});
 const [registered,setRegistered] = useState(() => new Set());
 const breakpoint = useBreakpoint();
 const dialog = useRef(null);
 const noticeTimer = useRef(null);
 const scrollArea = useRef(null);
 const notify = message => { clearTimeout(noticeTimer.current); setNotice(message); noticeTimer.current=setTimeout(()=>setNotice(''),4500); };
 useEffect(()=>{const change=()=>{setRoute(getRoute());setMenu(false);scrollArea.current?.scrollTo({top:0,behavior:'instant'});};addEventListener('hashchange',change);return()=>{removeEventListener('hashchange',change);clearTimeout(noticeTimer.current);};},[]);
 useEffect(()=>{document.title=`${navigation.find(([id])=>id===route)?.[1] || 'Mission detail'} · AI Garage`;},[route]);

 useEffect(()=>{
  const column=scrollArea.current?.querySelector('.screen-content > div');
  const sections=column?Array.from(column.children):[];
  if(!sections.length) return;
  sections.forEach((el,i)=>{
   el.classList.add('reveal');
   el.style.transitionDelay=Math.min(i*70,420)+'ms';
  });
  void column.offsetHeight;
  const show=el=>el.classList.add('reveal-in');
  let observer;
  if(typeof IntersectionObserver==='function') {
   observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{ if(entry.isIntersecting) { show(entry.target); observer.unobserve(entry.target); } });
   },{root:scrollArea.current,rootMargin:'0px 0px -6% 0px',threshold:0.04});
   sections.forEach(el=>observer.observe(el));
  } else {
   sections.forEach(show);
  }
  const fallback=setTimeout(()=>{
   sections.forEach(el=>{ if(el.getBoundingClientRect().top<innerHeight) show(el); });
  },1200);
  return ()=>{
   clearTimeout(fallback);
   observer?.disconnect();
   sections.forEach(el=>{ el.classList.remove('reveal','reveal-in'); el.style.transitionDelay=''; });
  };
 },[route,breakpoint]);

 const go = next => { location.hash=next; };
 const selectPart = (slot,value) => { setLook(prev=>({...prev,[slot]:value})); notify(`${value} equipped.`); };
 const toggleAccessory = name => setLook(prev=>{
  const on=prev.accessories.includes(name);
  notify(on?`${name} removed.`:`${name} equipped.`);
  return {...prev,accessories:on?prev.accessories.filter(item=>item!==name):[...prev.accessories,name]};
 });
 const actions = {
  'Start Mission':()=>go('mission-detail'), 'Continue':()=>go('mission-detail'),
  'Start':()=>notify('Only the meeting-notes mission has a supplied detail screen. Open Continue to try it.'),
  'Back to Missions':()=>go('missions'), 'Upgrade Avatar':()=>go('garage'),
  'View All':()=>go('leaderboard'), 'Help':()=>go('community'), 'Join':()=>route==='home'?go('events'):notify('Demo event: registration requires a connected backend.'),
  'Register':()=>notify('Demo event: registration requires a connected backend.'),
  'Copy prompt':async()=>{try{await navigator.clipboard.writeText(promptText);notify('Prompt copied.');}catch{notify('Clipboard unavailable. Select and copy the example prompt.');}},
  'Complete Mission':()=>{if(!result.trim()){notify('Paste your action list before completing the mission.');document.getElementById('mission-result')?.focus();return;}setCompleted(true);dialog.current.showModal();},
  'View Reward':()=>{dialog.current.close();go('garage');notify('Racing gloves unlocked in this demo session.');},
  'Save Avatar':()=>notify(`Avatar saved for this session — ${look.hair}, ${look.skin} skin, ${look.outfit}.`),
  'Redeem':()=>notify('Prototype reward store — no points deducted and no purchase made.'),
  'Ask a Question':()=>notify('Community posts are sample content. Posting requires a connected backend.'),
  'Share a Use Case':()=>notify('Community posts are sample content. Posting requires a connected backend.'),
  'Submit a Project':()=>notify('Project submissions require a connected backend.'),
  'View on GitHub':()=>notify('This is a demo project — no real repository is linked.'),
  'Watch Video':()=>notify('Video tutorials will open in the learning platform — no URL linked in this demo.'),
  'Rewatch':()=>notify('Video tutorials will open in the learning platform — no URL linked in this demo.'),
 };

 function enhance(node,key='root',ctx={}) {
  if(!React.isValidElement(node)) {
   if(completed && node==='2,450 XP') return '2,480 XP';
   return node;
  }

  if(typeof node.type!=='string') return node;
  const {children,style={},...props}=node.props;
  const label=textOf(node);

  const Icon=icons[props['data-name']];
  if(Icon) {
   const icon=<Icon key={key} size={style.width||20} aria-hidden="true" style={{flexShrink:0,color:outlineColor(node)}}/>;
   if(props['data-name']==='close') return <button key={key} className="icon-button" aria-label="Close reward" onClick={()=>dialog.current.close()}>{icon}</button>;
   return icon;
  }

  if(props['data-outfit']) {
   const {width,height,...position}=style;
   return <Avatar key={key} width={width} height={height} {...look} style={{...position,maxWidth:'100%',height:'auto'}}/>;
  }

  if(props['data-panel']==='equipped') return <Equipped key={key} {...look}/>;
  if(props['data-panel']==='customizer') {
   return <Customizer key={key} {...look} onSelect={selectPart} onToggleAccessory={toggleAccessory}/>;
  }

  if(isFlagBox(style,children) && ctx.country) {
   return <Flag key={key} country={ctx.country} width={style.width} height={style.height}/>;
  }

  if(isAvatarCircle(style,children) && ctx.person) {
   return <span key={key} style={{...style,display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
    <Initials name={ctx.person} size={style.width}/>
   </span>;
  }

  if(label==='Paste your action list here…' || label==='A sentence or two is plenty…') {
   const isResult=label.startsWith('Paste');
   return <textarea key={key} id={isResult?'mission-result':'mission-reflection'} aria-label={isResult?'Your action list':'Reflection'} placeholder={label} value={isResult?result:reflection} onChange={e=>(isResult?setResult:setReflection)(e.target.value)} rows={isResult?5:3}/>;
  }

  const action=!ctx.parentAction && actions[label];
  const isTable=!!props['data-table'];
  const frozen=ctx.frozen || isTable || (style.position==='relative' && hasAbsoluteChild(children));
  const nextStyle=fluid(style,breakpoint,ctx.rowChild,frozen);
  const childCtx={
   parentAction: ctx.parentAction || !!action,
   rowChild: isRowStyle(style),
   frozen,
   country: onlyMatch(countries,label,ctx.country),
   person: onlyMatch(people,label,ctx.person),
   event: onlyMatch(eventNames,label,ctx.event),
  };
  const descendants=React.Children.map(children,(child,i)=>enhance(child,`${key}.${i}`,childCtx));

  if(route==='events' && ctx.event && (label==='Join' || label==='Register')) {
   const done=registered.has(ctx.event);
   const large=label==='Register';
   return (
    <button key={key} type="button" disabled={done}
     onClick={()=>{setRegistered(prev=>new Set(prev).add(ctx.event));notify(`Registered for ${ctx.event}.`);}}
     className={`export-action${done?' is-registered':''}`}
     style={{...nextStyle,background:done?'var(--bg-card-alt, #F1F1F3)':nextStyle.background,color:done?'var(--text-secondary, #6B6B70)':undefined}}>
     {done
      ? <><Check size={large?18:16} aria-hidden="true"/><span style={{fontSize:large?16:14,fontFamily:'Inter',fontWeight:600,letterSpacing:0.03}}>Registered</span></>
      : descendants}
    </button>
   );
  }

  if(action) return <button key={key} type="button" onClick={action} style={nextStyle} className="export-action">{descendants}</button>;
  const element=React.cloneElement(node,{...props,style:nextStyle},descendants);
  if(isTable) return <div key={key} className="table-scroll" tabIndex={0} role="region" aria-label="Leaderboard table, scroll horizontally">{element}</div>;
  return React.cloneElement(element,{key});
 }

 const Screen=screens[route];
 const exported=Screen();

 const content=React.Children.toArray(exported.props.children).slice(1);
 const success=MissionSuccess();
 const successContent=React.Children.toArray(success.props.children).slice(1);
 return <>
  <a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();document.getElementById('main-content').focus();}}>Skip to content</a>
  <header className="mobile-bar">
   <span className="mobile-brand"><RenaultLogo size={20}/> AI GARAGE</span>
   <button className="icon-button" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation" aria-expanded={menu}><Menu/></button>
  </header>
  <div className="app-shell">
   <aside className={`sidebar ${menu?'is-open':''}`}>
    <a className="brand" href="#home"><RenaultLogo size={26}/> AI GARAGE</a>
    <nav aria-label="Main navigation">{navigation.map(([id,label,Icon])=><a href={`#${id}`} key={id} aria-current={route===id || (id==='missions'&&route==='mission-detail')?'page':undefined}><Icon size={22}/><span>{label}</span></a>)}</nav>
    <div className="sidebar-footer">Renault GBS · Concept</div>
   </aside>
   <main id="main-content" tabIndex={-1} ref={scrollArea}>
    {completed && route==='garage' && <div className="reward-banner"><Check size={18}/> Racing gloves unlocked · +30 XP earned this session</div>}
    <div key={route} className={`screen-content screen-${route}`}>{content.map((child,i)=>enhance(child,String(i)))}</div>
   </main>
  </div>
  <dialog ref={dialog} aria-label="Mission completed" className="success-dialog">{successContent.map((child,i)=>enhance(child,`success-${i}`))}</dialog>
  <div role="status" aria-live="polite" className={`toast ${notice?'visible':''}`}>{notice}</div>
 </>;
}
