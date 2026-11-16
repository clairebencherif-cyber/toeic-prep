import { expect, test } from 'vitest'
import type { Question, Session } from './types'

// Si une question ci-dessous ne respecte pas la forme de `Question`,
// TypeScript refuse de compiler : c'est le but des types.
const example: Question = {
  id: '3f2b8c1e-5a4d-4e6f-9b7a-1c2d3e4f5a6b',
  createdAt: '2026-11-16T13:00:00.000Z',
  text: 'The manager ___ the report yesterday.',
  choices: ['reviews', 'reviewed', 'will review', 'is reviewing'],
  correctAnswer: 'B',
  explanation: '« yesterday » indique le passé, donc on utilise le prétérit : reviewed.',
  part: 5,
  type: 'verb-tense',
  level: 'easy',
}

test('la bonne réponse correspond à un des 4 choix', () => {
  const index = 'ABCD'.indexOf(example.correctAnswer)
  expect(example.choices[index]).toBe('reviewed')
})

test('une session démarre à la position 0', () => {
  const session: Session = {
    id: '9a8b7c6d-1111-4222-8333-444455556666',
    createdAt: '2026-11-16T13:05:00.000Z',
    kind: 'short',
    status: 'in-progress',
    questionIds: [example.id],
    position: 0,
    durationSeconds: 0,
  }
  expect(session.position).toBe(0)
})
