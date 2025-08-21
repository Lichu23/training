//@ts-nocheck

export default function UserItem({user, id}) {
  return <li key={id}>{user.name}</li>;
}
