import { Database } from '@/database.types'
import { SupabaseClient } from '@supabase/supabase-js'

export async function uploadImageFromUrl(
    imageUrl: string,
    bucketName: string,
    fileName: string,
    supabase: SupabaseClient<Database>
) {
    try {
        // Fetch the image from the URL
        const response = await fetch(imageUrl)
        if (!response.ok) {
            throw new Error('Failed to fetch the image.')
        }

        // Convert the image to a Blob
        const blob = await response.blob()

        // Upload the Blob to Supabase storage
        const { data, error } = await supabase.storage
            .from(bucketName)
            .upload(fileName, blob, {
                contentType: blob.type,
            })

        if (error) {
            throw new Error('Failed to upload image: ' + error.message)
        }

        const { data: imageData } = supabase.storage
            .from(bucketName)
            .getPublicUrl(fileName)

        if (!imageData) {
            throw new Error('Failed to get public URL: no data')
        }

        console.log('Image uploaded successfully:', data)
        return imageData.publicUrl
    } catch (error) {
        console.error('Error uploading image:', error)
    }
}
