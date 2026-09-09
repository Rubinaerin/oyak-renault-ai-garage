export default function Home() {
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
            <div data-state="Active" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'var(--brand-yellow, #FFD400)', borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="home" style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 18, height: 7.50, left: 3, top: 3, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 14, height: 11.50, left: 5, top: 9.50, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                </div>
                <div style={{flex: '1 1 0', color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Home</div>
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
            <div data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="events" style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 17, height: 16, left: 3.50, top: 5, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 8, height: 4, left: 8, top: 3, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                </div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Events</div>
            </div>
        </div>
        <div style={{width: 10, flex: '1 1 0'}} />
        <div style={{color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', wordWrap: 'break-word'}}>Renault GBS · Concept</div>
    </div>
    <div style={{flex: '1 1 0', paddingTop: 40, paddingBottom: 44, paddingLeft: 44, paddingRight: 44, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 28, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 32, fontFamily: 'Archivo', fontWeight: '800', lineHeight: '38px', wordWrap: 'break-word'}}>Good morning, Deniz</div>
                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Make a difference with AI in just 5 minutes today.</div>
            </div>
            <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex'}}>
                <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: 'var(--bg-card, white)', borderRadius: 999, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                    <div data-name="star" style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 11.33, height: 10.87, left: 2.33, top: 2.33, position: 'absolute', outline: '1.90px var(--yellow-500, #FFD400) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>2,450 XP</div>
                </div>
                <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: 'var(--bg-card, white)', borderRadius: 999, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                    <div data-name="target" style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 11.33, height: 11.33, left: 2.33, top: 2.33, position: 'absolute', outline: '1.90px var(--yellow-500, #FFD400) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 6.40, height: 6.40, left: 4.80, top: 4.80, position: 'absolute', outline: '1.90px var(--yellow-500, #FFD400) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 1.87, height: 1.87, left: 7.07, top: 7.07, position: 'absolute', outline: '1.90px var(--yellow-500, #FFD400) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Level 7 · Practitioner</div>
                </div>
                <div style={{width: 40, height: 40, position: 'relative', background: 'var(--bg-card, white)', borderRadius: 999, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <div data-name="bell" style={{width: 20, height: 20, position: 'relative'}}>
                        <div style={{width: 13.33, height: 10, left: 3.33, top: 2.50, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 3.33, height: 1.67, left: 8.33, top: 16.67, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{width: 8, height: 8, left: 25, top: 7, position: 'absolute', background: 'var(--brand-yellow, #FFD400)', borderRadius: 9999}} />
                </div>
                <div style={{width: 40, height: 40, background: 'var(--bg-card, white)', borderRadius: 999, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <div style={{width: 24, height: 24, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999}} />
                </div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>150 XP until your next reward</div>
            <div style={{flex: '1 1 0', height: 10, background: 'var(--gray-100, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 360, height: 10, background: 'var(--brand-yellow, #FFD400)', borderRadius: 999}} />
            </div>
            <div data-name="star" style={{width: 20, height: 20, position: 'relative'}}>
                <div style={{width: 14.17, height: 13.58, left: 2.92, top: 2.92, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
            </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 440, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 28, display: 'inline-flex'}}>
            <div style={{width: 636, alignSelf: 'stretch', padding: 28, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', overflow: 'hidden', borderRadius: 20, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                    <div style={{width: 40, height: 40, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 12, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <div data-name="star" style={{width: 20, height: 20, position: 'relative'}}>
                            <div style={{width: 14.17, height: 13.58, left: 2.92, top: 2.92, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px'}} />
                        </div>
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, wordWrap: 'break-word'}}>Today&apos;s Mission</div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-primary, #1A1A1A)', fontSize: 24, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '30px', wordWrap: 'break-word'}}>Turn meeting notes into an action list</div>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                    <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: 'var(--bg-card-alt, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div data-name="clock" style={{width: 15, height: 15, position: 'relative'}}>
                            <div style={{width: 10.63, height: 10.63, left: 2.19, top: 2.19, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                            <div style={{width: 2.19, height: 4.69, left: 7.50, top: 4.38, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                        </div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>5 min</div>
                    </div>
                    <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: 'var(--brand-yellow-soft, #FFF6D6)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div data-name="star" style={{width: 15, height: 15, position: 'relative'}}>
                            <div style={{width: 10.63, height: 10.19, left: 2.19, top: 2.19, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                        </div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>+30 XP</div>
                    </div>
                </div>
                <div style={{paddingTop: 8, paddingBottom: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                    <div style={{width: 160, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                        <div style={{width: 30, height: 30, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>1</div>
                        </div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Learn</div>
                        <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>Explore the topic with a short brief</div>
                    </div>
                    <div style={{paddingTop: 14, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{width: 20, height: 2, position: 'relative', background: 'var(--border-strong, #C7C7CC)'}} />
                    </div>
                    <div style={{width: 160, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                        <div style={{width: 30, height: 30, background: 'var(--bg-card-alt, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>2</div>
                        </div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Try</div>
                        <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>Use the AI tool and apply it</div>
                    </div>
                    <div style={{paddingTop: 14, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{width: 20, height: 2, position: 'relative', background: 'var(--border-strong, #C7C7CC)'}} />
                    </div>
                    <div style={{width: 160, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                        <div style={{width: 30, height: 30, background: 'var(--bg-card-alt, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>3</div>
                        </div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Share</div>
                        <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>Post your result, help the community</div>
                    </div>
                </div>
                <div style={{width: 100, flex: '1 1 0'}} />
                <div style={{alignSelf: 'stretch', paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div data-name="play" style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 8, height: 10.67, left: 4.67, top: 2.67, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--brand-on-yellow, #0A0A0A)', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: '20px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Start Mission</div>
                </div>
            </div>
            <div style={{flex: '1 1 0', alignSelf: 'stretch', background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', overflow: 'hidden', borderRadius: 20, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div style={{flex: '1 1 0', minWidth: 0, alignSelf: 'stretch', paddingTop: 28, paddingBottom: 28, paddingLeft: 28, paddingRight: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                    <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div data-name="garage" style={{width: 22, height: 22, position: 'relative'}}>
                            <div style={{width: 16.50, height: 5.50, left: 2.75, top: 3.67, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                            <div style={{width: 12.83, height: 9.17, left: 4.58, top: 9.17, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                            <div style={{width: 7.33, height: 5.50, left: 7.33, top: 12.83, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                        </div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>My Garage</div>
                    </div>
                    <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: 'var(--bg-card-alt, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Level 7 · Practitioner</div>
                    </div>
                    <div style={{alignSelf: 'stretch', height: 8, background: 'var(--gray-100, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{width: 120, height: 8, background: 'var(--brand-yellow, #FFD400)', borderRadius: 999}} />
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, wordWrap: 'break-word'}}>Customizations</div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                        <div data-state="Unlocked" style={{flex: '1 1 40px', minWidth: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                            <div style={{alignSelf: 'stretch', height: 62, background: 'var(--bg-card, white)', overflow: 'hidden', borderRadius: 12, outline: '1px var(--border-strong, #C7C7CC) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div data-name="star" style={{width: 26, height: 26, position: 'relative'}}>
                                    <div style={{width: 17.57, height: 16.84, left: 3.62, top: 3.62, position: 'absolute', outline: '1.18px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.59px'}} />
                                </div>
                            </div>
                            <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--text-primary, #1A1A1A)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px', letterSpacing: 0.01, wordWrap: 'break-word'}}>Hair</div>
                        </div>
                        <div data-state="Unlocked" style={{flex: '1 1 40px', minWidth: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                            <div style={{alignSelf: 'stretch', height: 62, background: 'var(--bg-card, white)', overflow: 'hidden', borderRadius: 12, outline: '1px var(--border-strong, #C7C7CC) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div data-name="heart" style={{width: 26, height: 26, position: 'relative'}}>
                                    <div style={{width: 16.24, height: 15.50, left: 2.21, top: 5.17, position: 'absolute', outline: '1.18px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.59px'}} />
                                </div>
                            </div>
                            <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--text-primary, #1A1A1A)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px', letterSpacing: 0.01, wordWrap: 'break-word'}}>Jacket</div>
                        </div>
                        <div data-state="Unlocked" style={{flex: '1 1 40px', minWidth: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                            <div style={{alignSelf: 'stretch', height: 62, background: 'var(--bg-card, white)', overflow: 'hidden', borderRadius: 12, outline: '1px var(--border-strong, #C7C7CC) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div data-name="target" style={{width: 26, height: 26, position: 'relative'}}>
                                    <div style={{width: 17.57, height: 17.57, left: 3.62, top: 3.62, position: 'absolute', outline: '1.18px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.59px'}} />
                                    <div style={{width: 9.92, height: 9.92, left: 7.44, top: 7.44, position: 'absolute', outline: '1.18px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.59px'}} />
                                    <div style={{width: 2.89, height: 2.89, left: 10.95, top: 10.95, position: 'absolute', outline: '1.18px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.59px'}} />
                                </div>
                            </div>
                            <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--text-primary, #1A1A1A)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px', letterSpacing: 0.01, wordWrap: 'break-word'}}>Sneakers</div>
                        </div>
                    </div>
                    <div style={{width: 100, flex: '1 1 0'}} />
                    <div style={{alignSelf: 'stretch', paddingLeft: 18, paddingRight: 18, paddingTop: 13, paddingBottom: 13, background: 'var(--bg-card, white)', overflow: 'hidden', borderRadius: 999, outline: '1px var(--border-strong, #C7C7CC) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Upgrade Avatar</div>
                        <div data-name="chevronRight" style={{width: 16, height: 16, position: 'relative'}}>
                            <div style={{width: 4.67, height: 9.33, left: 6, top: 3.33, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                        </div>
                    </div>
                </div>
                <div style={{width: 200, flexShrink: 0, marginLeft: 'auto', alignSelf: 'stretch', position: 'relative', background: 'linear-gradient(180deg, #F7F7FA 0%, #E5E5EB 100%)', overflow: 'hidden', justifyContent: 'center', alignItems: 'flex-end', display: 'flex'}}>
                    <div style={{width: 150, height: 38, left: 25, top: 344, position: 'absolute', opacity: 0.90, background: 'var(--black-800, #1A1A1A)', borderRadius: 9999}} />
                    <div style={{width: 150, height: 38, left: 25, top: 340, position: 'absolute', borderRadius: 9999, border: '3px var(--brand-yellow, #FFD400) solid'}} />
                    <div data-outfit="Yellow Jacket" style={{width: 188, height: 242, left: 6, top: 140, position: 'absolute'}}>
                        <div style={{width: 115.49, height: 21.51, left: 36.26, top: 212.42, position: 'absolute', opacity: 0.10, background: 'black'}} />
                        <div style={{width: 16.11, height: 47.06, left: 75.20, top: 168.06, position: 'absolute', background: '#1A1A1A'}} />
                        <div style={{width: 16.11, height: 47.06, left: 96.69, top: 168.06, position: 'absolute', background: '#1A1A1A'}} />
                        <div style={{width: 34.91, height: 13.44, left: 63.11, top: 212.42, position: 'absolute', background: 'white'}} />
                        <div style={{width: 34.91, height: 13.44, left: 88.63, top: 212.42, position: 'absolute', background: 'white'}} />
                        <div style={{width: 34.91, height: 6.72, left: 63.11, top: 221.83, position: 'absolute', background: '#FFD400'}} />
                        <div style={{width: 34.91, height: 6.72, left: 88.63, top: 221.83, position: 'absolute', background: '#FFD400'}} />
                        <div style={{width: 60.43, height: 79.32, left: 63.79, top: 96.80, position: 'absolute', background: '#FFD400'}} />
                        <div style={{width: 17.46, height: 49.74, left: 48.34, top: 115.62, position: 'absolute', background: '#FFD400'}} />
                        <div style={{width: 17.46, height: 49.74, left: 122.20, top: 115.62, position: 'absolute', background: '#FFD400'}} />
                        <div style={{width: 17.46, height: 10.76, left: 48.34, top: 154.61, position: 'absolute', background: '#0A0A0A'}} />
                        <div style={{width: 17.46, height: 10.76, left: 122.20, top: 154.61, position: 'absolute', background: '#0A0A0A'}} />
                        <div style={{width: 26.86, height: 9.41, left: 80.57, top: 100.83, position: 'absolute', outline: '3.96px #0A0A0A solid', outlineOffset: '-1.98px'}} />
                        <div style={{width: 20.14, height: 20.17, left: 100.71, top: 122.34, position: 'absolute', background: '#0A0A0A'}} />
                        <div style={{width: 12.09, height: 12.10, left: 104.74, top: 126.38, position: 'absolute', outline: '2.77px #FFD400 solid', outlineOffset: '-1.38px'}} />
                        <div style={{width: 16.11, height: 14.79, left: 85.94, top: 88.73, position: 'absolute', background: '#F0C89E'}} />
                        <div style={{width: 99.37, height: 94.11, left: 44.31, top: 10.76, position: 'absolute', background: '#F6D2AE'}} />
                        <div style={{width: 13.43, height: 17.48, left: 38.94, top: 51.76, position: 'absolute', background: '#F6D2AE'}} />
                        <div style={{width: 13.43, height: 17.48, left: 135.63, top: 51.76, position: 'absolute', background: '#F6D2AE'}} />
                        <div style={{width: 29.54, height: 26.89, left: 42.97, top: 13.44, position: 'absolute', background: '#3B2A1C'}} />
                        <div style={{width: 32.23, height: 29.58, left: 64.46, top: 4.03, position: 'absolute', background: '#3B2A1C'}} />
                        <div style={{width: 34.91, height: 29.58, left: 88.63, top: 2.69, position: 'absolute', background: '#3B2A1C'}} />
                        <div style={{width: 29.54, height: 26.89, left: 116.83, top: 13.44, position: 'absolute', background: '#3B2A1C'}} />
                        <div style={{width: 21.49, height: 24.20, left: 130.26, top: 32.27, position: 'absolute', background: '#3B2A1C'}} />
                        <div style={{width: 21.49, height: 24.20, left: 36.26, top: 32.27, position: 'absolute', background: '#3B2A1C'}} />
                        <div style={{width: 18.80, height: 3.03, left: 64.46, top: 46.72, position: 'absolute', outline: '3.96px #2A1D12 solid', outlineOffset: '-1.98px'}} />
                        <div style={{width: 18.80, height: 3.03, left: 104.74, top: 46.72, position: 'absolute', outline: '3.96px #2A1D12 solid', outlineOffset: '-1.98px'}} />
                        <div style={{width: 22.83, height: 25.54, left: 62.44, top: 51.76, position: 'absolute', background: 'white'}} />
                        <div style={{width: 22.83, height: 25.54, left: 102.73, top: 51.76, position: 'absolute', background: 'white'}} />
                        <div style={{width: 13.43, height: 14.79, left: 68.49, top: 59.16, position: 'absolute', background: '#2A1D12'}} />
                        <div style={{width: 13.43, height: 14.79, left: 106.09, top: 59.16, position: 'absolute', background: '#2A1D12'}} />
                        <div style={{width: 4.57, height: 4.57, left: 70.23, top: 60.90, position: 'absolute', background: 'white'}} />
                        <div style={{width: 4.57, height: 4.57, left: 107.83, top: 60.90, position: 'absolute', background: 'white'}} />
                        <div style={{width: 12.09, height: 8.07, left: 55.73, top: 72.60, position: 'absolute', opacity: 0.60, background: '#F2A9A0'}} />
                        <div style={{width: 12.09, height: 8.07, left: 120.19, top: 72.60, position: 'absolute', opacity: 0.60, background: '#F2A9A0'}} />
                        <div style={{width: 4.03, height: 1.51, left: 92.66, top: 72.60, position: 'absolute', outline: '2.37px #C98A5B solid', outlineOffset: '-1.19px'}} />
                        <div style={{width: 24.17, height: 5.04, left: 81.91, top: 80.67, position: 'absolute', outline: '3.96px #2A1D12 solid', outlineOffset: '-1.98px'}} />
                    </div>
                </div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 330, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 28, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', overflow: 'hidden', borderRadius: 20, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'inline-flex'}}>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div data-name="users" style={{width: 20, height: 20, position: 'relative'}}>
                        <div style={{width: 5.33, height: 5.33, left: 4.83, top: 4, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 9.17, height: 4.58, left: 2.92, top: 12.08, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 4.33, height: 4.33, left: 12, top: 4.92, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 4.17, height: 4.50, left: 12.92, top: 12.17, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>From the Community</div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>How can I speed up my weekly report with Copilot?</div>
                <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', wordWrap: 'break-word'}}>“Pull status from Planner + Teams, then ask for a 5-bullet summary grouped by owner…”</div>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{width: 30, height: 30, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                        <div style={{width: 30, height: 30, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                        <div style={{width: 30, height: 30, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                        <div style={{width: 30, height: 30, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999, border: '2px var(--white, white) solid'}} />
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>+24 asking</div>
                </div>
                <div style={{width: 100, flex: '1 1 0'}} />
                <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 11, paddingBottom: 11, background: 'var(--bg-card, white)', overflow: 'hidden', borderRadius: 999, outline: '1px var(--border-strong, #C7C7CC) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Help</div>
                    <div data-name="chevronRight" style={{width: 15, height: 15, position: 'relative'}}>
                        <div style={{width: 4.38, height: 8.75, left: 5.63, top: 3.13, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                    </div>
                </div>
            </div>
            <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', overflow: 'hidden', borderRadius: 20, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'inline-flex'}}>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div data-name="trophy" style={{width: 20, height: 20, position: 'relative'}}>
                        <div style={{width: 8.33, height: 7.50, left: 5.83, top: 3.33, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 6.67, height: 4.17, left: 6.67, top: 13.33, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 13.33, height: 4.17, left: 3.33, top: 4.17, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Countries League</div>
                </div>
                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>Learn together, rise together.</div>
                <div style={{alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 22, height: 16, position: 'relative', background: 'var(--brand-yellow, #FFD400)', borderRadius: 3}} />
                            <div style={{flex: '1 1 0', color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Türkiye</div>
                            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>68%</div>
                        </div>
                        <div style={{alignSelf: 'stretch', height: 8, background: 'var(--gray-100, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{width: 220, alignSelf: 'stretch', position: 'relative', background: 'var(--brand-yellow, #FFD400)', borderRadius: 999}} />
                        </div>
                    </div>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 22, height: 16, position: 'relative', background: 'var(--brand-yellow, #FFD400)', borderRadius: 3}} />
                            <div style={{flex: '1 1 0', color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>France</div>
                            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>64%</div>
                        </div>
                        <div style={{alignSelf: 'stretch', height: 8, background: 'var(--gray-100, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{width: 220, alignSelf: 'stretch', position: 'relative', background: 'var(--brand-yellow, #FFD400)', borderRadius: 999}} />
                        </div>
                    </div>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 22, height: 16, position: 'relative', background: 'var(--brand-yellow, #FFD400)', borderRadius: 3}} />
                            <div style={{flex: '1 1 0', color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Romania</div>
                            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>61%</div>
                        </div>
                        <div style={{alignSelf: 'stretch', height: 8, background: 'var(--gray-100, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{width: 220, alignSelf: 'stretch', position: 'relative', background: 'var(--brand-yellow, #FFD400)', borderRadius: 999}} />
                        </div>
                    </div>
                </div>
                <div style={{width: 100, flex: '1 1 0'}} />
                <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 11, paddingBottom: 11, background: 'var(--bg-card, white)', overflow: 'hidden', borderRadius: 999, outline: '1px var(--border-strong, #C7C7CC) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>View All</div>
                    <div data-name="chevronRight" style={{width: 15, height: 15, position: 'relative'}}>
                        <div style={{width: 4.38, height: 8.75, left: 5.63, top: 3.13, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                    </div>
                </div>
            </div>
            <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', overflow: 'hidden', borderRadius: 20, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'inline-flex'}}>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div data-name="events" style={{width: 20, height: 20, position: 'relative'}}>
                        <div style={{width: 14.17, height: 13.33, left: 2.92, top: 4.17, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 6.67, height: 3.33, left: 6.67, top: 2.50, position: 'absolute', outline: '1.90px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Next Event</div>
                </div>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                    <div style={{width: 44, height: 44, background: 'var(--black, #0A0A0A)', overflow: 'hidden', borderRadius: 12, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <div data-name="sparkle" style={{width: 22, height: 22, position: 'relative'}}>
                            <div style={{width: 12.83, height: 12.83, left: 4.58, top: 2.75, position: 'absolute', outline: '1.90px var(--brand-yellow, #FFD400) solid', outlineOffset: '-0.95px'}} />
                        </div>
                    </div>
                    <div style={{overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3, display: 'inline-flex'}}>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>AI Agent Hackathon</div>
                        <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                            <div data-name="clock" style={{width: 14, height: 14, position: 'relative'}}>
                                <div style={{width: 9.92, height: 9.92, left: 2.04, top: 2.04, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                                <div style={{width: 2.04, height: 4.38, left: 7, top: 4.08, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                            </div>
                            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>12 September · 14:00</div>
                        </div>
                    </div>
                </div>
                <div style={{width: 100, flex: '1 1 0'}} />
                <div style={{alignSelf: 'stretch', paddingLeft: 18, paddingRight: 18, paddingTop: 12, paddingBottom: 12, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                    <div style={{color: 'var(--brand-on-yellow, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Join</div>
                    <div data-name="chevronRight" style={{width: 15, height: 15, position: 'relative'}}>
                        <div style={{width: 4.38, height: 8.75, left: 5.63, top: 3.13, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px'}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 );
}
