import { Flag } from '../components/graphics';

export default function Projects() {
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
                <div data-name="home" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 18, height: 7.50, left: 3, top: 3, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} /><div style={{width: 14, height: 11.50, left: 5, top: 9.50, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} /></div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Home</div>
            </div>
            <div data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="missions" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 16, height: 16, left: 4, top: 4, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} /><div style={{width: 6.80, height: 6.80, left: 8.60, top: 8.60, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} /></div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Missions</div>
            </div>
            <div data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="community" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 6.40, height: 6.40, left: 5.80, top: 4.80, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} /><div style={{width: 11, height: 5.50, left: 3.50, top: 14.50, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} /><div style={{width: 2.23, height: 5.80, left: 16, top: 6.20, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} /><div style={{width: 3, height: 5.20, left: 14.50, top: 14.80, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} /></div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Community</div>
            </div>
            <div data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="leaderboard" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 12, height: 10, left: 6, top: 4, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} /><div style={{width: 3.50, height: 5.50, left: 3.50, top: 6, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} /><div style={{width: 3.50, height: 5.50, left: 17, top: 6, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} /></div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Leaderboard</div>
            </div>
            <div data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="garage" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 18, height: 6, left: 3, top: 4, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} /><div style={{width: 14, height: 10, left: 5, top: 10, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} /><div style={{width: 8, height: 6, left: 8, top: 14, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} /></div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>My Garage</div>
            </div>
            <div data-state="Default" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="events" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 17, height: 16, left: 3.50, top: 5, position: 'absolute', outline: '1.90px var(--text-on-dark-muted, #8E8E93) solid', outlineOffset: '-0.95px'}} /><div style={{width: 8, height: 4, left: 8, top: 3, position: 'absolute', outline: '1.90px var(--black-800, #1A1A1A) solid', outlineOffset: '-0.95px'}} /></div>
                <div style={{flex: '1 1 0', color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Events</div>
            </div>
            <div data-state="Active" style={{alignSelf: 'stretch', height: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'var(--brand-yellow, #FFD400)', borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div data-name="projects" style={{width: 24, height: 24, position: 'relative'}}><div style={{width: 10, height: 10, left: 2, top: 7, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px', borderRadius: 9999}} /><div style={{width: 10, height: 10, left: 12, top: 7, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px', borderRadius: 9999}} /><div style={{width: 6, height: 6, left: 9, top: 3, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px', borderRadius: 9999}} /></div>
                <div style={{flex: '1 1 0', color: 'var(--black, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', wordWrap: 'break-word'}}>Projects</div>
            </div>
        </div>
        <div style={{width: 10, flex: '1 1 0'}} />
        <div style={{color: 'var(--text-on-dark-muted, #8E8E93)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px', wordWrap: 'break-word'}}>Renault GBS · Concept</div>
    </div>

    <div style={{flex: '1 1 0', paddingTop: 40, paddingBottom: 44, paddingLeft: 44, paddingRight: 44, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>

        <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 32, fontFamily: 'Archivo', fontWeight: '800', lineHeight: '38px', wordWrap: 'break-word'}}>Projects</div>
                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Open-source tools and experiments built by colleagues across all five countries.</div>
            </div>
            <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 14, paddingBottom: 14, background: 'var(--brand-yellow, #FFD400)', overflow: 'hidden', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div data-name="plus" style={{width: 16, height: 16, position: 'relative'}}><div style={{width: 9.33, height: 9.33, left: 3.33, top: 3.33, position: 'absolute', outline: '1.90px var(--black, #0A0A0A) solid', outlineOffset: '-0.95px'}} /></div>
                <div style={{color: 'var(--brand-on-yellow, #0A0A0A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>Submit a Project</div>
            </div>
        </div>

        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex', flexWrap: 'wrap'}}>
            <div data-state="Selected" style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: 'var(--black, #0A0A0A)', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{color: 'var(--text-on-dark, white)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>All countries</div>
            </div>
            {['Türkiye', 'France', 'Romania', 'India', 'Colombia'].map(country => (
                <div key={country} data-state="Default" style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: 'var(--bg-card, white)', borderRadius: 999, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                    <Flag country={country} width={20} height={14} />
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03, wordWrap: 'break-word'}}>{country}</div>
                </div>
            ))}
        </div>

        <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex', flexWrap: 'wrap', alignContent: 'flex-start'}}>

            <div style={{width: 520, padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15, 15, 20, 0.08)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--black, #0A0A0A)', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: 'var(--white, white)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>Automation</div>
                    </div>
                    <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: 'var(--black, #0A0A0A)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>Featured</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 6, display: 'flex'}}>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 18, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '24px'}}>Meeting Digest Bot</div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px'}}>A Python script that pulls Teams transcripts, runs them through the OpenAI API, and posts a structured action-item digest directly into your channel.</div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 4, borderTop: '1px solid var(--border-default, #E4E4E7)', flexDirection: 'column', gap: 10, display: 'flex'}}>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, paddingTop: 10}}>Contributors</div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex', flexWrap: 'wrap'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 28, height: 28, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999}} />
                            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
                                <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Deniz Yılmaz</div>
                                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>Türkiye</div>
                            </div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 28, height: 28, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999}} />
                            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
                                <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Amélie Laurent</div>
                                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>France</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div data-name="star" style={{width: 16, height: 16, position: 'relative'}}><div style={{width: 9.33, height: 9.33, left: 3.33, top: 2, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} /></div>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px'}}>47 stars</div>
                    </div>
                    <div style={{paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: 'var(--bg-card, white)', overflow: 'hidden', borderRadius: 999, outline: '1px var(--border-strong, #C7C7CC) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div data-name="gitfork" style={{width: 14, height: 14, position: 'relative'}}><div style={{width: 4, height: 4, left: 1, top: 1, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /><div style={{width: 4, height: 4, left: 9, top: 1, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /><div style={{width: 4, height: 4, left: 5, top: 9, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /></div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>View on GitHub</div>
                    </div>
                </div>
            </div>

            <div style={{width: 520, padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15, 15, 20, 0.08)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--black, #0A0A0A)', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: 'var(--white, white)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>Data</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 6, display: 'flex'}}>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 18, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '24px'}}>CSV Cleaner GPT Wrapper</div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px'}}>A lightweight CLI tool that normalises column headers across inconsistent CSV exports, flags empty rows, and outputs a ready-to-import file — no code required to run it.</div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 4, borderTop: '1px solid var(--border-default, #E4E4E7)', flexDirection: 'column', gap: 10, display: 'flex'}}>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, paddingTop: 10}}>Contributors</div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex', flexWrap: 'wrap'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 28, height: 28, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999}} />
                            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
                                <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Mert Demir</div>
                                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>Türkiye</div>
                            </div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 28, height: 28, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999}} />
                            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
                                <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Rahul Nair</div>
                                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>India</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div data-name="star" style={{width: 16, height: 16, position: 'relative'}}><div style={{width: 9.33, height: 9.33, left: 3.33, top: 2, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} /></div>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px'}}>31 stars</div>
                    </div>
                    <div style={{paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: 'var(--bg-card, white)', overflow: 'hidden', borderRadius: 999, outline: '1px var(--border-strong, #C7C7CC) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div data-name="gitfork" style={{width: 14, height: 14, position: 'relative'}}><div style={{width: 4, height: 4, left: 1, top: 1, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /><div style={{width: 4, height: 4, left: 9, top: 1, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /><div style={{width: 4, height: 4, left: 5, top: 9, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /></div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>View on GitHub</div>
                    </div>
                </div>
            </div>

            <div style={{width: 520, padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15, 15, 20, 0.08)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--black, #0A0A0A)', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: 'var(--white, white)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>Safety</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 6, display: 'flex'}}>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 18, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '24px'}}>AI Input Checklist</div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px'}}>A shareable pre-prompt checklist that guides users through five data-sensitivity questions before pasting anything into a public AI tool. Available as a PDF and a Teams tab.</div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 4, borderTop: '1px solid var(--border-default, #E4E4E7)', flexDirection: 'column', gap: 10, display: 'flex'}}>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, paddingTop: 10}}>Contributors</div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex', flexWrap: 'wrap'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 28, height: 28, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999}} />
                            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
                                <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Camila Rojas</div>
                                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>Colombia</div>
                            </div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 28, height: 28, background: 'var(--bg-card-alt, #F1F1F3)', borderRadius: 9999}} />
                            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
                                <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Ana Popescu</div>
                                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>Romania</div>
                            </div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 28, height: 28, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999}} />
                            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
                                <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Sofia Marin</div>
                                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>Romania</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div data-name="star" style={{width: 16, height: 16, position: 'relative'}}><div style={{width: 9.33, height: 9.33, left: 3.33, top: 2, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} /></div>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px'}}>58 stars</div>
                    </div>
                    <div style={{paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: 'var(--bg-card, white)', overflow: 'hidden', borderRadius: 999, outline: '1px var(--border-strong, #C7C7CC) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div data-name="gitfork" style={{width: 14, height: 14, position: 'relative'}}><div style={{width: 4, height: 4, left: 1, top: 1, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /><div style={{width: 4, height: 4, left: 9, top: 1, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /><div style={{width: 4, height: 4, left: 5, top: 9, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /></div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>View on GitHub</div>
                    </div>
                </div>
            </div>

            <div style={{width: 520, padding: 24, background: 'var(--bg-card, white)', boxShadow: '0px 4px 12px -2px rgba(15, 15, 20, 0.08)', borderRadius: 16, outline: '1px var(--border-default, #E4E4E7) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, background: 'var(--black, #0A0A0A)', borderRadius: 999, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: 'var(--white, white)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66}}>Productivity</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 6, display: 'flex'}}>
                    <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 18, fontFamily: 'Archivo', fontWeight: '700', lineHeight: '24px'}}>Reply Draft Prompt Pack</div>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22px'}}>A curated set of prompts for drafting email and Teams replies. Give it the thread and your intent in one line; it returns a reply in your tone. Used daily by 40+ colleagues.</div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 4, borderTop: '1px solid var(--border-default, #E4E4E7)', flexDirection: 'column', gap: 10, display: 'flex'}}>
                    <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: 0.66, paddingTop: 10}}>Contributors</div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex', flexWrap: 'wrap'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 28, height: 28, background: 'var(--brand-yellow-soft, #FFF6D6)', borderRadius: 9999}} />
                            <div style={{flexDirection: 'column', gap: 1, display: 'flex'}}>
                                <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px'}}>Rahul Nair</div>
                                <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px'}}>India</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div data-name="star" style={{width: 16, height: 16, position: 'relative'}}><div style={{width: 9.33, height: 9.33, left: 3.33, top: 2, position: 'absolute', outline: '1.90px var(--text-secondary, #6B6B70) solid', outlineOffset: '-0.95px'}} /></div>
                        <div style={{color: 'var(--text-secondary, #6B6B70)', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: '16px'}}>22 stars</div>
                    </div>
                    <div style={{paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: 'var(--bg-card, white)', overflow: 'hidden', borderRadius: 999, outline: '1px var(--border-strong, #C7C7CC) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'flex'}}>
                        <div data-name="gitfork" style={{width: 14, height: 14, position: 'relative'}}><div style={{width: 4, height: 4, left: 1, top: 1, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /><div style={{width: 4, height: 4, left: 9, top: 1, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /><div style={{width: 4, height: 4, left: 5, top: 9, position: 'absolute', outline: '1.50px var(--text-primary, #1A1A1A) solid', outlineOffset: '-0.75px', borderRadius: 9999}} /></div>
                        <div style={{color: 'var(--text-primary, #1A1A1A)', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: '18px', letterSpacing: 0.03}}>View on GitHub</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
 );
}
