import {notFound} from 'next/navigation';
import {caseStudies} from '../../../../content/case-studies';
import PortfolioPage from '../../../components/PortfolioPage';
import ProjectExperience from '../../../components/motion/ProjectExperience';
export function generateStaticParams(){return caseStudies.map(c=>({slug:c.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const c=caseStudies.find(c=>c.slug===slug);return{title:c?`${c.name} — Bharath’s Portfolio`:'Case study not found'}}
export default async function CasePage({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const c=caseStudies.find(c=>c.slug===slug);if(!c)notFound();return <PortfolioPage title={c.name} intro="Explore the workflow. Try the decisions. Read the story."><a className="experience-back" href="/work">← Back to the project collection</a><ProjectExperience slug={slug}/></PortfolioPage>}
