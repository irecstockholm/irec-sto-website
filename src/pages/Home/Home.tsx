import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import styles from './Home.module.scss';
import './HomeWP.scss';
import { getPage } from '../../services/getContent';
import { getYearlyGallery } from '../../services/getImage';
import { SlideItemProps } from './Slider/types';
import Slider from './Slider/Slider';
import { sanitizeContent } from '../../utils/helpers';

const Home = () => {
  const { loading, error, data } = useQuery(getPage("welcome-to-irec-stockholm"));
  const {loading: galleryLoading, error: galleryError, data: galleryData} = useQuery(getYearlyGallery());
  
  const [yearlySlides, setYearylySlides] = useState<SlideItemProps[]>([]);


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
      {
        data && <div className={styles.homepage} dangerouslySetInnerHTML={{__html: data.page.content}}>
        </div>
      }
      
      <Slider slides={yearlySlides} />
    </>
  );
}

export default Home;
