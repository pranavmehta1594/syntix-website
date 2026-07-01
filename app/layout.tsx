import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { FloatingActions } from '@/components/ui/floating-actions'
import { GlobalThemeBackground } from '@/components/ui/theme-elements'
import { ScheduleModal } from '@/components/ui/schedule-modal'
import { Suspense } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Optimus - Platform to Create',
  description: 'The creative platform for teams who ship. Build, deploy, and scale with unprecedented velocity.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-slate-50">
        <GlobalThemeBackground />
        {children}
        <Suspense fallback={null}>
          <ScheduleModal />
        </Suspense>
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  )
}
