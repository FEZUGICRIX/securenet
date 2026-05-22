import Checklist from '@/components/Checklist'

export default function ChecklistPage() {
	return (
		<div className='flex flex-col min-h-screen w-full'>
			<main className='flex-1 px-4'>
				<Checklist />
			</main>
		</div>
	)
}
