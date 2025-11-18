import React from 'react'

type Props = { data: Record<string, any> | Array<Record<string, any>> }

// Minimal helper to inject JSON-LD safely
export default function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
