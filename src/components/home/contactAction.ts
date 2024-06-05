'use server'

import { createClient } from '@/helpers/supabase/server'
import { emailMe } from '@emailme/emailme-js'

export async function contact(
    initialState: { error?: string; success?: string },
    formData: FormData
) {
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
        return { error: 'You must be logged in to contact us' }
    }
    const details = formData.get('message')
    if (!details) {
        return { error: 'Please provide details' }
    }
    const res = await emailMe(
        'Contact form submission',
        `User: ${user.email}\n\n${details}`
    )
    if (res.code !== 200) {
        return { error: res.message }
    }
    return { error: undefined, success: 'Message sent' }
}
