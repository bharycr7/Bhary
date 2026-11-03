import PortfolioPage from '../../components/PortfolioPage';
import ProjectMotionGallery from '../../components/motion/ProjectMotionGallery';
import ReelGallery from '../../components/ReelGallery';
import {InvestorChapter,CredentialsChapter,CreatorAudience} from '../../components/PersonalChapters';
import {CommunityChapter} from '../../components/CommunityAndContact';
import {SkillMap} from '../../components/PortfolioStory';
import ArtifactShowcase from '../../components/ArtifactShowcase';
import {profile} from '../../../content/profile';
import {exploreSections} from '../../../content/explore';
export const metadata={title:'Explore — Bharath’s Portfolio',description:'Projects, original videos, offerings, investments, Agentbuilders, and ways to connect with Bharath.'};
export default function Explore(){return <PortfolioPage title="The work. The ideas. The people." intro="Explore what I build, what I share, and how we can connect.">
<nav className="explore-jump-nav" aria-label="Explore sections">{exploreSections.map(s=><a key={s.id} href={'#'+s.id}>{s.title}</a>)}</nav>
<section className="explore-section" id="projects"><header><span className="summary-kicker">01 / PROJECTS</span><h2>From product thinking to working ideas.</h2><p>Explore the decisions behind each project and play its product walkthrough.</p></header><ProjectMotionGallery/></section>
<section className="explore-section" id="videos"><header><span className="summary-kicker">02 / VIDEOS</span><h2>I try it. I explain it. You put it to work.</h2></header><ReelGallery/><details className="explore-disclosure"><summary>My writing and creator work</summary><CreatorAudience/><a href={profile.instagram}>Follow @ask_bharath ↗</a></details></section>
<section className="explore-section" id="offerings"><header><span className="summary-kicker">03 / OFFERINGS</span><h2>Where I can contribute.</h2><p>Bring a product question, a startup idea, or a workflow worth improving. These are the areas I enjoy working through with others.</p></header><div className="offering-grid">{[
{title:'Product & agentic workflows',text:'Clarify the problem, map the workflow, and connect technical choices to a useful product.'},
{title:'Startup validation',text:'Explore customer needs, technology moats, business moats, and the assumptions worth testing.'},
{title:'Learning & communication',text:'Make AI tools and product concepts practical through demonstrations, writing, and reusable frameworks.'}
].map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><a className="explore-action" href={'mailto:'+profile.email}>Discuss an idea ↗</a><details className="explore-disclosure" id="skills"><summary>Explore my skills and expertise</summary><SkillMap/></details><details className="explore-disclosure" id="honors-details"><summary>Honors & executive education</summary><CredentialsChapter/></details><details className="explore-disclosure" id="resources"><summary>AI PM Mastery, GTM, and learning resources</summary><ArtifactShowcase/></details></section>
<section className="explore-section" id="investments"><header><span className="summary-kicker">04 / INVESTMENTS</span></header><InvestorChapter/></section>
<section className="explore-section" id="join-community"><header><span className="summary-kicker">05 / JOINING THE COMMUNITY</span></header><CommunityChapter/></section>
<section className="explore-section connect-section" id="connect"><header><span className="summary-kicker">06 / GETTING CONNECTED</span><h2>Good conversations lead somewhere.</h2><p>I’d love to connect with product leaders, founders, and VCs across the US and India. Let’s talk about useful AI products, technology and business moats, or your next product idea.</p></header><div className="connect-links"><a href={'mailto:'+profile.email}>{profile.email} ↗</a><a href={profile.linkedin}>Connect on LinkedIn ↗</a><a href={profile.instagram}>Follow @ask_bharath ↗</a></div></section>
</PortfolioPage>}
