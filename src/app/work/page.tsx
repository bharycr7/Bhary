import SkillsMatrix from '../../components/SkillsMatrix';
import PortfolioPage from '../../components/PortfolioPage';
import {profile} from '../../../content/profile';
import ProjectMotionGallery from '../../components/motion/ProjectMotionGallery';
import ArtifactShowcase from '../../components/ArtifactShowcase';
export const metadata={title:'Projects — Bharath’s Portfolio'};
export default function Projects(){return <PortfolioPage title="Projects" intro="Explore my projects, the thinking behind them, and the ways I can contribute."><section className="explore-section" id="projects"><header><span className="summary-kicker">PRODUCT WALKTHROUGHS</span><h2>From product thinking to working ideas.</h2><p>Browse the collection. Open a project to try the demo, explore the decisions, and watch the film.</p></header><ProjectMotionGallery/></section>
<section className="explore-section" id="offerings"><header><span className="summary-kicker">OFFERINGS</span><h2>Where I can contribute.</h2><p>Bring a product question, a startup idea, or a workflow worth improving. These are the areas I enjoy working through with others.</p></header><div className="offering-grid">{[
{title:'Product & agentic workflows',text:'Clarify the problem, map the workflow, and connect technical choices to a useful product.'},
{title:'Startup validation',text:'Explore customer needs, technology moats, business moats, and the assumptions worth testing.'},
{title:'Learning & communication',text:'Make AI tools and product concepts practical through demonstrations, writing, and reusable frameworks.'}
].map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><a className="explore-action" href={'mailto:'+profile.email}>Discuss an idea ↗</a><SkillsMatrix/><details className="explore-disclosure" id="resources"><summary>AI PM Mastery, GTM, and learning resources</summary><ArtifactShowcase/></details></section>
</PortfolioPage>}
