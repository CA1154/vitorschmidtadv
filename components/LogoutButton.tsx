import { signOut } from "@/app/admin/actions";

export default function LogoutButton() {
  return (
    <form action={signOut}>
      <button type="submit">Sair</button>
    </form>
  );
}
