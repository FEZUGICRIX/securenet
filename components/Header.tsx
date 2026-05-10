'use client'

import { useState } from 'react'

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className='sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-4 bg-gray-50'>
			<div className='max-w-7xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200'>
				<div className='px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-14 sm:h-16'>
						<div className='flex items-center'>
							<span className='text-lg sm:text-xl font-bold text-gray-900'>SecureNet</span>
						</div>

						<nav className='hidden md:flex items-center space-x-6 lg:space-x-8'>
							<a
								href='#'
								className='text-xs lg:text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'
							>
								Тесты
							</a>
							<a
								href='#'
								className='text-xs lg:text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'
							>
								Разное
							</a>
							<a
								href='#'
								className='text-xs lg:text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'
							>
								Новости
							</a>
							<a
								href='#'
								className='text-xs lg:text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'
							>
								Помощь
							</a>
							<a
								href='#'
								className='text-xs lg:text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'
							>
								О нас
							</a>
						</nav>

						<div className='flex items-center gap-3 sm:gap-4'>
							<button className='hidden md:block bg-blue-600 text-white px-4 lg:px-6 py-1.5 lg:py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-xs lg:text-sm'>
								Войти
							</button>

							<button
								className='md:hidden text-gray-700 p-2 -mr-2'
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								aria-label='Toggle menu'
							>
								<svg
									className='w-5 h-5 sm:w-6 sm:h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									{mobileMenuOpen ? (
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M6 18L18 6M6 6l12 12'
										/>
									) : (
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M4 6h16M4 12h16M4 18h16'
										/>
									)}
								</svg>
							</button>
						</div>
					</div>

					{mobileMenuOpen && (
						<div className='md:hidden py-3 sm:py-4 border-t border-gray-200'>
							<nav className='flex flex-col space-y-3'>
								<a
									href='#'
									className='text-sm text-gray-700 hover:text-blue-600 transition-colors py-1'
								>
									Тесты
								</a>
								<a
									href='#'
									className='text-sm text-gray-700 hover:text-blue-600 transition-colors py-1'
								>
									Разное
								</a>
								<a
									href='#'
									className='text-sm text-gray-700 hover:text-blue-600 transition-colors py-1'
								>
									Новости
								</a>
								<a
									href='#'
									className='text-sm text-gray-700 hover:text-blue-600 transition-colors py-1'
								>
									Помощь
								</a>
								<a
									href='#'
									className='text-sm text-gray-700 hover:text-blue-600 transition-colors py-1'
								>
									О нас
								</a>
								<button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full text-sm font-medium mt-2'>
									Войти
								</button>
							</nav>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}
