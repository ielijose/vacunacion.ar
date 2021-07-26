import { getTimeAgo } from '../utils/date';

export default function TimeAgo({ timestamp }) {
  const locale = 'es-AR';
  const timeago = getTimeAgo(timestamp, locale);

  const date = new Date(timestamp);
  const formattedDate = new Intl.DateTimeFormat(locale, {
    month: 'long',
    day: 'numeric',
  }).format(date);

  return (
    <time
      title={formattedDate}
      dateTime={formattedDate}
      className="font-semibold border-b border-gray-300 border-dashed"
    >
      {timeago}
    </time>
  );
}
