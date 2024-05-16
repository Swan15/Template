'use server'

import { currentUser } from '@clerk/nextjs/server'
import { emailMe } from '@emailme/emailme-js'

export async function contact(
    initialState: { error?: string; success?: string },
    formData: FormData
) {
    const user = await currentUser()
    if (!user) {
        return { error: 'You must be logged in to contact us' }
    }
    const details = formData.get('message')
    if (!details) {
        return { error: 'Please provide details' }
    }
    const res = await emailMe(
        'Contact form submission',
        `User: ${user.emailAddresses[0].emailAddress}\n\n${details}`
    )
    if (res.code !== 200) {
        return { error: res.message }
    }
    return { error: undefined, success: 'Message sent' }
}
