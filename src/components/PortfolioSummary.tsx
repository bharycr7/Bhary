import {HeroReelRibbon,HeroSignature} from './PortfolioEffects';
import ProjectMotionGallery from './motion/ProjectMotionGallery';
import {Marker} from './PortfolioStory';
import {SignatureFooter} from './CommunityAndContact';
import PortfolioHeader from './PortfolioHeader';
import './portfolio-summary.css';
import './personal-chapters.css';
import './portfolio-story.css';
export default function PortfolioSummary(){return <div className="summary-site story-site home-overview" id="top"><a className="skip" href="#portfolio-summary">Skip to portfolio summary</a><PortfolioHeader/><main><section className="summary-hero"><div className="hero-name-stage"><span className="summary-kicker">WELCOME TO MY PROFILE / PRODUCT · INVESTING · IDEAS</span><h1 className="particle-heading"><span className="name-accessible">Bharath Raju KB</span></h1><HeroSignature/></div><div className="hero-editorial"><p className="summary-position">I build <Marker>useful AI.</Marker><br/>Then I make it make sense.</p><p className="summary-bio">I’m a product leader at JPMorgan Chase, an independent builder, an active startup investor, and the creator behind @ask_bharath. I connect technology, business, and the people they serve.</p><div className="identity-tags"><a href="/work">Product leader</a><a href="/about#investing">Startup investor</a><a href="/creator">Writer & creator</a></div><div className="summary-hero-actions"><a className="hero-primary" href="/work">Explore my projects ↗</a><a href="/creator">▶ Watch my reels</a></div><div className="hero-experience"><span>MY PRODUCT JOURNEY</span><p>JPMorgan Chase <i>/</i> Tesla <i>/</i> Amazon <i>/</i> Titan</p></div></div><div className="hero-collage ribbon-collage"><HeroReelRibbon/></div></section>
<div className="summary-body" id="portfolio-summary"><section className="selected-projects" id="work"><div className="summary-section-title"><span>01 / SELECTED PROJECTS</span><h2>The work behind <em>the words.</em></h2><a href="/work">All project stories ↗</a></div><ProjectMotionGallery/><p className="project-context">Explore each project’s problem, my role, the product decisions, and an animated walkthrough.</p></section>
<section className="overview-directory" aria-labelledby="explore-heading"><h2 id="explore-heading">A little more about me.</h2><div>{[
{href:'/about',title:'The person behind the work',text:'My skills, investing interests, honors, and executive education.'},
{href:'/creator',title:'Ideas, explained on screen',text:'Original reels and writing on products, careers, startups, and AI.'},
{href:'/community',title:'Build with good company',text:'Meet Agentbuilders, the community I run for curious AI builders.'},
{href:'/resources',title:'Tools to take with you',text:'AI PM Mastery, startup validation, and my GTM framework.'}
].map(item=><a key={item.href} href={item.href}><h3>{item.title}</h3><p>{item.text}</p><span>Explore →</span></a>)}</div></section></div></main><SignatureFooter/></div>}
