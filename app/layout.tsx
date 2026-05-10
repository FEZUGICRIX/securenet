import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'SecureNet - Защити свои аккаунты в соцсетях',
	description: 'Сервис для проверки уязвимостей ваших аккаунтов в социальных сетях',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className='min-h-full flex flex-col mx-auto w-full'>{children}</body>
		</html>
	)
}
