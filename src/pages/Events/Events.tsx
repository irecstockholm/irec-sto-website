import { useQuery } from '@apollo/client';
import styles from './Events.module.scss';
import { getEvents } from '../../services/getContent';
import { getExcerpt } from '../../utils/helpers';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';

interface EventData {
  image: string;
  title: string;
  date: string;
  content: string;
  link: string;
}

const getEventSummary = (eventData: any): EventData => {
  const image = eventData.featuredImage?.node?.mediaItemUrl;
  const title = eventData.title;
  const content = getExcerpt(eventData.content);
  const date = eventData.excerpt;
  const link = eventData.uri;
  const data = { image, title, content, date, link };
  return data;
}

const Events = () => {
  const [featuredEvent, setFeaturedEvent] = useState(
    { image: "", title: "", content: "", date: "" });
  const [allEvents, setAllEvents] = useState<EventData[]>([]);

  const { loading, error, data } = useQuery(getEvents("categoryName", "events"));
  const { loading: featuredEventLoading, error: featuredEventError, data: featuredEventData } = useQuery(getEvents("tag", "featured"));

  useEffect(() => {
    if (featuredEventData) {
      const summaryFeatured = getEventSummary(featuredEventData.posts.nodes[0]);
      setFeaturedEvent(summaryFeatured);
    }
  }, [featuredEventData]);

  useEffect(() => {
    if (data) {
      let eventsList: EventData[] = [];
      data.posts.nodes.forEach((eventData: any) => {
        const summary = getEventSummary(eventData);
        eventsList.push(summary);
      });
      setAllEvents(eventsList);
    }
  }, [data]);

  return (
    <>
      {
        loading && <Loader />
      }
      <div className={styles.featuredEvent}>
        <div className={styles.featuredEvent__image} style={{ backgroundImage: `url(${featuredEvent.image})` }}></div>
        <div className={styles.featuredEvent__titleContent}>
          <h3 className={styles.featuredEvent__title}>{featuredEvent.title}</h3>
          <div className={styles.featuredEvent__content} dangerouslySetInnerHTML={{ __html: featuredEvent.content }}></div>
        </div>
        <div className={styles.featuredEvent__timeVenue}>
          <h4>Time</h4>
          <div className={styles.featuredEvent__date} dangerouslySetInnerHTML={{ __html: featuredEvent.date }}></div>
        </div>
      </div>
      <div className={styles.allEvents}>
        <h2>Events</h2>
        <ul>
          {allEvents.map((eventContent, index) => (
            <li className={styles.allEvents__listItem} key={`event-${index}`}>
              <div className={styles.allEvents__date} dangerouslySetInnerHTML={{ __html: eventContent.date}}></div>
              <div className={styles.allEvents__titleContent}>
                <h4 className={styles.allEvents__title}>{eventContent.title}</h4>
                <div className={styles.allEvents__content} dangerouslySetInnerHTML={{ __html: eventContent.content}}></div>
                <a className={styles.allEvents__link} href={`/event${eventContent.link}`}>Read more</a>
              </div>
              <div className={styles.allEvents__image} style={{ backgroundImage: `url(${eventContent.image})` }}></div>
            </li>
          ) )}
        </ul>
      </div>
    </>

  );
}

export default Events;