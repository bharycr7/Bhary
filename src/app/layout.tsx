import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Bhary. — Product leader. Builder first.',description:'Bharath Raju K B builds enterprise AI and data platform products. Selected work, experiments, and the story behind them.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
