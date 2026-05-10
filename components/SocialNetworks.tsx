export default function SocialNetworks() {
	const networks = [
		{
			name: 'ВКонтакте',
			icon: '💬',
			description:
				'Настройте приватность профиля, включите двухфакторную аутентификацию, проверьте активные сеансы и управляйте подключёнными приложениями.',
			color: 'from-blue-500 to-blue-700',
			link: '#vk',
		},
		{
			name: 'Telegram',
			icon: '✈️',
			description:
				'Скройте номер телефона, включите облачный пароль, используйте секретные чаты и контролируйте привязанные устройства.',
			color: 'from-cyan-500 to-blue-600',
			link: '#telegram',
		},
		{
			name: 'Общие советы',
			icon: '🛡️',
			description:
				'Регулярно проверяйте активные сеансы, используйте уникальные пароли, будьте осторожны с публичным Wi-Fi и подозрительными ссылками.',
			color: 'from-indigo-500 to-purple-600',
			link: '#tips',
		},
	]

	return (
		<section id='social' className='py-12 sm:py-16 lg:py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-8 sm:mb-12'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
						Защита в социальных сетях
					</h2>
					<p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4'>
						Пошаговые инструкции по настройке безопасности в популярных соцсетях
					</p>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
					{networks.map((network, index) => (
						<div
							key={index}
							className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
						>
							<div
								className={`h-32 sm:h-40 bg-gradient-to-br ${network.color} flex items-center justify-center`}
							>
								<span className='text-5xl sm:text-6xl lg:text-7xl'>{network.icon}</span>
							</div>
							<div className='p-5 sm:p-6'>
								<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3'>
									{network.name}
								</h3>
								<p className='text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed'>
									{network.description}
								</p>
								<a
									href={network.link}
									className='text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm sm:text-base inline-flex items-center gap-2'
								>
									Подробнее
									<span>→</span>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
