import Hero from '@/components/Hero'
import SocialNetworks from '@/components/SocialNetworks'
import AnalysisForm from '@/components/AnalysisForm'

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen w-full'>
			<main className='flex-1 px-4'>
				<Hero />
				<SocialNetworks />
				<AnalysisForm />
			</main>
		</div>
	)
}
