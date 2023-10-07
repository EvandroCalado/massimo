export type NotificationProps = {
  title?: string;
};

export default function Notification({
  title = 'Notification',
}: NotificationProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
