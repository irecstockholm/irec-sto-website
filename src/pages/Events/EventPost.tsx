import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../../services/getContent";
import styles from './EventPost.module.scss';
import Loader from "../../components/Loader/Loader";

const EventPost = () => {

  const { slug } = useParams();
  const { loading, error, data } = useQuery(getPostBySlug(slug || ""));

  return (
    <div className={styles.eventPost}>
      {
        loading && <Loader />
      }
      <Link className={styles.backButton} to="/events">&larr; Back to Events</Link>
      {data && <h2>{data.post.title}</h2>}
      {data && (
        <div className={styles.eventPost__timeWrapper}>
          <h4>Time</h4>
          <div dangerouslySetInnerHTML={{__html: data.post.excerpt}}></div>
        </div>
      )}
      {data && <div dangerouslySetInnerHTML={{__html: data.post.content}}></div>}
    </div>
  )
}

export default EventPost;