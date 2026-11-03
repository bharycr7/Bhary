import PortfolioHeader from './PortfolioHeader';
import {SignatureFooter} from './CommunityAndContact';
import './portfolio-summary.css';
import './portfolio-story.css';
export default function PortfolioPage({title,intro,children}:{title:string;intro:string;children:React.ReactNode}){return <div className="summary-site story-site detail-page" id="top"><a className="skip" href="#page-content">Skip to content</a><PortfolioHeader/><main className="summary-body" id="page-content"><header className="detail-page-intro"><a href="/">← Introduction</a><h1>{title}</h1><p>{intro}</p></header>{children}</main><SignatureFooter compact/></div>}
