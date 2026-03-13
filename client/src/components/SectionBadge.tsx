export function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-gray-300 border border-gray-600 rounded-full px-4 py-1.5 mb-6">
      {text}
    </span>
  );
}
