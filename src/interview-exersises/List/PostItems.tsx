//@ts-nocheck

export default function PostItems({postTitle, key}) {
  return (
          <li key={key}>{postTitle}</li>
  )
}
