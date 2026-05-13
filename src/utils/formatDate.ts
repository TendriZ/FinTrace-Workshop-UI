export const formatDate = (value: string | Date) => {
  const date = typeof value === 'string' ? new Date(value) : value;

  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
};