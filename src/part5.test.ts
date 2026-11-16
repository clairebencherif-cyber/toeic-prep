import { describe, expect, test } from 'vitest'
import data from '../public/questions/part5.json'
import type { Question } from './types'

// On dit à TypeScript que le JSON doit avoir la forme « liste de Question ».
const questions = data as Question[]

describe('banque de la Partie 5', () => {
  test('contient 30 questions', () => {
    expect(questions).toHaveLength(30)
  })

  test('chaque identifiant est un UUID unique', () => {
    const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
    const ids = questions.map((q) => q.id)
    for (const id of ids) expect(id).toMatch(uuid)
    expect(new Set(ids).size).toBe(30)
  })

  test('chaque question a 4 choix différents et une bonne réponse valide', () => {
    for (const q of questions) {
      expect(q.choices).toHaveLength(4)
      expect(new Set(q.choices).size).toBe(4)
      expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer)
    }
  })

  test('chaque question est de la Partie 5, avec un trou et une explication', () => {
    for (const q of questions) {
      expect(q.part).toBe(5)
      expect(q.text).toContain('___')
      expect(q.explanation.length).toBeGreaterThan(10)
      expect(Number.isNaN(Date.parse(q.createdAt))).toBe(false)
    }
  })

  test('la bonne réponse n\'est pas toujours à la même place', () => {
    const letters = new Set(questions.map((q) => q.correctAnswer))
    expect(letters.size).toBe(4)
  })
})
