import type { Metadata } from 'next';
import './globals.css';
import {HeroAtmosphere} from '../components/PortfolioEffects';
import './orange-black.css';
export const metadata:Metadata={title:'Bharath’s Portfolio — Product leader. Investor. Creator.',description:'Bharath Raju KB: product leader, builder, FinTech and AI startup investor, and creator sharing product management, career, and startup ideas.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="site-atmosphere"><HeroAtmosphere/></div>{children}</body></html>}
