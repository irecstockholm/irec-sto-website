import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import * as DOMPurify from 'dompurify';
import styles from './Home.module.scss';
import './HomeWP.scss';
import { getPage } from '../../services/getPage';

const Home = () => {
  const { loading, error, data } = useQuery(getPage("welcome-to-irec-stockholm"));
  const [pageContent, setPageContent] = useState("");

  useEffect(() => {
    if (data) {
      const content = data.page.content.trim("\n");
      const clean = DOMPurify.sanitize(content);
      setPageContent(clean);
    }
  }, [data]);

  return (
    <div className={styles.homepage} dangerouslySetInnerHTML={{__html: pageContent}}>
    </div>
  );
}

export default Home;