type TagProps = {
  text: string
}

export default function Tag({ text }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-forest-700 px-3 py-1 text-sm font-medium text-off-white">
      {text}
    </span>
  )
}
