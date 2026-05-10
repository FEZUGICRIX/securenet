'use client'

import { useState } from 'react'

export default function Checklist() {
	const [tasks, setTasks] = useState([
		{ id: 1, text: 'Включи двухфакторную аутентификацию во всех соцсетях', completed: false },
		{ id: 2, text: 'Смени пароли на уникальные и сложные (12+ символов)', completed: false },
		{ id: 3, text: 'Проверь активные сеансы и завершите незнакомые', completed: false },
		{ id: 4, text: 'Настрой приватность профиля (закрытый тип)', completed: false },
		{ id: 5, text: 'Скрой номер телефона в Telegram', completed: false },
		{ id: 6, text: 'Отзови доступ у неиспользуемых приложений', completed: false },
	])

	const toggleTask = (id: number) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
	}

	const completedCount = tasks.filter((t) => t.completed).length
	const progress = (completedCount / tasks.length) * 100

	return (
		<section className='py-12 sm:py-16 lg:py-20 bg-white'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-8 sm:mb-12'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
						Твой чек-лист безопасности
					</h2>
					<p className='text-base sm:text-lg text-gray-600 px-4'>
						Выполни все пункты для максимальной защиты своих аккаунтов
					</p>
				</div>

				<div className='bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-200'>
					<div className='mb-5 sm:mb-6'>
						<div className='flex justify-between items-center mb-2'>
							<span className='text-xs sm:text-sm font-semibold text-gray-700'>
								Прогресс безопасности
							</span>
							<span className='text-base sm:text-lg font-bold text-blue-600'>
								{Math.round(progress)}%
							</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden'>
							<div
								className='bg-gradient-to-r from-green-500 to-blue-600 h-full rounded-full transition-all duration-500'
								style={{ width: `${progress}%` }}
							></div>
						</div>
					</div>

					<div className='space-y-2.5 sm:space-y-3'>
						{tasks.map((task) => (
							<div
								key={task.id}
								className='flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-all cursor-pointer active:scale-98'
								onClick={() => toggleTask(task.id)}
							>
								<div
									className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
										task.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'
									}`}
								>
									{task.completed && (
										<svg
											className='w-3 h-3 sm:w-4 sm:h-4 text-white'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={3}
												d='M5 13l4 4L19 7'
											/>
										</svg>
									)}
								</div>
								<span
									className={`flex-1 text-sm sm:text-base ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}
								>
									{task.text}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
