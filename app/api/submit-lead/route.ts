import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, email, phone, source } = body

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Get HighLevel webhook URL from environment
    const webhookUrl = process.env.NEXT_PUBLIC_HIGHLEVEL_WEBHOOK_URL

    if (!webhookUrl || webhookUrl === 'YOUR_HIGHLEVEL_WEBHOOK_URL_HERE') {
      console.warn('HighLevel webhook URL not configured')

      // Return success for development even if webhook is not configured
      return NextResponse.json({
        success: true,
        message: 'Lead captured (webhook not configured)',
        data: { firstName, email, phone, source }
      })
    }

    // Prepare data for HighLevel
    const leadData = {
      firstName: firstName || '',
      email,
      phone: phone || '',
      source: source || 'website',
      timestamp: new Date().toISOString(),
      tags: ['jesus-commands', source || 'website']
    }

    // Send to HighLevel
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    })

    if (!response.ok) {
      throw new Error(`HighLevel API error: ${response.statusText}`)
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully'
    })

  } catch (error) {
    console.error('Error submitting lead:', error)

    return NextResponse.json(
      {
        error: 'Failed to submit lead',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
