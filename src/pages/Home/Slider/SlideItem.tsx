import cn from 'classnames';
import { SlideItemProps } from "./types";
import styles from './Slide.module.scss';

const sanitizeText = (text: string) => {
  return text.replace(/<[^>]*>?/gm, '');
}

const SlideItem = ({id, imageUrl, title, description, isActive}: SlideItemProps) => {
  const cleanedTitle = sanitizeText(title);
  const cleanedDescription = sanitizeText(description);

  return (
    <div id={`slide-${id}`} className={cn(styles.slideItem, isActive ? styles.active : '')}>
      <div className={styles.slideItem__image} style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className={styles.slideItem__textWrapper}>
        <h4>{cleanedTitle}</h4>
        <p className={styles.slideItem__description}>{cleanedDescription}</p>
      </div>
    </div>
  )
}

export default SlideItem;