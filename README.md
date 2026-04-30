# Template Catalog (Next.js + WhatsApp)

Reusable product catalog template for small businesses.  
This is not a full e-commerce; orders are finalized via WhatsApp.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Zustand (cart state)

## Setup

1. Copy `.env.example` to `.env.local`
2. Fill the required variables:
   - `NEXT_PUBLIC_WHATSAPP_PHONE`

3. Install and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Product content is mocked in `src/lib/mockProducts.ts`.
- Cart checkout message is generated in `src/app/carrito/page.tsx`.
- The UI clearly shows: `Order will be completed via WhatsApp`.
