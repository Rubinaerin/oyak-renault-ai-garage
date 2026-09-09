import React, { useId } from 'react';

export function RenaultLogo({ size = 30 }) {
 return (
  <svg width={size} height={size * 40 / 30} viewBox="0 0 30 40" role="img" aria-label="Renault" style={{ flexShrink: 0, display: 'block' }}>
   <path d="M15 3 L26.5 20 L15 37 L3.5 20 Z" fill="none" stroke="#FFD400" strokeWidth="3.4" strokeLinejoin="miter" />
  </svg>
 );
}

const flags = {
 'Türkiye': (
  <>
   <rect width="24" height="16" fill="#E30A17" />
   <circle cx="9" cy="8" r="4.4" fill="#fff" />
   <circle cx="10.4" cy="8" r="3.5" fill="#E30A17" />
   <path d="M14.4 8 L16.2 8.6 L15.1 7.1 L15.1 8.9 L16.2 7.4 Z" fill="#fff" />
  </>
 ),
 'France': (
  <>
   <rect width="8" height="16" fill="#002654" />
   <rect x="8" width="8" height="16" fill="#fff" />
   <rect x="16" width="8" height="16" fill="#CE1126" />
  </>
 ),
 'Romania': (
  <>
   <rect width="8" height="16" fill="#002B7F" />
   <rect x="8" width="8" height="16" fill="#FCD116" />
   <rect x="16" width="8" height="16" fill="#CE1126" />
  </>
 ),
 'India': (
  <>
   <rect width="24" height="5.33" fill="#FF9933" />
   <rect y="5.33" width="24" height="5.34" fill="#fff" />
   <rect y="10.67" width="24" height="5.33" fill="#138808" />
   <circle cx="12" cy="8" r="2.1" fill="none" stroke="#000080" strokeWidth="0.8" />
   <circle cx="12" cy="8" r="0.5" fill="#000080" />
  </>
 ),
 'Colombia': (
  <>
   <rect width="24" height="8" fill="#FCD116" />
   <rect y="8" width="24" height="4" fill="#003893" />
   <rect y="12" width="24" height="4" fill="#CE1126" />
  </>
 ),
};

export function Flag({ country, width = 24, height = 17 }) {
 const art = flags[country];
 return (
  <svg width={width} height={height} viewBox="0 0 24 16" preserveAspectRatio="none" role="img" aria-label={country || 'Flag'}
   style={{ flexShrink: 0, borderRadius: 3, display: 'block', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.12)' }}>
   {art || <rect width="24" height="16" fill="#C7C7CC" />}
  </svg>
 );
}

export const skinTones = {
 'Light':  { base: '#F8DCC0', shade: '#EFCBA8', blush: '#F0A79E', nose: '#D19A6A' },
 'Medium': { base: '#F6D2AE', shade: '#F0C89E', blush: '#F2A9A0', nose: '#C98A5B' },
 'Tan':    { base: '#E0AC7E', shade: '#D19C6D', blush: '#D98C7E', nose: '#A9713F' },
 'Brown':  { base: '#B87A4F', shade: '#A76B42', blush: '#A9604E', nose: '#7E4A28' },
 'Deep':   { base: '#7D4E31', shade: '#6C4128', blush: '#6E3A2C', nose: '#4E2B15' },
};

export const outfits = {
 'Renault yellow jacket': { jacket: '#FFD400', collar: '#0A0A0A', badge: '#0A0A0A', mark: '#FFD400', legs: '#1A1A1A', edge: null },
 'Black racing jacket':   { jacket: '#1A1A1A', collar: '#FFD400', badge: '#FFD400', mark: '#0A0A0A', legs: '#0A0A0A', edge: null },
 'White team polo':       { jacket: '#FFFFFF', collar: '#FFD400', badge: '#0A0A0A', mark: '#FFD400', legs: '#3A3A40', edge: '#D8D8DC' },
 'Blue mechanic overall': { jacket: '#2F4B8F', collar: '#FFD400', badge: '#FFD400', mark: '#0A0A0A', legs: '#2A4079', edge: null },
};

export const shoeStyles = {
 'Yellow-trim sneakers': { upper: '#FFFFFF', sole: '#FFD400' },
 'Black boots':          { upper: '#1A1A1A', sole: '#6B6B70' },
 'White runners':        { upper: '#FFFFFF', sole: '#C7C7CC' },
};

export const hairEquippedNames = {
 'Tousled': 'Tousled brown',
 'Buzz cut': 'Buzz cut',
 'Long hair': 'Long hair',
};

const HAIR = '#3B2A1C';
const DARK = '#2A1D12';

export function Avatar({
 width = 188, height = 242,
 hair = 'Tousled', skin = 'Medium', outfit = 'Renault yellow jacket',
 shoes = 'Yellow-trim sneakers', accessories = [], style,
}) {
 const clipId = 'buzz-' + useId().replace(/[^a-zA-Z0-9]/g, '');
 const tone = skinTones[skin] || skinTones.Medium;
 const fit = outfits[outfit] || outfits['Renault yellow jacket'];
 const shoe = shoeStyles[shoes] || shoeStyles['Yellow-trim sneakers'];
 const worn = Array.isArray(accessories) ? accessories : [];
 const described = [hair, skin, outfit, shoes, ...worn].join(', ');

 return (
  <svg width={width} height={height} viewBox="0 0 188 242" role="img" aria-label={`Avatar: ${described}`} style={style}>

   <ellipse cx="94" cy="222" rx="58" ry="11" fill="#000" opacity=".1" />

   <rect x="75" y="164" width="17" height="52" rx="6" fill={fit.legs} />
   <rect x="96" y="164" width="17" height="52" rx="6" fill={fit.legs} />

   <rect x="61" y="210" width="37" height="15" rx="7" fill={shoe.upper} />
   <rect x="90" y="210" width="37" height="15" rx="7" fill={shoe.upper} />
   <rect x="61" y="219" width="37" height="6" rx="3" fill={shoe.sole} />
   <rect x="90" y="219" width="37" height="6" rx="3" fill={shoe.sole} />

   <rect x="47" y="114" width="18" height="52" rx="9" fill={fit.jacket} stroke={fit.edge || 'none'} strokeWidth={fit.edge ? 1.4 : 0} />
   <rect x="123" y="114" width="18" height="52" rx="9" fill={fit.jacket} stroke={fit.edge || 'none'} strokeWidth={fit.edge ? 1.4 : 0} />
   <rect x="47" y="152" width="18" height="14" rx="7" fill="#0A0A0A" />
   <rect x="123" y="152" width="18" height="14" rx="7" fill="#0A0A0A" />

   <rect x="62" y="95" width="64" height="82" rx="16" fill={fit.jacket} stroke={fit.edge || 'none'} strokeWidth={fit.edge ? 1.4 : 0} />

   <path d="M80 98 L94 111 L108 98" fill="none" stroke={fit.collar} strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />

   <rect x="99" y="121" width="22" height="22" rx="6" fill={fit.badge} />
   <path d="M110 126 L115.5 132 L110 138 L104.5 132 Z" fill="none" stroke={fit.mark} strokeWidth="2.6" />

   <rect x="85" y="86" width="18" height="16" rx="5" fill={tone.shade} />

   <ellipse cx="45" cy="60" rx="7" ry="9.5" fill={tone.base} />
   <ellipse cx="143" cy="60" rx="7" ry="9.5" fill={tone.base} />

   <rect x="44" y="11" width="100" height="94" rx="42" fill={tone.base} />

   {hair === 'Buzz cut' ? (
    <g>
     <defs>
      <clipPath id={clipId}>
       <path d="M44 11 H144 V38 Q94 50 44 38 Z" />
      </clipPath>
     </defs>
     <g clipPath={`url(#${clipId})`}>
      <rect x="44" y="11" width="100" height="94" rx="42" fill={HAIR} />
     </g>
     <path d="M48 40 v13" stroke={HAIR} strokeWidth="6" strokeLinecap="round" />
     <path d="M140 40 v13" stroke={HAIR} strokeWidth="6" strokeLinecap="round" />
    </g>
   ) : (
    <g fill={HAIR}>
     {hair === 'Long hair' && (
      <>
       <rect x="37" y="42" width="17" height="62" rx="8.5" />
       <rect x="134" y="42" width="17" height="62" rx="8.5" />
      </>
     )}
     <circle cx="58" cy="34" r="21" />
     <circle cx="80" cy="24" r="23" />
     <circle cx="107" cy="22" r="24" />
     <circle cx="130" cy="34" r="21" />
     <circle cx="47" cy="49" r="13" />
     <circle cx="141" cy="49" r="13" />
     <rect x="47" y="30" width="94" height="18" rx="9" />
    </g>
   )}

   <path d="M65 47 h18" stroke={DARK} strokeWidth="4.2" strokeLinecap="round" />
   <path d="M105 47 h18" stroke={DARK} strokeWidth="4.2" strokeLinecap="round" />

   <rect x="62" y="53" width="23" height="26" rx="11.5" fill="#fff" />
   <rect x="103" y="53" width="23" height="26" rx="11.5" fill="#fff" />
   <circle cx="75" cy="67" r="7.2" fill={DARK} />
   <circle cx="114" cy="67" r="7.2" fill={DARK} />
   <circle cx="72.4" cy="63.8" r="2.4" fill="#fff" />
   <circle cx="111.4" cy="63.8" r="2.4" fill="#fff" />

   <ellipse cx="61" cy="78" rx="6.5" ry="4.2" fill={tone.blush} opacity=".6" />
   <ellipse cx="127" cy="78" rx="6.5" ry="4.2" fill={tone.blush} opacity=".6" />
   <circle cx="94" cy="74" r="2.1" fill={tone.nose} />

   <path d="M83 83 q11 9 22 0" fill="none" stroke={DARK} strokeWidth="4" strokeLinecap="round" />

   {worn.includes('Glasses') && (
    <g stroke={DARK} strokeWidth="3" fill="#EAF2FF" fillOpacity=".35">
     <rect x="59.5" y="53.5" width="29" height="25" rx="9" />
     <rect x="99.5" y="53.5" width="29" height="25" rx="9" />
     <path d="M88.5 63 h11" strokeLinecap="round" fill="none" />
     <path d="M59.5 61 h-11" strokeLinecap="round" fill="none" />
     <path d="M128.5 61 h11" strokeLinecap="round" fill="none" />
    </g>
   )}

   {worn.includes('Watch') && (
    <g>
     <rect x="44" y="141" width="24" height="9" rx="3" fill="#0A0A0A" />
     <circle cx="56" cy="145.5" r="5" fill="#1A1A1A" stroke="#FFD400" strokeWidth="1.8" />
     <path d="M56 145.5 v-2.4" stroke="#FFD400" strokeWidth="1.1" strokeLinecap="round" />
    </g>
   )}
  </svg>
 );
}

export function Initials({ name, size = 30, style }) {
 const letters = name.split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase();
 return (
  <span aria-hidden="true" style={{
   ...style,
   display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
   fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700,
   fontSize: Math.max(9, Math.round(size * 0.38)), lineHeight: 1,
   color: '#7A5C00', letterSpacing: .2,
  }}>{letters}</span>
 );
}
