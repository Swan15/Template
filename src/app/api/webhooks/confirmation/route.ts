// import { supabase } from '@/supabase'
import { emailMe } from '@emailme/emailme-js'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_PRIVATE || '')
const secret = process.env.WEBHOOK_SECRET || ''

export async function POST(req: Request) {
    try {
        const body = await req.text()

        const signature = headers().get('stripe-signature')

        const event = stripe.webhooks.constructEvent(
            body,
            signature ?? '',
            secret
        )

        if (event.type === 'checkout.session.completed') {
            if (!event.data.object.customer_details?.email) {
                throw new Error(`missing user email, ${event.id}`)
            }

            // if (!event.data.object.metadata?.solo) {
            //     throw new Error(`missing solo on metadata, ${event.id}`)
            // }
            // const solo = event.data.object.metadata.solo as 'true' | 'false'

            // const { error } = await supabase.from('subscription').insert({
            //     payment_id: event.data.object.id,
            //     email: event.data.object.customer_details.email,
            // })

            // if (error) {
            //     await emailMe(
            //         'Error saving subscription',
            //         JSON.stringify({
            //             error,
            //             email: event.data.object.customer_details.email,
            //             solo,
            //         })
            //     )
            // }
        }
        if (event.type == 'customer.subscription.deleted') {
            await emailMe(
                'Error deleting subscription',
                JSON.stringify(event.data)
            )
        }

        return NextResponse.json({ result: event, ok: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {
                message: 'something went wrong',
                ok: false,
            },
            { status: 500 }
        )
    }
}
