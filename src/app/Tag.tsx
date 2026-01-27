type TagProps = {
  text: string
}

export default function Tag({ text }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-off-white px-3 py-1 text-sm font-medium text-forest-900">
      {text}
    </span>
  )
}
