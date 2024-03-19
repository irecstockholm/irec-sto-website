import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../../services/getContent";
import styles from './EventPost.module.scss';

const EventPost = () => {

  const { slug } = useParams();
  const { loading, error, data } = useQuery(getPostBySlug(slug || ""));

  return (
    <div className={styles.eventPost}>
      <Link className={styles.backButton} to="/events">&larr; Back to Events</Link>
      {data && (
        <div className={styles.eventPost__timeWrapper}>
          <h4>Time</h4>
          <div dangerouslySetInnerHTML={{__html: data.post.excerpt}}></div>
        </div>
      )}
      {data && <h2>{data.post.title}</h2>}
      {data && <div dangerouslySetInnerHTML={{__html: data.post.content}}></div>}
    </div>
  )
}

export default EventPost;