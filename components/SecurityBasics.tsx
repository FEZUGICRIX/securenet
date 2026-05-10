export default function SecurityBasics() {
	const basics = [
		{
			icon: '🔒',
			title: 'Пароли',
			description:
				'Создавайте сложные и уникальные пароли для каждого аккаунта. Минимум 12 символов, буквы, цифры и спецсимволы. Используйте менеджер паролей.',
		},
		{
			icon: '🔐',
			title: '2FA',
			description:
				'Двухфакторная аутентификация — дополнительный уровень защиты. Даже если пароль украден, без второго фактора войти невозможно.',
		},
		{
			icon: '📧',
			title: 'Фишинг',
			description:
				'Не переходите по подозрительным ссылкам и не вводите данные на непроверенных сайтах. Проверяйте адрес отправителя.',
		},
	]

	return (
		<section id='basics' className='py-12 sm:py-16 lg:py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-8 sm:mb-12'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
						Основы безопасности
					</h2>
					<p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4'>
						Изучайте основы кибербезопасности и защитите свои аккаунты от взлома и мошенников
					</p>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
					{basics.map((item, index) => (
						<div
							key={index}
							className='bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-200'
						>
							<div className='text-4xl sm:text-5xl mb-3 sm:mb-4'>{item.icon}</div>
							<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3'>
								{item.title}
							</h3>
							<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
