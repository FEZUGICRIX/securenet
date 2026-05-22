export default function Footer() {
	return (
		<footer className='bg-gray-900 text-gray-300 py-8 sm:py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
					<div className='text-center sm:text-left'>
						<h3 className='text-white text-base sm:text-lg font-bold mb-3 sm:mb-4'>SecureNet</h3>
						<p className='text-xs sm:text-sm leading-relaxed'>
							Защитите свои аккаунты в социальных сетях с помощью наших инструментов и рекомендаций
						</p>
					</div>

					<div className='text-center sm:text-left'>
						<h4 className='text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4'>Компания</h4>
						<ul className='space-y-1.5 sm:space-y-2 text-xs sm:text-sm'>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									О нас
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Блог
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Карьера
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Контакты
								</a>
							</li>
						</ul>
					</div>

					<div className='text-center sm:text-left'>
						<h4 className='text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4'>Ресурсы</h4>
						<ul className='space-y-1.5 sm:space-y-2 text-xs sm:text-sm'>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Документация
								</a>
							</li>
							<li>
								<a href='/conclusion' className='hover:text-white transition-colors'>
									Безопасность
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Помощь
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									FAQ
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Поддержка
								</a>
							</li>
						</ul>
					</div>

					<div className='text-center sm:text-left'>
						<h4 className='text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4'>Контакты</h4>
						<ul className='space-y-1.5 sm:space-y-2 text-xs sm:text-sm'>
							<li className='flex items-center gap-2 justify-center sm:justify-start'>
								<span>📧</span>
								<a href='mailto:info@securenet.ru' className='hover:text-white transition-colors'>
									info@securenet.ru
								</a>
							</li>
							<li className='flex items-center gap-2 justify-center sm:justify-start'>
								<span>📱</span>
								<span>+7 (999) 123-45-67</span>
							</li>
							<li className='flex items-center gap-2 justify-center sm:justify-start'>
								<span>📍</span>
								<span>Москва, Россия</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-xs sm:text-sm text-center'>
					<p>&copy; 2024 SecureNet. Все права защищены.</p>
				</div>
			</div>
		</footer>
	)
}
