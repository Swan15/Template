'use server'

import { Database } from '@/database.types'
import { createClient } from '@supabase/supabase-js'

export async function updateCredits(
    credits: number,
    userId: string
): Promise<number> {
    const serverSupabase = createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVER_KEY!
    )
    const { data, error } = await serverSupabase
        .from('credits')
        .select('credits, unlimited')
        .eq('user_id', userId)
        .single()

    if (error) {
        throw error
    }
    if (!data) {
        throw new Error('User not found')
    }

    if (data.unlimited) {
        return -1
    }

    const finalCredits = data.credits + credits
    if (finalCredits < 0) {
        throw new Error('Not enough credits')
    }
    const { error: updateError } = await serverSupabase
        .from('credits')
        .update({ credits: finalCredits })
        .eq('user_id', userId)
    if (updateError) {
        throw updateError.message
    }

    return finalCredits
}
