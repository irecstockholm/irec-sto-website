import * as DOMPurify from 'dompurify';

export const sanitizeContent = (data: string) => {
  const content = data.replace("\n", "");
  return DOMPurify.sanitize(content);
}

export const getExcerpt = (content: string) => {
  const pattern = /<p>.*?<\/p>/gm
  const excerpt = pattern.exec(content);
  return excerpt ? excerpt[0] : "";
}