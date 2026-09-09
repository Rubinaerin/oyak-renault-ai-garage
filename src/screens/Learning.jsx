// Learning page — video card grid with XP rewards, progress bars, and series indicators.
// Styled to match the Figma-export inline-style pattern used across the app.
export default function Learning() {
 return (
<div style={{width: '100%', height: '100%', background: 'var(--bg-page, #F7F7F8)', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>

  {/* ── Sidebar (stripped by App.jsx enhance, kept for structural parity) ── */}
  <div style={{width: 248, alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, paddingTop: 32, paddingBottom: 32, background: 'var(--bg-sidebar, #0A0A0A)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
    <div style={{paddingBottom: 24, paddingLeft: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div style={{width: 30, height: 40, position: 'relative', overflow: 'hidden'}}>
        <div style={{width: 16, height: 36, left: 2, top: 2, position: 'absolute', background: '#FFD400'}} />
        <div style={{width: 16, height: 36, left: 12, top: 2, position: 'absolute', background: '#FFD400'}} />
      </div>
      <div style={{color: 'var(--white, white)', fontSize: 15, fontFamily: 'Archivo', fontWeight: '800', lineHeight: '18px', letterSpacing: 0.30}}>AI GARAGE</div>
    </div>
    <div style={{alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex'}}>
      {[['home','Home'],['missions','Missions'],['community','Community'],['leaderboard','Leaderboard'],['garage','My Garage'],['events','Events'],['projects','Projects']].map(([,label])=>(
        <div key={label} data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px'}}>{label}</div>
        </div>
      ))}
      <div data-state="Active" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'var(--brand-yellow, #FFD400)', borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
        <div style={{flex: '1 1 0', color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px'}}>Learning</div>
      </div>
    </div>
    <div style={{width: 10, flex: '1 1 0'}} />
    <div style={{color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px'}}>Renault GBS · Concept</div>
  </div>

  {/* ── Main content ── */}
  <div style={{flex: '1 1 0', paddingTop: 40, paddingBottom: 44, paddingLeft: 44, paddingRight: 44, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>

    {/* Page header */}
    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div style={{flexDirection: 'column', gap: 8, display: 'flex'}}>
        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 32, fontFamily: 'Archivo', fontWeight: '800', lineHeight: '38px'}}>Learning</div>
        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px'}}>Watch tutorials, earn XP, and level up your AI skills at your own pace.</div>
      </div>
      {/* XP summary pill */}
      <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
        <div data-name="star" style={{width: 16, height: 16, position: 'relative'}}><div style={{width: 9.33, height: 9.33, left: 3.33, top: 2, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px'}} /></div>
        <div style={{color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>55 XP available from videos</div>
      </div>
    </div>

    {/* Department filter pills */}
    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex', flexWrap: 'wrap'}}>
      {[['All','selected'],['AI Basics',''],['Finance',''],['Reporting',''],['Data Analysis',''],['Communication',''],['AI Safety',''],['Productivity','']].map(([label, state])=>(
        <div key={label} data-state={state==='selected'?'Selected':'Default'} style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: state==='selected'?'var(--black, #0A0A0A)':'var(--bg-card, white)', borderRadius: 999, outline: state==='selected'?'none':'1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
          <div style={{color: state==='selected'?'var(--text-on-dark, white)':'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>{label}</div>
        </div>
      ))}
    </div>

    {/* ── Video card grid ── */}
    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex', flexWrap: 'wrap', alignContent: 'flex-start'}}>

      {/* ─ Card 1: Prompting 101 — 60% progress ─ */}
      <div style={{width: 340, background: 'var(--bg-card, white)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', boxShadow: '0px 4px 12px -2px rgba(15,15,20,0.08)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', overflow: 'hidden', display: 'inline-flex'}}>
        {/* Cover */}
        <div style={{alignSelf: 'stretch', height: 160, background: '#1A1A2E', position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', flexShrink: 0}}>
          <div style={{width: 48, height: 48, background: 'rgba(255,212,0,0.15)', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div data-name="play" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 14, height: 14, left: 5, top: 5, position: 'absolute', outline: '1.90px #FFD400 solid', outlineOffset: '-0.95px'}} /></div>
          </div>
          {/* Duration */}
          <div style={{position: 'absolute', bottom: 36, right: 10, paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'rgba(0,0,0,0.65)', borderRadius: 6}}>
            <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>18 min</div>
          </div>
          {/* Progress bar */}
          <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(255,255,255,0.15)'}}>
            <div style={{width: '60%', height: '100%', background: 'var(--brand-yellow, #FFD400)'}} />
          </div>
        </div>
        {/* Body */}
        <div style={{alignSelf: 'stretch', padding: 20, flexDirection: 'column', gap: 12, display: 'flex'}}>
          {/* Tag row */}
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex', flexWrap: 'wrap'}}>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--black, #0A0A0A)', borderRadius: 999}}>
              <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>AI Basics</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 999}}>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>Beginner</div>
            </div>
            {/* XP badge */}
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
              <div data-name="star" style={{width: 12, height: 12, position: 'relative'}}><div style={{width: 7, height: 7, left: 2.5, top: 1.5, position: 'absolute', outline: '1.50px #92700A solid', outlineOffset: '-0.75px'}} /></div>
              <div style={{color: '#92700A', fontSize: 11, fontFamily: 'Inter', fontWeight: '700', lineHeight: '14px'}}>+15 XP</div>
            </div>
            {/* Progress label */}
            <div style={{marginLeft: 'auto', color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>60% done</div>
          </div>
          {/* Title + description */}
          <div style={{flexDirection: 'column', gap: 6, display: 'flex'}}>
            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '22px'}}>Prompting 101</div>
            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px'}}>Learn the fundamentals of writing clear, effective prompts for any AI tool — with real examples from day-to-day work.</div>
          </div>
          {/* Instructor */}
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{width: 28, height: 28, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, flexShrink: 0}} />
            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
              <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Rahul Nair</div>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>AI Champion · Productivity</div>
            </div>
          </div>
          {/* CTA */}
          <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, background: 'var(--brand-yellow, #FFD400)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>Watch Video</div>
          </div>
        </div>
      </div>

      {/* ─ Card 2: AI for Finance Part I — 100% completed ─ */}
      <div style={{width: 340, background: 'var(--bg-card, white)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', boxShadow: '0px 4px 12px -2px rgba(15,15,20,0.08)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', overflow: 'hidden', display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 160, background: '#0D2137', position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', flexShrink: 0}}>
          <div style={{width: 48, height: 48, background: 'rgba(31,169,113,0.15)', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div data-name="check" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 14, height: 14, left: 5, top: 5, position: 'absolute', outline: '1.90px #1FA971 solid', outlineOffset: '-0.95px'}} /></div>
          </div>
          <div style={{position: 'absolute', top: 10, right: 10, paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--success-soft, #E4F6EE)', borderRadius: 999}}>
            <div style={{color: 'var(--success, #1FA971)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>Completed</div>
          </div>
          <div style={{position: 'absolute', bottom: 36, right: 10, paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'rgba(0,0,0,0.65)', borderRadius: 6}}>
            <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>24 min</div>
          </div>
          <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(255,255,255,0.15)'}}>
            <div style={{width: '100%', height: '100%', background: 'var(--success, #1FA971)'}} />
          </div>
        </div>
        <div style={{alignSelf: 'stretch', padding: 20, flexDirection: 'column', gap: 12, display: 'flex'}}>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex', flexWrap: 'wrap'}}>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--black, #0A0A0A)', borderRadius: 999}}>
              <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>Finance</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 999}}>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>Intermediate</div>
            </div>
            {/* Series indicator */}
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: '#EEF2FF', borderRadius: 999}}>
              <div style={{color: '#4F46E5', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>Part 1 of 2</div>
            </div>
            {/* XP earned */}
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--success-soft, #E4F6EE)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
              <div data-name="check" style={{width: 12, height: 12, position: 'relative'}}><div style={{width: 7, height: 7, left: 2.5, top: 2.5, position: 'absolute', outline: '1.50px #1FA971 solid', outlineOffset: '-0.75px'}} /></div>
              <div style={{color: 'var(--success, #1FA971)', fontSize: 11, fontFamily: 'Inter', fontWeight: '700', lineHeight: '14px'}}>+25 XP earned</div>
            </div>
          </div>
          <div style={{flexDirection: 'column', gap: 6, display: 'flex'}}>
            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '22px'}}>AI for Finance: Part I</div>
            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px'}}>Automate budget commentary, spot anomalies in spreadsheets, and draft variance explanations using Copilot.</div>
          </div>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{width: 28, height: 28, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999, flexShrink: 0}} />
            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
              <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Amélie Laurent</div>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>AI Champion · Reporting</div>
            </div>
          </div>
          <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>Rewatch</div>
          </div>
        </div>
      </div>

      {/* ─ Card 3: AI for Finance Part II — 35% progress ─ */}
      <div style={{width: 340, background: 'var(--bg-card, white)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', boxShadow: '0px 4px 12px -2px rgba(15,15,20,0.08)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', overflow: 'hidden', display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 160, background: '#0D2137', position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', flexShrink: 0}}>
          <div style={{width: 48, height: 48, background: 'rgba(255,212,0,0.15)', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div data-name="play" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 14, height: 14, left: 5, top: 5, position: 'absolute', outline: '1.90px #FFD400 solid', outlineOffset: '-0.95px'}} /></div>
          </div>
          <div style={{position: 'absolute', bottom: 36, right: 10, paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'rgba(0,0,0,0.65)', borderRadius: 6}}>
            <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>27 min</div>
          </div>
          <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(255,255,255,0.15)'}}>
            <div style={{width: '35%', height: '100%', background: 'var(--brand-yellow, #FFD400)'}} />
          </div>
        </div>
        <div style={{alignSelf: 'stretch', padding: 20, flexDirection: 'column', gap: 12, display: 'flex'}}>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex', flexWrap: 'wrap'}}>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--black, #0A0A0A)', borderRadius: 999}}>
              <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>Finance</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 999}}>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>Intermediate</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: '#EEF2FF', borderRadius: 999}}>
              <div style={{color: '#4F46E5', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>Part 2 of 2</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
              <div data-name="star" style={{width: 12, height: 12, position: 'relative'}}><div style={{width: 7, height: 7, left: 2.5, top: 1.5, position: 'absolute', outline: '1.50px #92700A solid', outlineOffset: '-0.75px'}} /></div>
              <div style={{color: '#92700A', fontSize: 11, fontFamily: 'Inter', fontWeight: '700', lineHeight: '14px'}}>+25 XP</div>
            </div>
            <div style={{marginLeft: 'auto', color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>35% done</div>
          </div>
          <div style={{flexDirection: 'column', gap: 6, display: 'flex'}}>
            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '22px'}}>AI for Finance: Part II</div>
            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px'}}>Build on Part I — create forecast narratives, automate recurring slides, and review contracts faster with AI assistance.</div>
          </div>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{width: 28, height: 28, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999, flexShrink: 0}} />
            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
              <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Amélie Laurent</div>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>AI Champion · Reporting</div>
            </div>
          </div>
          <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, background: 'var(--brand-yellow, #FFD400)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>Watch Video</div>
          </div>
        </div>
      </div>

      {/* ─ Card 4: Automating Weekly Reports — 0% (not started) ─ */}
      <div style={{width: 340, background: 'var(--bg-card, white)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', boxShadow: '0px 4px 12px -2px rgba(15,15,20,0.08)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', overflow: 'hidden', display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 160, background: '#1C1A0F', position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', flexShrink: 0}}>
          <div style={{width: 48, height: 48, background: 'rgba(255,212,0,0.15)', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div data-name="play" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 14, height: 14, left: 5, top: 5, position: 'absolute', outline: '1.90px #FFD400 solid', outlineOffset: '-0.95px'}} /></div>
          </div>
          <div style={{position: 'absolute', bottom: 36, right: 10, paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'rgba(0,0,0,0.65)', borderRadius: 6}}>
            <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>21 min</div>
          </div>
          {/* 0% — track only */}
          <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(255,255,255,0.15)'}} />
        </div>
        <div style={{alignSelf: 'stretch', padding: 20, flexDirection: 'column', gap: 12, display: 'flex'}}>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex', flexWrap: 'wrap'}}>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--black, #0A0A0A)', borderRadius: 999}}>
              <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>Reporting</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 999}}>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>Beginner</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
              <div data-name="star" style={{width: 12, height: 12, position: 'relative'}}><div style={{width: 7, height: 7, left: 2.5, top: 1.5, position: 'absolute', outline: '1.50px #92700A solid', outlineOffset: '-0.75px'}} /></div>
              <div style={{color: '#92700A', fontSize: 11, fontFamily: 'Inter', fontWeight: '700', lineHeight: '14px'}}>+15 XP</div>
            </div>
          </div>
          <div style={{flexDirection: 'column', gap: 6, display: 'flex'}}>
            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '22px'}}>Automating Weekly Reports</div>
            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px'}}>A step-by-step walkthrough of the prompt chain that turns raw status notes into a formatted weekly report in under five minutes.</div>
          </div>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{width: 28, height: 28, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, flexShrink: 0}} />
            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
              <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Ana Popescu</div>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>Community · Reporting</div>
            </div>
          </div>
          <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, background: 'var(--brand-yellow, #FFD400)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>Watch Video</div>
          </div>
        </div>
      </div>

      {/* ─ Card 5: Copilot for Data Analysis — 0% (not started) ─ */}
      <div style={{width: 340, background: 'var(--bg-card, white)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', boxShadow: '0px 4px 12px -2px rgba(15,15,20,0.08)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', overflow: 'hidden', display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 160, background: '#0A1628', position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', flexShrink: 0}}>
          <div style={{width: 48, height: 48, background: 'rgba(255,212,0,0.15)', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div data-name="play" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 14, height: 14, left: 5, top: 5, position: 'absolute', outline: '1.90px #FFD400 solid', outlineOffset: '-0.95px'}} /></div>
          </div>
          <div style={{position: 'absolute', bottom: 36, right: 10, paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'rgba(0,0,0,0.65)', borderRadius: 6}}>
            <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>32 min</div>
          </div>
          <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(255,255,255,0.15)'}} />
        </div>
        <div style={{alignSelf: 'stretch', padding: 20, flexDirection: 'column', gap: 12, display: 'flex'}}>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex', flexWrap: 'wrap'}}>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--black, #0A0A0A)', borderRadius: 999}}>
              <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>Data Analysis</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 999}}>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>Intermediate</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
              <div data-name="star" style={{width: 12, height: 12, position: 'relative'}}><div style={{width: 7, height: 7, left: 2.5, top: 1.5, position: 'absolute', outline: '1.50px #92700A solid', outlineOffset: '-0.75px'}} /></div>
              <div style={{color: '#92700A', fontSize: 11, fontFamily: 'Inter', fontWeight: '700', lineHeight: '14px'}}>+25 XP</div>
            </div>
          </div>
          <div style={{flexDirection: 'column', gap: 6, display: 'flex'}}>
            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '22px'}}>Copilot for Data Analysis</div>
            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px'}}>Use Copilot in Excel to clean datasets, write formulas in plain English, and generate summary charts without manual effort.</div>
          </div>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{width: 28, height: 28, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, flexShrink: 0}} />
            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
              <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Mert Demir</div>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>Community · Data Analysis</div>
            </div>
          </div>
          <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, background: 'var(--brand-yellow, #FFD400)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>Watch Video</div>
          </div>
        </div>
      </div>

      {/* ─ Card 6: Writing Better Emails with AI — 100% completed ─ */}
      <div style={{width: 340, background: 'var(--bg-card, white)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', boxShadow: '0px 4px 12px -2px rgba(15,15,20,0.08)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', overflow: 'hidden', display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 160, background: '#180A1C', position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', flexShrink: 0}}>
          <div style={{width: 48, height: 48, background: 'rgba(31,169,113,0.15)', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div data-name="check" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 14, height: 14, left: 5, top: 5, position: 'absolute', outline: '1.90px #1FA971 solid', outlineOffset: '-0.95px'}} /></div>
          </div>
          <div style={{position: 'absolute', top: 10, right: 10, paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--success-soft, #E4F6EE)', borderRadius: 999}}>
            <div style={{color: 'var(--success, #1FA971)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>Completed</div>
          </div>
          <div style={{position: 'absolute', bottom: 36, right: 10, paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'rgba(0,0,0,0.65)', borderRadius: 6}}>
            <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>16 min</div>
          </div>
          <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(255,255,255,0.15)'}}>
            <div style={{width: '100%', height: '100%', background: 'var(--success, #1FA971)'}} />
          </div>
        </div>
        <div style={{alignSelf: 'stretch', padding: 20, flexDirection: 'column', gap: 12, display: 'flex'}}>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex', flexWrap: 'wrap'}}>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--black, #0A0A0A)', borderRadius: 999}}>
              <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>Communication</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 999}}>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>Beginner</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--success-soft, #E4F6EE)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
              <div data-name="check" style={{width: 12, height: 12, position: 'relative'}}><div style={{width: 7, height: 7, left: 2.5, top: 2.5, position: 'absolute', outline: '1.50px #1FA971 solid', outlineOffset: '-0.75px'}} /></div>
              <div style={{color: 'var(--success, #1FA971)', fontSize: 11, fontFamily: 'Inter', fontWeight: '700', lineHeight: '14px'}}>+15 XP earned</div>
            </div>
          </div>
          <div style={{flexDirection: 'column', gap: 6, display: 'flex'}}>
            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '22px'}}>Writing Better Emails with AI</div>
            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px'}}>Techniques for drafting, toning, and condensing emails using AI — without losing your voice or sounding like a robot.</div>
          </div>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{width: 28, height: 28, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999, flexShrink: 0}} />
            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
              <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Rahul Nair</div>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>AI Champion · Productivity</div>
            </div>
          </div>
          <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>Rewatch</div>
          </div>
        </div>
      </div>

      {/* ─ Card 7: AI Safety Essentials — 0% (not started) ─ */}
      <div style={{width: 340, background: 'var(--bg-card, white)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', boxShadow: '0px 4px 12px -2px rgba(15,15,20,0.08)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', overflow: 'hidden', display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 160, background: '#0F1A0F', position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', flexShrink: 0}}>
          <div style={{width: 48, height: 48, background: 'rgba(255,212,0,0.15)', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div data-name="play" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 14, height: 14, left: 5, top: 5, position: 'absolute', outline: '1.90px #FFD400 solid', outlineOffset: '-0.95px'}} /></div>
          </div>
          <div style={{position: 'absolute', bottom: 36, right: 10, paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'rgba(0,0,0,0.65)', borderRadius: 6}}>
            <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>20 min</div>
          </div>
          <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(255,255,255,0.15)'}} />
        </div>
        <div style={{alignSelf: 'stretch', padding: 20, flexDirection: 'column', gap: 12, display: 'flex'}}>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex', flexWrap: 'wrap'}}>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--black, #0A0A0A)', borderRadius: 999}}>
              <div style={{color: 'white', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>AI Safety</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 999}}>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', lineHeight: '14px'}}>Beginner</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
              <div data-name="star" style={{width: 12, height: 12, position: 'relative'}}><div style={{width: 7, height: 7, left: 2.5, top: 1.5, position: 'absolute', outline: '1.50px #92700A solid', outlineOffset: '-0.75px'}} /></div>
              <div style={{color: '#92700A', fontSize: 11, fontFamily: 'Inter', fontWeight: '700', lineHeight: '14px'}}>+15 XP</div>
            </div>
          </div>
          <div style={{flexDirection: 'column', gap: 6, display: 'flex'}}>
            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '22px'}}>AI Safety Essentials</div>
            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px'}}>What every employee needs to know about data sensitivity, prompt safety, and responsible AI use at Renault GBS.</div>
          </div>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{width: 28, height: 28, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, flexShrink: 0}} />
            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
              <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Camila Rojas</div>
              <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>Community · AI Safety</div>
            </div>
          </div>
          <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, background: 'var(--brand-yellow, #FFD400)', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>Watch Video</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
 );
}
