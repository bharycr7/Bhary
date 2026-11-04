'use client';
import {usePathname} from 'next/navigation';
import {exploreSections} from '../../content/explore';
export default function PortfolioHeader(){const path=usePathname();return <header className="summary-header"><a className="summary-wordmark" href="/">Bharath’s <em>Portfolio</em></a><nav aria-label="Main navigation">{[{href:'/',title:'Summary'},...exploreSections].map(link=><a key={link.href} href={link.href} aria-current={(link.href==='/'?path==='/':path.startsWith(link.href))?'page':undefined}>{link.title}</a>)}</nav><div><a href="/investments-community#connect">Let’s talk ↗</a></div></header>}
