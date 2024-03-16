import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import * as DOMPurify from 'dompurify';
import styles from './Home.module.scss';
import './HomeWP.scss';
import { getPage } from '../../services/getPage';
import { getYearlyGallery } from '../../services/getImage';
import { SlideItemProps } from './Slider/types';
import Slider from './Slider/Slider';

const Home = () => {
  const { loading, error, data } = useQuery(getPage("welcome-to-irec-stockholm"));
  const {loading: galleryLoading, error: galleryError, data: galleryData} = useQuery(getYearlyGallery());
  
  const [pageContent, setPageContent] = useState("");
  const [yearlySlides, setYearylySlides] = useState<SlideItemProps[]>([]);

  useEffect(() => {
    if (data) {
      const content = data.page.content.trim("\n");
      const clean = DOMPurify.sanitize(content);
      setPageContent(clean);
    }
  }, [data]);

  useEffect(() => {
    if (galleryData) {
      const gallery = galleryData.mediaItems.edges.map((edge: any) => {
        const imageUrl = edge.node.mediaItemUrl;
        const title = edge.node.caption;
        const description = edge.node.description;
        return {imageUrl, title, description};
      })
      setYearylySlides(gallery);
    }
  }, [galleryData]);

  return (
    <>
      <div className={styles.homepage} dangerouslySetInnerHTML={{__html: pageContent}}>
      </div>
      <Slider slides={yearlySlides} />
    </>
  );
}

export default Home;
