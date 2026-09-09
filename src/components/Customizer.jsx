import React, { useState } from 'react';
import { Scissors, Palette, Shirt, Footprints, Glasses, Watch, Check, Lock } from 'lucide-react';
import { skinTones, outfits, shoeStyles, hairEquippedNames } from './graphics';

const tabs = ['Hair', 'Skin tone', 'Outfit', 'Shoes', 'Accessories'];

const panels = {
 'Hair': {
  title: 'Hair styles',
  slot: 'hair',
  options: [
   { name: 'Tousled', icon: Scissors },
   { name: 'Buzz cut', icon: Scissors },
   { name: 'Long hair', icon: Scissors },
   { name: 'Side part', icon: Scissors, locked: true },
   { name: 'Ponytail', icon: Scissors, locked: true },
   { name: 'Mohawk', icon: Scissors, locked: true },
  ],
 },
 'Skin tone': {
  title: 'Skin tones',
  slot: 'skin',
  options: Object.keys(skinTones).map(name => ({ name, swatch: skinTones[name].base })),
 },
 'Outfit': {
  title: 'Outfits',
  slot: 'outfit',
  options: [
   ...Object.keys(outfits).map(name => ({ name, swatch: outfits[name].jacket, icon: Shirt })),
   { name: 'Rally windbreaker', icon: Shirt, locked: true },
   { name: 'Pit crew vest', icon: Shirt, locked: true },
  ],
 },
 'Shoes': {
  title: 'Shoes',
  slot: 'shoes',
  options: [
   ...Object.keys(shoeStyles).map(name => ({ name, swatch: shoeStyles[name].upper, icon: Footprints })),
   { name: 'Track spikes', icon: Footprints, locked: true },
  ],
 },
 'Accessories': {
  title: 'Accessories',
  slot: 'accessories',
  multi: true,
  options: [
   { name: 'Glasses', icon: Glasses },
   { name: 'Watch', icon: Watch },
   { name: 'Team lanyard', icon: Palette, locked: true },
   { name: 'Racing cap', icon: Palette, locked: true },
  ],
 },
};

function Tile({ option, selected, onPick }) {
 const { name, icon: Icon, swatch, locked } = option;
 const frame = {
  position: 'relative', width: 96, height: 96, borderRadius: 16, flexShrink: 0,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  background: locked ? 'var(--bg-card-alt, #F1F1F3)' : selected ? 'var(--brand-yellow-soft, #FFF6D6)' : 'var(--bg-card, white)',
  outline: locked
   ? '1px var(--border-default, #E4E4E7) solid'
   : selected ? '2px var(--brand-yellow, #FFD400) solid' : '1px var(--border-strong, #C7C7CC) solid',
  outlineOffset: selected && !locked ? -2 : -1,
 };
 const caption = {
  textAlign: 'center', maxWidth: 96,
  color: locked ? 'var(--text-secondary, #6B6B70)' : 'var(--text-primary, #1A1A1A)',
  fontSize: 12, fontFamily: 'Inter', fontWeight: 500, lineHeight: '16px', letterSpacing: 0.02,
 };
 const body = (
  <>
   <span className="hair-frame" style={frame}>
    {swatch
     ? <span style={{ width: 44, height: 44, borderRadius: 999, background: swatch, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.14)', opacity: locked ? 0.5 : 1 }} />
     : Icon && <Icon size={40} aria-hidden="true" style={{ color: 'var(--text-primary, #1A1A1A)', opacity: locked ? 0.5 : 1 }} />}
    {selected && !locked && (
     <span style={{ position: 'absolute', left: 64, top: 8, width: 24, height: 24, borderRadius: 999, background: 'var(--success, #1FA971)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Check size={14} color="#fff" aria-hidden="true" />
     </span>
    )}
    {locked && (
     <span style={{ position: 'absolute', left: 64, top: 8, width: 24, height: 24, borderRadius: 999, background: 'var(--black, #0A0A0A)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Lock size={13} color="#fff" aria-hidden="true" />
     </span>
    )}
   </span>
   <span style={caption}>{name}</span>
  </>
 );

 const shell = { padding: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' };

 if (locked) {
  return <span style={{ ...shell, cursor: 'default' }} aria-disabled="true" title="Locked — earn this by completing missions">{body}</span>;
 }
 return (
  <button type="button" className="export-action hair-option" style={shell}
   aria-pressed={selected} onClick={() => onPick(name)}>
   {body}
  </button>
 );
}

export function Customizer({ hair, skin, outfit, shoes, accessories, onSelect, onToggleAccessory }) {
 const [tab, setTab] = useState('Hair');
 const panel = panels[tab];
 const current = { hair, skin, outfit, shoes };
 const unlocked = panel.options.filter(option => !option.locked).length;

 const isSelected = option => panel.multi
  ? accessories.includes(option.name)
  : current[panel.slot] === option.name;

 const pick = name => panel.multi ? onToggleAccessory(name) : onSelect(panel.slot, name);

 return (
  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex' }}>

   <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
    <div role="tablist" aria-label="Avatar customization" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex', flexWrap: 'wrap' }}>
     {tabs.map(name => {
      const active = tab === name;
      return (
       <button key={name} type="button" role="tab" aria-selected={active} className="export-action"
        onClick={() => setTab(name)}
        style={{ padding: '0 4px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
        <span style={{ color: active ? 'var(--text-primary, #1A1A1A)' : 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: 600, lineHeight: '22px' }}>{name}</span>
        <span style={{ alignSelf: 'stretch', height: 3, borderRadius: 2, background: active ? 'var(--brand-yellow, #FFD400)' : 'transparent' }} />
       </button>
      );
     })}
    </div>
    <div style={{ alignSelf: 'stretch', height: 1, background: 'var(--border-default, #E4E4E7)' }} />
   </div>

   <div style={{ alignSelf: 'stretch', padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
    <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', gap: 12, display: 'inline-flex', flexWrap: 'wrap' }}>
     <div style={{ color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: 600, lineHeight: '22px' }}>{panel.title}</div>
     <div style={{ color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: 500, lineHeight: '16px', letterSpacing: 0.02 }}>
      {unlocked} of {panel.options.length} unlocked{panel.multi ? ' · tap to toggle' : ''}
     </div>
    </div>
    <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>
     {panel.options.map(option => (
      <Tile key={option.name} option={option} selected={isSelected(option)} onPick={pick} />
     ))}
    </div>
   </div>
  </div>
 );
}

export function Equipped({ hair, skin, outfit, shoes, accessories }) {
 const rows = [
  ['Hair', hairEquippedNames[hair] || hair],
  ['Skin tone', skin],
  ['Outfit', outfit],
  ['Shoes', shoes],
  ['Accessories', accessories.length ? accessories.join(', ') : 'None'],
 ];
 return (
  <div style={{ alignSelf: 'stretch', padding: 20, background: 'var(--bg-card, white)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
   <div style={{ color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66 }}>Currently equipped</div>
   {rows.map(([label, value]) => (
    <div key={label} style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
     <div style={{ color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22px', flexShrink: 0 }}>{label}</div>
     <div style={{ color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: 600, lineHeight: '22px', textAlign: 'right' }}>{value}</div>
    </div>
   ))}
  </div>
 );
}
