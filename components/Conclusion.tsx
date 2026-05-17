export default function Conclusion() {
	const results = [
		{
			icon: '🔒',
			title: 'Надёжные пароли',
			text: 'Вы перестанете использовать простые и одинаковые пароли — каждый аккаунт получит уникальную защиту.',
		},
		{
			icon: '📱',
			title: 'Двухфакторная аутентификация',
			text: 'Даже если пароль окажется в руках злоумышленника, войти в аккаунт без второго фактора у него не получится.',
		},
		{
			icon: '👁️',
			title: 'Контроль над устройствами',
			text: 'Вы будете регулярно проверять активные сеансы и сразу замечать посторонние подключения к своим аккаунтам.',
		},
		{
			icon: '🎣',
			title: 'Защита от фишинга',
			text: 'Вы научитесь распознавать мошеннические сообщения и не будете передавать коды подтверждения посторонним.',
		},
		{
			icon: '🛡️',
			title: 'Безопасное поведение в сети',
			text: 'Вы перестанете подключаться к неизвестным Wi-Fi сетям, переходить по подозрительным ссылкам и скачивать приложения из непроверенных источников.',
		},
		{
			icon: '🔄',
			title: 'Актуальная защита',
			text: 'Регулярные обновления приложений закроют уязвимости — ваши аккаунты будут защищены от новых угроз.',
		},
	]

	return (
		<section className='py-12 sm:py-16 lg:py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-8 sm:mb-12'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
						Что изменится после применения советов
					</h2>
					<p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4'>
						Соблюдение рекомендаций значительно снижает вероятность взлома аккаунта и утечки
						персональных данных
					</p>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
					{results.map((item, index) => (
						<div
							key={index}
							className='flex gap-4 p-5 sm:p-6 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300'
						>
							<div className='text-3xl flex-shrink-0'>{item.icon}</div>
							<div>
								<h3 className='text-base sm:text-lg font-bold text-gray-900 mb-1'>{item.title}</h3>
								<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
