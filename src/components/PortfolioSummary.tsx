import StudioHero from './StudioHero';
import SelectedWorkPreview from './SelectedWorkPreview';
import ReelCorridor from './ReelCorridor';
import {SignatureFooter} from './CommunityAndContact';
import PortfolioHeader from './PortfolioHeader';
import './portfolio-summary.css';
import './personal-chapters.css';
import './portfolio-story.css';
const chapters = [
  {number:'01',href:'/work',title:'Products with purpose.',text:'Agentic workflows, data platforms, and the decisions that shape them.',label:'Explore projects'},
  {number:'02',href:'/brand',title:'Ideas worth sharing.',text:'My original reels, writing, honors, and a continuing habit of learning.',label:'Brand & achievements'},
  {number:'03',href:'/investments-community',title:'Good company. Bold ideas.',text:'Small checks in FinTech and AI. A community of people building what comes next.',label:'Investments & community'},
];
export default function PortfolioSummary(){return <div className="summary-site story-site home-overview editorial-home studio-home" id="top"><a className="skip" href="#portfolio-summary">Skip to portfolio summary</a><PortfolioHeader/><main id="portfolio-summary"><StudioHero/><div className="studio-reel-intro" id="ideas-in-motion"><span className="summary-kicker">THE IDEAS DON’T STAY IN A NOTEBOOK.</span><h2>Out in the world. <em>In motion.</em></h2><a href="/brand#videos">Explore my original reels →</a></div><ReelCorridor/><section className="editorial-caption" aria-label="About my work"><p>Product leader. Independent builder.<br/><em>Always a student of what comes next.</em></p><a href="/brand#videos"><strong>50K+</strong><span>people follow my writing<br/>and content across platforms ↗</span></a></section><div className="summary-body"><SelectedWorkPreview/><section className="editorial-index" aria-labelledby="explore-heading"><div className="editorial-index-heading"><span className="summary-kicker">A FEW WAYS INTO MY WORLD</span><h2 id="explore-heading">More than a job title.</h2></div>{chapters.map(chapter=><a className="editorial-index-row" href={chapter.href} key={chapter.number}><span className="index-number">{chapter.number}</span><h3>{chapter.title}</h3><p>{chapter.text}</p><span className="index-link">{chapter.label} <b aria-hidden="true">↗</b></span></a>)}</section><div className="editorial-contact"><p>Building something interesting?</p><a href="mailto:bharathc261@gmail.com">Let’s compare notes. <span aria-hidden="true">↗</span></a></div></div></main><SignatureFooter/></div>}
