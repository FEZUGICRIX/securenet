import SecurityBasics from '@/components/SecurityBasics'
import Conclusion from '@/components/Conclusion'

export default function ConclusionPage() {
	return (
		<div className='flex flex-col min-h-screen w-full'>
			<main className='flex-1 px-4'>
				<SecurityBasics />
				<Conclusion />
			</main>
		</div>
	)
}
