'use client'

import { useActions, useUIState } from 'ai/rsc'

import type { AI } from '@/lib/chat/actions'

interface Career {
  careerName: string
  onetCode: string
  medianAnnualSalary: number
  description: string
}

export function Careers({ props: careers }: { props: Career[] }) {
  const [, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 overflow-y-scroll pb-4 text-sm sm:flex-row">
        {careers.map(career => (
          <div key={career.onetCode}>
            <p>{career.careerName}</p>
            <p>{career.onetCode}</p>
            <p>{career.medianAnnualSalary}</p>
            <p>{career.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
