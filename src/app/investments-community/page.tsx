import PortfolioPage from '../../components/PortfolioPage';
import {profile} from '../../../content/profile';
import {InvestorChapter} from '../../components/PersonalChapters';
import {CommunityChapter} from '../../components/CommunityAndContact';
export const metadata={title:'Investments and Community — Bharath’s Portfolio'};
export default function InvestmentsCommunity(){return <PortfolioPage title="Back ideas. Build connections." intro="Investing in ambitious startups and bringing curious builders together."><nav className="explore-jump-nav" aria-label="Investment and community sections"><a href="#investments">Investments</a><a href="#community">Join the community</a><a href="#connect">Get connected</a></nav><section className="explore-section" id="investments"><header><span className="summary-kicker">04 / INVESTMENTS</span></header><InvestorChapter/></section>
<section className="explore-section" id="community-section"><header><span className="summary-kicker">05 / JOINING THE COMMUNITY</span></header><CommunityChapter/></section>
<section className="explore-section connect-section" id="connect"><header><span className="summary-kicker">06 / GETTING CONNECTED</span><h2>Good conversations lead somewhere.</h2><p>I’d love to connect with product leaders, founders, and VCs across the US and India. Let’s talk about useful AI products, technology and business moats, or your next product idea.</p></header><div className="connect-links"><a href={'mailto:'+profile.email}>{profile.email} ↗</a><a href={profile.linkedin}>Connect on LinkedIn ↗</a><a href={profile.instagram}>Follow @ask_bharath ↗</a></div></section>
</PortfolioPage>}
