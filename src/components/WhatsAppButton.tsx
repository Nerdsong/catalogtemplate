import Link from "next/link";

const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;

export function WhatsAppButton() {
  if (!phone) {
    return null;
  }

  return (
    <Link
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700"
    >
      WhatsApp
    </Link>
  );
}
