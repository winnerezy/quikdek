import { z } from "zod"

const deckFormSchema = z.object({
    title: z.string().min(1, {
        message: 'Enter a title'
    }),
    descipition: z.string().optional(),
})

const flashCardSchema = z.object({
    question: z.string().min(1, {
        message: 'Enter a question'
    }),
    answer: z.string().min(1, {
        message: 'Enter an answer'
    })
})

export type deckFormSchema = z.infer<typeof deckFormSchema>

export type flashCardSchema = z.infer<typeof flashCardSchema>