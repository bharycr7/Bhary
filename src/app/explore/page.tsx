'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
export default function LegacyExplore(){const router=useRouter();useEffect(()=>{const routes:Record<string,string>={projects:'/work',videos:'/brand#videos',offerings:'/work#offerings',skills:'/work#skills',resources:'/work#resources',honors:'/brand#honors','honors-details':'/brand#honors',investments:'/investments-community#investments','join-community':'/investments-community#community',connect:'/investments-community#connect'};router.replace(routes[location.hash.slice(1)]??'/work')},[router]);return <main><p>Opening the portfolio…</p><a href="/work">Projects</a> · <a href="/brand">Brand and Achievements</a> · <a href="/investments-community">Investments and Community</a></main>}
