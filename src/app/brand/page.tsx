import PortfolioPage from '../../components/PortfolioPage';
import {profile} from '../../../content/profile';
import ReelGallery from '../../components/ReelGallery';
import {CreatorAudience,CredentialsChapter} from '../../components/PersonalChapters';
export const metadata={title:'Brand and Achievements — Bharath’s Portfolio'};
export default function Brand(){return <PortfolioPage title="Ideas shared. Milestones earned." intro="My voice as a creator, the work I share, and a continuing investment in learning."><nav className="explore-jump-nav" aria-label="Brand sections"><a href="#videos">Videos & writing</a><a href="#honors">Honors & executive education</a></nav><section className="explore-section" id="videos"><header><span className="summary-kicker">02 / VIDEOS</span><h2>I try it. I explain it. You put it to work.</h2></header><ReelGallery/><details className="explore-disclosure"><summary>My writing and creator work</summary><CreatorAudience/><a href={profile.instagram}>Follow @ask_bharath ↗</a></details></section>
<CredentialsChapter/></PortfolioPage>}
