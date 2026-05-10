'use client'

import { useState } from 'react'

export default function AnalysisForm() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		twoFactor: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Form submitted:', formData)
	}

	return (
		<section className='py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
			<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden'>
					<div className='lg:flex'>
						<div className='lg:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 sm:p-8 lg:p-10 text-white'>
							<h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>Пройди свой анализ</h2>
							<p className='text-blue-100 text-sm sm:text-base leading-relaxed'>
								Заполните форму и получите детальный анализ безопасности ваших аккаунтов
							</p>
						</div>

						<div className='p-6 sm:p-8 lg:p-10 lg:w-3/5'>
							<form onSubmit={handleSubmit} className='space-y-5 sm:space-y-6'>
								<div>
									<label className='flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 mb-2'>
										<span className='text-lg sm:text-xl'>📧</span>
										Адрес электронной почты
									</label>
									<input
										type='email'
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base'
										placeholder='example@mail.com'
									/>
								</div>

								<div>
									<label className='flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 mb-2'>
										<span className='text-lg sm:text-xl'>🔒</span>
										Используете ли вы сложные пароли?
									</label>
									<select
										value={formData.password}
										onChange={(e) => setFormData({ ...formData, password: e.target.value })}
										className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base'
									>
										<option value=''>Выберите вариант</option>
										<option value='yes'>Да, всегда</option>
										<option value='sometimes'>Иногда</option>
										<option value='no'>Нет</option>
									</select>
								</div>

								<div>
									<label className='flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 mb-2'>
										<span className='text-lg sm:text-xl'>🔐</span>
										Включена ли двухфакторная аутентификация?
									</label>
									<select
										value={formData.twoFactor}
										onChange={(e) => setFormData({ ...formData, twoFactor: e.target.value })}
										className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base'
									>
										<option value=''>Выберите вариант</option>
										<option value='yes'>Да, везде</option>
										<option value='partial'>На некоторых аккаунтах</option>
										<option value='no'>Нет</option>
									</select>
								</div>

								<button
									type='submit'
									className='w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg'
								>
									Отправить анализ →
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
