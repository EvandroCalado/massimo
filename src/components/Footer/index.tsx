export type FooterProps = {
  title?: string;
};

export default function Footer({ title = 'Footer' }: FooterProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
