'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { contact } from './contactAction'

const initialState: { error?: string; success?: string } = {}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            disabled={pending}
            aria-disabled={pending}
            type='submit'
            className='btn btn-primary'
        >
            Submit
        </button>
    )
}

export default function ContactForm() {
    const [state, formAction] = useFormState<typeof initialState, FormData>(
        contact,
        initialState
    )

    return (
        <form action={formAction} className='flex w-full flex-col gap-4'>
            <label htmlFor='message' className='text-lg font-bold'>
                Message me (powered by EmailMe)
            </label>
            <textarea
                name='message'
                id='message'
                className='input input-bordered p-4 pt-2'
                required
            ></textarea>
            <SubmitButton />
            {state.success && <p className='text-success'>{state.success}</p>}
            {state.error && <p className='text-error'>{state.error}</p>}
        </form>
    )
}
