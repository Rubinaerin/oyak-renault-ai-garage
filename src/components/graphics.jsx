import React from 'react';

// Renault elması — sidebar logosu. Figma çıktısında vektör yerine iki sarı blok gelmişti.
export function RenaultLogo({ size = 30 }) {
 return (
  <svg width={size} height={size * 40 / 30} viewBox="0 0 30 40" role="img" aria-label="Renault" style={{ flexShrink: 0, display: 'block' }}>
   <path d="M15 3 L26.5 20 L15 37 L3.5 20 Z" fill="none" stroke="#FFD400" strokeWidth="3.4" strokeLinejoin="miter" />
  </svg>
 );
}

// Ülke bayrakları. Windows flag emoji desteklemediği için SVG çiziyoruz.
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

// Avatar illüstrasyonu. Export'ta tüm şekiller köşe yarıçapını kaybettiği için
// tasarımdaki karakter yeniden SVG olarak çizildi.
export function Avatar({ width = 188, height = 242, style }) {
 return (
  <svg width={width} height={height} viewBox="0 0 188 242" role="img" aria-label="Avatar" style={style}>
   {/* zemin gölgesi */}
   <ellipse cx="94" cy="222" rx="58" ry="11" fill="#000" opacity=".1" />
   {/* bacaklar */}
   <rect x="75" y="164" width="17" height="52" rx="6" fill="#1A1A1A" />
   <rect x="96" y="164" width="17" height="52" rx="6" fill="#1A1A1A" />
   {/* ayakkabılar */}
   <rect x="61" y="210" width="37" height="15" rx="7" fill="#fff" />
   <rect x="90" y="210" width="37" height="15" rx="7" fill="#fff" />
   <rect x="61" y="219" width="37" height="6" rx="3" fill="#FFD400" />
   <rect x="90" y="219" width="37" height="6" rx="3" fill="#FFD400" />
   {/* kollar ve eldivenler */}
   <rect x="47" y="114" width="18" height="52" rx="9" fill="#FFD400" />
   <rect x="123" y="114" width="18" height="52" rx="9" fill="#FFD400" />
   <rect x="47" y="152" width="18" height="14" rx="7" fill="#0A0A0A" />
   <rect x="123" y="152" width="18" height="14" rx="7" fill="#0A0A0A" />
   {/* ceket */}
   <rect x="62" y="95" width="64" height="82" rx="16" fill="#FFD400" />
   {/* yaka */}
   <path d="M80 98 L94 111 L108 98" fill="none" stroke="#0A0A0A" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
   {/* göğüs logosu */}
   <rect x="99" y="121" width="22" height="22" rx="6" fill="#0A0A0A" />
   <path d="M110 126 L115.5 132 L110 138 L104.5 132 Z" fill="none" stroke="#FFD400" strokeWidth="2.6" />
   {/* boyun */}
   <rect x="85" y="86" width="18" height="16" rx="5" fill="#F0C89E" />
   {/* kulaklar */}
   <ellipse cx="45" cy="60" rx="7" ry="9.5" fill="#F6D2AE" />
   <ellipse cx="143" cy="60" rx="7" ry="9.5" fill="#F6D2AE" />
   {/* yüz */}
   <rect x="44" y="11" width="100" height="94" rx="42" fill="#F6D2AE" />
   {/* kıvırcık saç */}
   <g fill="#3B2A1C">
    <circle cx="58" cy="34" r="21" />
    <circle cx="80" cy="24" r="23" />
    <circle cx="107" cy="22" r="24" />
    <circle cx="130" cy="34" r="21" />
    <circle cx="47" cy="49" r="13" />
    <circle cx="141" cy="49" r="13" />
    <rect x="47" y="30" width="94" height="18" rx="9" />
   </g>
   {/* kaşlar */}
   <path d="M65 47 h18" stroke="#2A1D12" strokeWidth="4.2" strokeLinecap="round" />
   <path d="M105 47 h18" stroke="#2A1D12" strokeWidth="4.2" strokeLinecap="round" />
   {/* gözler */}
   <rect x="62" y="53" width="23" height="26" rx="11.5" fill="#fff" />
   <rect x="103" y="53" width="23" height="26" rx="11.5" fill="#fff" />
   <circle cx="75" cy="67" r="7.2" fill="#2A1D12" />
   <circle cx="114" cy="67" r="7.2" fill="#2A1D12" />
   <circle cx="72.4" cy="63.8" r="2.4" fill="#fff" />
   <circle cx="111.4" cy="63.8" r="2.4" fill="#fff" />
   {/* yanaklar ve burun */}
   <ellipse cx="61" cy="78" rx="6.5" ry="4.2" fill="#F2A9A0" opacity=".6" />
   <ellipse cx="127" cy="78" rx="6.5" ry="4.2" fill="#F2A9A0" opacity=".6" />
   <circle cx="94" cy="74" r="2.1" fill="#C98A5B" />
   {/* gülümseme */}
   <path d="M83 83 q11 9 22 0" fill="none" stroke="#2A1D12" strokeWidth="4" strokeLinecap="round" />
  </svg>
 );
}

// İsim baş harfleri — Community ve Top contributors avatar dairelerini dolduruyor.
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
