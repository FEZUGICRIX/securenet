import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SecurityBasics from '@/components/SecurityBasics'
import SocialNetworks from '@/components/SocialNetworks'
import Checklist from '@/components/Checklist'
import AnalysisForm from '@/components/AnalysisForm'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen w-full'>
			<Header />
			<main className='flex-1 px-4'>
				<Hero />
				<SecurityBasics />
				<SocialNetworks />
				<Checklist />
				<AnalysisForm />
			</main>
			<Footer />
		</div>
	)
}
