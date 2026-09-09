export default function MissionDetail() {
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
            <div data-state="Active" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'var(--brand-yellow, #FFD400)', borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="missions" style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 16, height: 16, left: 4, top: 4, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px'}} />
                    <div style={{width: 6.80, height: 6.80, left: 8.60, top: 8.60, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px'}} />
                </div>
                <div style={{flex: '1 1 0', color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Missions</div>
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
    <div style={{flex: '1 1 0', paddingTop: 32, paddingBottom: 44, paddingLeft: 44, paddingRight: 44, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
        <div style={{paddingTop: 8, paddingBottom: 8, paddingRight: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div data-name="arrowLeft" style={{width: 18, height: 18, position: 'relative'}}>
                <div style={{width: 4.50, height: 9, left: 3.75, top: 4.50, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
            </div>
            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Back to Missions</div>
        </div>
        <div style={{alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
            <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: 'var(--bg-card-alt, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>Meetings</div>
                </div>
                <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: 'var(--brand-yellow-soft, #FFF6D6)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>Beginner</div>
                </div>
            </div>
            <div style={{width: 573, color: 'var(--text-primary, #1A1A1A)', fontSize: 32, fontFamily: 'Archivo', fontWeight: '800', lineHeight: '38px', wordWrap: 'break-word'}}>Turn meeting notes into an action list</div>
            <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                    <div data-name="clock" style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 11.33, height: 11.33, left: 2.33, top: 2.33, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                        <div style={{width: 2.33, height: 5, left: 8, top: 4.67, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>5 min</div>
                </div>
                <div style={{overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                    <div data-name="star" style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 11.33, height: 10.87, left: 2.33, top: 2.33, position: 'absolute', outline: '1.90px var(--brand-yellow, #FFD400) solid', outlineOffset: '-0.95px'}} />
                    </div>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>+30 XP reward</div>
                </div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', overflow: 'hidden', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Mission objective</div>
                    <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Take a block of raw meeting notes and use an AI assistant to produce a clean action list — every item with an owner and a due date — that you can paste straight into your tracker.</div>
                </div>
                <div style={{alignSelf: 'stretch', padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', overflow: 'hidden', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Three-step flow</div>
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'inline-flex'}}>
                        <div style={{width: 28, height: 28, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>1</div>
                        </div>
                        <div style={{flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Learn</div>
                            <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Read the 60-second brief on why structured action lists beat raw notes, and what a good AI prompt includes (context, format, constraints).</div>
                        </div>
                    </div>
                    <div style={{alignSelf: 'stretch', height: 1, position: 'relative', background: 'var(--border-default, #E4E4E7)'}} />
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'inline-flex'}}>
                        <div style={{width: 28, height: 28, background: 'var(--bg-card-alt, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>2</div>
                        </div>
                        <div style={{flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Try</div>
                            <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Open Copilot or your assistant, paste your real notes, and run the example prompt below. Tidy the output until every action has an owner and a date.</div>
                        </div>
                    </div>
                    <div style={{alignSelf: 'stretch', height: 1, position: 'relative', background: 'var(--border-default, #E4E4E7)'}} />
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'inline-flex'}}>
                        <div style={{width: 28, height: 28, background: 'var(--bg-card-alt, #F1F1F3)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>3</div>
                        </div>
                        <div style={{flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Share</div>
                            <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Post your before/after in the Community so a teammate can reuse your prompt. Sharing is what earns the mission its full XP.</div>
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', overflow: 'hidden', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Example prompt</div>
                        <div style={{paddingLeft: 14, paddingRight: 14, paddingTop: 8, paddingBottom: 8, background: 'var(--black, #0A0A0A)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                            <div data-name="copy" style={{width: 14, height: 14, position: 'relative'}}>
                                <div style={{width: 7, height: 7, left: 4.67, top: 4.67, position: 'absolute', outline: '1.90px var(--white, white) solid', outlineOffset: '-0.95px'}} />
                                <div style={{width: 7, height: 7, left: 2.33, top: 2.33, position: 'absolute', outline: '1.90px var(--white, white) solid', outlineOffset: '-0.95px'}} />
                            </div>
                            <div style={{color: 'var(--white, white)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Copy prompt</div>
                        </div>
                    </div>
                    <div style={{alignSelf: 'stretch', padding: 16, background: 'var(--black-800, #1A1A1A)', overflow: 'hidden', borderRadius: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', color: 'var(--white, white)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>You are my meeting assistant. Turn the notes below into an action list.<br/>For each item give: owner, task, due date. Group by owner. Flag anything with no owner.<br/><br/>Notes:<br/>&quot;&quot;&quot;<br/>&lt;paste your notes here&gt;<br/>&quot;&quot;&quot;</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', overflow: 'hidden', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Archivo', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Submit your result</div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Paste the action list your assistant produced (remove anything confidential).</div>
                    <div style={{alignSelf: 'stretch', height: 120, padding: 14, background: 'var(--bg-page, #F7F7F8)', overflow: 'hidden', borderRadius: 12, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Paste your action list here…</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', padding: 24, background: 'var(--brand-yellow-soft, #FFF6D6)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', overflow: 'hidden', borderRadius: 16, outline: '1px var(--brand-yellow, #FFD400) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, wordWrap: 'break-word'}}>Reflection</div>
                    <div style={{alignSelf: 'stretch', color: 'var(--text-primary, #1A1A1A)', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Where did the AI save you the most time — and where did you still need to fix its output by hand?</div>
                    <div style={{alignSelf: 'stretch', height: 72, paddingLeft: 14, paddingRight: 14, paddingTop: 12, paddingBottom: 12, background: 'var(--bg-card, white)', overflow: 'hidden', borderRadius: 10, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>A sentence or two is plenty…</div>
                    </div>
                </div>
            </div>
            <div style={{width: 392, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15.30, 15.30, 20.40, 0.08)', overflow: 'hidden', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, wordWrap: 'break-word'}}>Mission summary</div>
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Estimated time</div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>5 min</div>
                    </div>
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>XP reward</div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>+30 XP</div>
                    </div>
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Category</div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Meetings</div>
                    </div>
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Difficulty</div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Beginner</div>
                    </div>
                    <div style={{alignSelf: 'stretch', height: 1, position: 'relative', background: 'var(--border-default, #E4E4E7)'}} />
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, wordWrap: 'break-word'}}>Steps</div>
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 20, height: 20, background: 'var(--success, #1FA971)', overflow: 'hidden', borderRadius: 6, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div data-name="check" style={{width: 13, height: 13, position: 'relative'}}>
                                <div style={{width: 7.58, height: 5.42, left: 2.71, top: 3.79, position: 'absolute', outline: '1.90px var(--white, white) solid', outlineOffset: '-0.95px'}} />
                            </div>
                        </div>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Learn the brief</div>
                    </div>
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 20, height: 20, background: 'var(--bg-card, white)', borderRadius: 6, border: '1.50px var(--border-strong, #C7C7CC) solid'}} />
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Try it with your notes</div>
                    </div>
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 20, height: 20, background: 'var(--bg-card, white)', borderRadius: 6, border: '1.50px var(--border-strong, #C7C7CC) solid'}} />
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word'}}>Share your result</div>
                    </div>
                    <div style={{alignSelf: 'stretch', paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div data-name="check" style={{width: 18, height: 18, position: 'relative'}}>
                            <div style={{width: 10.50, height: 7.50, left: 3.75, top: 5.25, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px'}} />
                        </div>
                        <div style={{color: 'var(--brand-on-yellow, #0A0A0A)', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: '20px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Complete Mission</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', padding: 24, background: 'var(--bg-card-alt, #F1F1F3)', overflow: 'hidden', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'flex'}}>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, wordWrap: 'break-word'}}>You&apos;ll unlock</div>
                    <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 14, display: 'inline-flex'}}>
                        <div data-state="Locked" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{width: 96, height: 96, position: 'relative', background: 'var(--bg-card-alt, #F1F1F3)', overflow: 'hidden', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                                <div data-name="star" style={{width: 40, height: 40, position: 'relative'}}>
                                    <div style={{width: 28.33, height: 27.17, left: 5.83, top: 5.83, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} />
                                </div>
                                <div style={{width: 24, height: 24, left: 64, top: 8, position: 'absolute', background: 'var(--black, #0A0A0A)', overflow: 'hidden', borderRadius: 999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div data-name="lock" style={{width: 14, height: 14, position: 'relative'}}>
                                        <div style={{width: 8.17, height: 5.83, left: 2.92, top: 6.13, position: 'absolute', outline: '1.90px var(--white, white) solid', outlineOffset: '-0.95px'}} />
                                        <div style={{width: 4.67, height: 3.79, left: 4.67, top: 2.33, position: 'absolute', outline: '1.90px var(--white, white) solid', outlineOffset: '-0.95px'}} />
                                    </div>
                                </div>
                            </div>
                            <div style={{textAlign: 'center', color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>Racing gloves</div>
                        </div>
                        <div style={{flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Racing gloves</div>
                            <div style={{alignSelf: 'stretch', color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.02, wordWrap: 'break-word'}}>Avatar accessory · unlocks on completion</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 );
}
