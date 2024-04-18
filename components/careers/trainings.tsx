'use client'

import { useActions, useUIState } from 'ai/rsc'

import type { AI } from '@/lib/chat/actions'

interface Training {
  name: string
  institution: string
  cost: number
  duration: string
}

export function Trainings({ props: trainings }: { props: Training[] }) {
  const [, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 overflow-y-scroll pb-4 text-sm sm:flex-row">
        {trainings.map(training => (
          <div key={training.name}>
            <p>{training.name}</p>
            <p>{training.institution}</p>
            <p>{training.cost}</p>
            <p>{training.duration}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
