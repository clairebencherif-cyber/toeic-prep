// Les « types » décrivent la forme des données. TypeScript vérifie que
// chaque question et chaque session respecte cette forme.

// Une des 4 lettres de réponse du TOEIC.
export type ChoiceLetter = 'A' | 'B' | 'C' | 'D'

// Numéro de la partie du TOEIC (1 à 7). Pour l'instant on ne code que la 5.
export type Part = 1 | 2 | 3 | 4 | 5 | 6 | 7

// Section du test : écoute (parties 1 à 4) ou lecture (parties 5 à 7).
export type Section = 'listening' | 'reading'

// Ce que teste la question. Exemple : « The manager ___ the report »
// teste le temps du verbe, donc le type est 'verb-tense'.
export type QuestionType =
  | 'verb-tense'
  | 'word-form'
  | 'preposition'
  | 'conjunction'
  | 'vocabulary'
  | 'pronoun'

// Difficulté estimée. C'est une estimation : on ne la connaît pas vraiment
// pour des questions générées (voir SPEC.md).
export type Level = 'easy' | 'medium' | 'hard'

// Les 4 choix : un tableau de 4 textes exactement, dans l'ordre A, B, C, D.
export type Choices = [string, string, string, string]

export interface Question {
  id: string // UUID, identifiant unique
  createdAt: string // date de création, format ISO : "2026-11-16T13:00:00.000Z"
  groupId?: string // optionnel : sert aux conversations et passages (étape 3)
  text: string
  choices: Choices
  correctAnswer: ChoiceLetter
  explanation: string
  part: Part
  type: QuestionType
  level: Level
}

export type SessionKind = 'short' | 'full'
export type SessionStatus = 'in-progress' | 'finished'

export interface Session {
  id: string
  createdAt: string
  kind: SessionKind // exercice court ou test blanc complet
  status: SessionStatus
  // Questions de la session, dans l'ordre. On les fige au départ pour que
  // la reprise retrouve exactement les mêmes questions.
  questionIds: string[]
  position: number // index de la question atteinte (0 = la première)
  durationSeconds: number // rempli à la fin de la session
}
