export default function Hero() {
	return (
		<section className='bg-gradient-to-br  from-blue-50 via-indigo-50 to-purple-50 py-12 sm:py-16 lg:py-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mx-auto'>
					<div className='text-center lg:text-left'>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight'>
							Защити свои аккаунты в соцсетях
						</h1>
						<p className='text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed'>
							На этом сайте вы найдёте практические рекомендации по защите аккаунтов в Telegram,
							ВКонтакте и MAX: основы кибербезопасности, пошаговые инструкции по настройке
							приватности и интерактивный чек-лист для проверки своей защищённости.
						</p>
						<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start'>
							<a
								href='#basics'
								className='bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl'
							>
								Начать проверку
							</a>
							<a
								href='#social'
								className='bg-white text-gray-700 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold text-base sm:text-lg border-2 border-gray-200'
							>
								Подробнее
							</a>
						</div>
					</div>

					<div className='ml-auto w-fit'>
						<img
							src='/guard.png'
							className='rounded-4xl relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square'
							alt='guard'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
