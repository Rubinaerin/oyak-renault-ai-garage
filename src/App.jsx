import React, { useEffect, useRef, useState } from 'react';
import { Home as HomeIcon, Target, Users, Trophy, Warehouse, Calendar, Star, Bell, Clock, Play, Heart, ChevronRight, Sparkles, Search, Check, ArrowLeft, Copy, Lock, X, Plus, Menu, GitFork, BookOpen } from 'lucide-react';
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
const navigation = [['home','Home',HomeIcon],['missions','Missions',Target],['community','Community',Users],['leaderboard','Leaderboard',Trophy],['learning','Learning',BookOpen],['garage','My Garage',Warehouse],['events','Events',Calendar],['projects','Projects',GitFork]];
const icons = {home:HomeIcon, missions:Target, community:Users, leaderboard:Trophy, garage:Warehouse, events:Calendar, projects:GitFork, learning:BookOpen, star:Star, target:Target, bell:Bell, clock:Clock, play:Play, heart:Heart, chevronRight:ChevronRight, users:Users, trophy:Trophy, sparkle:Sparkles, search:Search, check:Check, arrowLeft:ArrowLeft, copy:Copy, lock:Lock, close:X, plus:Plus, gitfork:GitFork};
const promptText = 'You are my meeting assistant. Turn the notes below into an action list. For each item give: owner, task, due date. Group by owner. Flag anything with no owner.\n\nNotes: """ <paste your notes here> """';
const textOf = node => typeof node === 'string' || typeof node === 'number' ? String(node) : React.isValidElement(node) ? React.Children.toArray(node.props.children).map(textOf).join(' ').trim() : '';
const getRoute = () => location.hash.slice(1) in screens ? location.hash.slice(1) : 'home';

export default function App() {
 const [route,setRoute] = useState(getRoute);
 const [menu,setMenu] = useState(false);
 const [result,setResult] = useState('');
 const [reflection,setReflection] = useState('');
 const [completed,setCompleted] = useState(false);
 const [notice,setNotice] = useState('');
 const dialog = useRef(null);
 const noticeTimer = useRef(null);
 const scrollArea = useRef(null);
 const notify = message => { clearTimeout(noticeTimer.current); setNotice(message); noticeTimer.current=setTimeout(()=>setNotice(''),4500); };
 useEffect(()=>{const change=()=>{setRoute(getRoute());setMenu(false);scrollArea.current?.scrollTo(0,0);};addEventListener('hashchange',change);return()=>{removeEventListener('hashchange',change);clearTimeout(noticeTimer.current);};},[]);
 useEffect(()=>{document.title=`${navigation.find(([id])=>id===route)?.[1] || 'Mission detail'} · AI Garage`;},[route]);
 const go = next => { location.hash=next; };
 const actions = {
  'Start Mission':()=>go('mission-detail'), 'Continue':()=>go('mission-detail'),
  'Start':()=>notify('Only the meeting-notes mission has a supplied detail screen. Open Continue to try it.'),
  'Back to Missions':()=>go('missions'), 'Upgrade Avatar':()=>go('garage'),
  'View All':()=>go('leaderboard'), 'Help':()=>go('community'), 'Join':()=>route==='home'?go('events'):notify('Demo event: registration requires a connected backend.'),
  'Register':()=>notify('Demo event: registration requires a connected backend.'),
  'Copy prompt':async()=>{try{await navigator.clipboard.writeText(promptText);notify('Prompt copied.');}catch{notify('Clipboard unavailable. Select and copy the example prompt.');}},
  'Complete Mission':()=>{if(!result.trim()){notify('Paste your action list before completing the mission.');document.getElementById('mission-result')?.focus();return;}setCompleted(true);dialog.current.showModal();},
  'View Reward':()=>{dialog.current.close();go('garage');notify('Racing gloves unlocked in this demo session.');},
  'Save Avatar':()=>notify('The exported avatar is a static illustration; customization needs the original avatar assets.'),
  'Redeem':()=>notify('Prototype reward store — no points deducted and no purchase made.'),
  'Ask a Question':()=>notify('Community posts are sample content. Posting requires a connected backend.'),
  'Share a Use Case':()=>notify('Community posts are sample content. Posting requires a connected backend.'),
  'Submit a Project':()=>notify('Project submissions require a connected backend.'),
  'View on GitHub':()=>notify('This is a demo project — no real repository is linked.'),
  'Watch Video':()=>notify('Video tutorials will open in the learning platform — no URL linked in this demo.'),
  'Rewatch':()=>notify('Video tutorials will open in the learning platform — no URL linked in this demo.'),
 };

 function enhance(node,key='root',parentAction=false) {
  if(!React.isValidElement(node)) {
   if(completed && node==='2,450 XP') return '2,480 XP';
   return node;
  }
  const {children,style={},...props}=node.props;
  const label=textOf(node);
  const Icon=icons[props['data-name']];
  if(Icon) {
   const icon=<Icon key={key} size={style.width||20} aria-hidden="true" style={{flexShrink:0,color:'inherit'}}/>;
   if(props['data-name']==='close') return <button key={key} className="icon-button" aria-label="Close reward" onClick={()=>dialog.current.close()}>{icon}</button>;
   return icon;
  }
  // Exported placeholders become actual controlled form fields.
  if(label==='Paste your action list here…' || label==='A sentence or two is plenty…') {
   const isResult=label.startsWith('Paste');
   return <textarea key={key} id={isResult?'mission-result':'mission-reflection'} aria-label={isResult?'Your action list':'Reflection'} placeholder={label} value={isResult?result:reflection} onChange={e=>(isResult?setResult:setReflection)(e.target.value)} rows={isResult?5:3}/>;
  }
  const action=!parentAction && actions[label];
  const descendants=React.Children.map(children,(child,i)=>enhance(child,`${key}.${i}`,parentAction||!!action));
  if(action) return <button key={key} type="button" onClick={action} style={style} className="export-action">{descendants}</button>;
  return React.cloneElement(node,{...props,key,style},descendants);
 }

 const Screen=screens[route];
 const exported=Screen();
 // Every supplied page repeats the sidebar. Use one accessible shared navigation.
 const content=React.Children.toArray(exported.props.children).slice(1);
 const success=MissionSuccess();
 const successContent=React.Children.toArray(success.props.children).slice(1);
 return <>
  <a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();document.getElementById('main-content').focus();}}>Skip to content</a>
  <header className="mobile-bar"><strong>AI GARAGE</strong><button className="icon-button" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation" aria-expanded={menu}><Menu/></button></header>
  <div className="app-shell">
   <aside className={`sidebar ${menu?'is-open':''}`}>
    <a className="brand" href="#home"><span className="brand-mark">◇</span> AI GARAGE</a>
    <nav aria-label="Main navigation">{navigation.map(([id,label,Icon])=><a href={`#${id}`} key={id} aria-current={route===id || (id==='missions'&&route==='mission-detail')?'page':undefined}><Icon size={22}/><span>{label}</span></a>)}</nav>
    <div className="sidebar-footer">Renault GBS · Concept</div>
   </aside>
   <main id="main-content" tabIndex={-1} ref={scrollArea}>
    {completed && route==='garage' && <div className="reward-banner"><Check size={18}/> Racing gloves unlocked · +30 XP earned this session</div>}
    <div className={`screen-content screen-${route}`}>{content.map((child,i)=>enhance(child,String(i)))}</div>
   </main>
  </div>
  <dialog ref={dialog} aria-label="Mission completed" className="success-dialog">{successContent.map((child,i)=>enhance(child,`success-${i}`))}</dialog>
  <div role="status" aria-live="polite" className={`toast ${notice?'visible':''}`}>{notice}</div>
 </>;
}
