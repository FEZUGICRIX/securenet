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
				<div className='text-center mb-8 sm:mb-12'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
						Проверь свои знания
					</h2>
					<p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4'>
						Человечество хранит половину своей жизни в телефоне, но всё ещё способно отправить код
						подтверждения человеку с ником «Поддержка_Срочно»
					</p>
				</div>
				<div className='bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden'>
					<div className='lg:flex'>
						<div className='lg:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 sm:p-8 lg:p-10 text-white'>
							<h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>Проверь свои знания</h2>
							<p className='text-blue-100 text-sm sm:text-base leading-relaxed'>
								Вам пришло сообщение от «службы поддержки» с просьбой подтвердить пароль. Ваши
								действия?
							</p>
						</div>

						<div className='p-6 sm:p-8 lg:p-10 lg:w-3/5'>
							<form onSubmit={handleSubmit} className='space-y-5 sm:space-y-6'>
								<div className='space-y-3'>
									{[
										{ value: 'send_code', label: 'Сообщить код по ссылке из сообщения' },
										{
											value: 'check_official',
											label: 'Проверить, отправлено ли письмо через официальный канал',
										},
										{ value: 'ignore', label: 'Проигнорировать, это явный фишинг' },
									].map((option) => (
										<label
											key={option.value}
											className='flex items-center gap-3 p-3 sm:p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all'
										>
											<input
												type='radio'
												name='phishing_action'
												value={option.value}
												onChange={(e) => setFormData({ ...formData, twoFactor: e.target.value })}
												className='w-4 h-4 text-blue-600'
											/>
											<span className='text-sm sm:text-base text-gray-700'>{option.label}</span>
										</label>
									))}
								</div>

								<div>
									<label className='flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 mb-2'>
										<span className='text-lg sm:text-xl'>💬</span>
										Прочие действия
									</label>
									<input
										type='text'
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base'
										placeholder='Напишите свой вариант...'
									/>
								</div>

								<button
									type='submit'
									className='w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg'
								>
									Отправить ответ →
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
