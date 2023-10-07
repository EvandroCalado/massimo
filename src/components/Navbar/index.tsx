export type NavbarProps = {
  title?: string;
};

export default function Navbar({ title = 'Navbar' }: NavbarProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
