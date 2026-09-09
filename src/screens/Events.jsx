export default function Events() {
 return (
<div style={{width: '100%', height: '100%', background: 'var(--bg-page, #F7F7F8)', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div style={{width: 248, alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, paddingTop: 32, paddingBottom: 32, background: 'var(--bg-sidebar, #0A0A0A)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
        <div style={{paddingBottom: 24, paddingLeft: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{width: 30, height: 40, position: 'relative', overflow: 'hidden'}}>
                <div style={{width: 16, height: 36, left: 2, top: 2, position: 'absolute', background: '#FFD400'}} />
                <div style={{width: 16, height: 36, left: 12, top: 2, position: 'absolute', background: '#FFD400'}} />
            </div>
            <div style={{color: 'var(--white, white)', fontSize: 15, fontFamily: 'Archivo', fontWeight: '800', lineHeight: '18px', letterSpacing: 0.30, wordWrap: 'break-word'}}>AI GARAGE</div>
        </div>
        <div style={{alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex'}}>
            <div data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="home" style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 18, height: 7.50, left: 3, top: 3, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 14, height: 11.50, left: 5, top: 9.50, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} />
                </div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Home</div>
            </div>
            <div data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="missions" style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 16, height: 16, left: 4, top: 4, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 6.80, height: 6.80, left: 8.60, top: 8.60, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} />
                </div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Missions</div>
            </div>
            <div data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="community" style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 6.40, height: 6.40, left: 5.80, top: 4.80, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 11, height: 5.50, left: 3.50, top: 14.50, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 2.23, height: 5.80, left: 16, top: 6.20, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 3, height: 5.20, left: 14.50, top: 14.80, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                </div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Community</div>
            </div>
            <div data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="leaderboard" style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 12, height: 10, left: 6, top: 4, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 3.50, height: 5.50, left: 3.50, top: 6, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 3.50, height: 5.50, left: 17, top: 6, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                </div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Leaderboard</div>
            </div>
            <div data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="garage" style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 18, height: 6, left: 3, top: 4, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 14, height: 10, left: 5, top: 10, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 8, height: 6, left: 8, top: 14, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                </div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>My Garage</div>
            </div>
            <div data-state="Active" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'var(--brand-yellow, #FFD400)', borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="events" style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 17, height: 16, left: 3.50, top: 5, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 8, height: 4, left: 8, top: 3, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                </div>
                <div style={{flex: '1 1 0', color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Events</div>
            </div>
        </div>
        <div style={{width: 10, flex: '1 1 0'}} />
        <div style={{color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', wordWrap: 'break-word'}}>Renault GBS · Concept</div>
    </div>
    <div style={{flex: '1 1 0', paddingTop: 40, paddingBottom: 44, paddingLeft: 44, paddingRight: 44, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 32, fontFamily: 'Archivo', fontWeight: '800', lineHeight: '38px', wordWrap: 'break-word'}}>Events</div>
            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Meet colleagues from all five countries. Learn, build, and share what you&apos;re doing with AI.</div>
        </div>
        <div style={{alignSelf: 'stretch', paddingLeft: 36, paddingRight: 36, paddingTop: 32, paddingBottom: 32, background: 'var(--black, #0A0A0A)', boxShadow: '0px 10px 28px -6px rgba(15.30, 15.30, 20.40, 0.10)', overflow: 'hidden', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'inline-flex'}}>
                <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: 'var(--black, #0A0A0A)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, wordWrap: 'break-word'}}>Featured · Summit</div>
                </div>
                <div style={{color: 'var(--text-on-dark, white)', fontSize: 24, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '30px', wordWrap: 'break-word'}}>AI Summit 2026</div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>A full day of keynotes, demos and hands-on labs across Türkiye, France, Romania, India and Colombia. Hybrid — join in person or online.</div>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div data-name="clock" style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 11.33, height: 11.33, left: 2.33, top: 2.33, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 2.33, height: 5, left: 8, top: 4.67, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-on-dark, white)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>5 March 2026 · 09:00–17:00 · Hybrid</div>
                </div>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 14, display: 'inline-flex'}}>
                    <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{width: 30, height: 30, background: 'var(--brand-yellow, #FFD400)', borderRadius: 9999, border: '2px var(--black, #0A0A0A) solid'}} />
                        <div style={{width: 30, height: 30, background: 'var(--text-secondary, #6B6B70)', borderRadius: 9999, border: '2px var(--black, #0A0A0A) solid'}} />
                        <div style={{width: 30, height: 30, background: 'var(--brand-yellow, #FFD400)', borderRadius: 9999, border: '2px var(--black, #0A0A0A) solid'}} />
                        <div style={{width: 30, height: 30, background: 'var(--text-secondary, #6B6B70)', borderRadius: 9999, border: '2px var(--black, #0A0A0A) solid'}} />
                        <div style={{width: 30, height: 30, background: 'var(--brand-yellow, #FFD400)', borderRadius: 9999, border: '2px var(--black, #0A0A0A) solid'}} />
                    </div>
                    <div style={{color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>+412 colleagues registered</div>
                </div>
                <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 15, paddingBottom: 15, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div style={{color: 'var(--brand-on-yellow, #0A0A0A)', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: '20px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Register</div>
                </div>
            </div>
            <div style={{width: 300, height: 240, background: '#1A1A1A', overflow: 'hidden', borderRadius: 16, outline: '1.50px var(--brand-yellow, #FFD400) solid', outlineOffset: '-1.50px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div data-name="sparkle" style={{width: 120, height: 120, position: 'relative'}}>
                    <div style={{width: 70, height: 70, left: 25, top: 15, position: 'absolute', outline: '1.90px var(--brand-yellow, #FFD400) solid', outlineOffset: '-0.95px'}} />
                </div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
            <div data-state="Selected" style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: 'var(--black, #0A0A0A)', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{color: 'var(--text-on-dark, white)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>All</div>
            </div>
            <div data-state="Default" style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: 'var(--bg-card, white)', borderRadius: 999, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Summit</div>
            </div>
            <div data-state="Default" style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: 'var(--bg-card, white)', borderRadius: 999, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Hackathon</div>
            </div>
            <div data-state="Default" style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: 'var(--bg-card, white)', borderRadius: 999, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Training</div>
            </div>
            <div data-state="Default" style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: 'var(--bg-card, white)', borderRadius: 999, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Social</div>
            </div>
            <div data-state="Default" style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: 'var(--bg-card, white)', borderRadius: 999, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Show &amp; Tell</div>
            </div>
        </div>
        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Upcoming events</div>
        <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex', flexWrap: 'wrap', alignContent: 'flex-start'}}>
            <div data-state="Default" style={{width: 536, padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--black, #0A0A0A)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: 'var(--white, white)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, wordWrap: 'break-word'}}>Hackathon</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>AI Agent Hackathon</div>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div data-name="clock" style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 11.33, height: 11.33, left: 2.33, top: 2.33, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 2.33, height: 5, left: 8, top: 4.67, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>12 September · 14:00</div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Build an AI agent with your team in one afternoon. All levels welcome.</div>
                <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{width: 26, height: 26, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                        <div style={{width: 26, height: 26, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                        <div style={{width: 26, height: 26, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>+24 going</div>
                    <div style={{paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div style={{color: 'var(--brand-on-yellow, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Join</div>
                    </div>
                </div>
            </div>
            <div data-state="Registered" style={{width: 536, padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--black, #0A0A0A)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: 'var(--white, white)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, wordWrap: 'break-word'}}>Social</div>
                    </div>
                    <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--success-soft, #E4F6EE)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: 'var(--success, #1FA971)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>Registered</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>AI Coffee Chat</div>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div data-name="clock" style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 11.33, height: 11.33, left: 2.33, top: 2.33, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 2.33, height: 5, left: 8, top: 4.67, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>18 September · 10:00</div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Informal 30-minute call to swap prompts and small wins. Bring a coffee.</div>
                <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{width: 26, height: 26, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                        <div style={{width: 26, height: 26, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                        <div style={{width: 26, height: 26, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>+16 going</div>
                    <div style={{paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: 'var(--bg-card-alt, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Registered</div>
                    </div>
                </div>
            </div>
            <div data-state="Default" style={{width: 536, padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--black, #0A0A0A)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: 'var(--white, white)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, wordWrap: 'break-word'}}>Show &amp; Tell</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Show &amp; Tell: Reporting</div>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div data-name="clock" style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 11.33, height: 11.33, left: 2.33, top: 2.33, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 2.33, height: 5, left: 8, top: 4.67, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>24 September · 15:00</div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Three colleagues demo how they automated a weekly report. 5 min each.</div>
                <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{width: 26, height: 26, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                        <div style={{width: 26, height: 26, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                        <div style={{width: 26, height: 26, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>+38 going</div>
                    <div style={{paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div style={{color: 'var(--brand-on-yellow, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Join</div>
                    </div>
                </div>
            </div>
            <div data-state="Default" style={{width: 536, padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--black, #0A0A0A)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: 'var(--white, white)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, wordWrap: 'break-word'}}>Training</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Microsoft Copilot Training</div>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div data-name="clock" style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 11.33, height: 11.33, left: 2.33, top: 2.33, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 2.33, height: 5, left: 8, top: 4.67, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>1 October · 11:00</div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Guided session from IT on Copilot in Word, Excel and Teams. Beginner friendly.</div>
                <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{width: 26, height: 26, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                        <div style={{width: 26, height: 26, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                        <div style={{width: 26, height: 26, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>+64 going</div>
                    <div style={{paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div style={{color: 'var(--brand-on-yellow, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Join</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 );
}
