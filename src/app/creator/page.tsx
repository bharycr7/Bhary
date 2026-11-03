import PortfolioPage from '../../components/PortfolioPage';
import {CreatorAudience} from '../../components/PersonalChapters';
import ReelGallery from '../../components/ReelGallery';
import {profile} from '../../../content/profile';
export const metadata={title:'Creator — Bharath’s Portfolio'};
export default function Creator(){return <PortfolioPage title="Ideas you can put to work." intro="Writing and original reels on product management, careers, startups, and AI."><section className="creator-story" id="create"><CreatorAudience/><div className="creator-topics"><span>Product management</span><span>Job searching & careers</span><span>Startups & technology</span><span>AI tools in practice</span></div><ReelGallery/><div className="creator-process"><span>MY CREATOR LENS</span><p>Start with a question. Show what happens on screen. Explain why it matters.</p><a href={profile.instagram}>Follow @ask_bharath ↗</a></div><div className="resource-shortcuts creator-resources"><span>READ & EXPLORE</span><a href="https://bharycr7.github.io/0.001-Course-Currirculum/">AI PM mastery ↗</a><a href="/resources/validation">Validation playbook ↗</a><a href="/resources/resume-guide.pdf">Résumé guide ↗</a><a href="/resources/gtm-framework.pdf">GTM framework ↗</a></div></section>
</PortfolioPage>}
