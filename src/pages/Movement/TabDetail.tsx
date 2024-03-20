import { useQuery } from "@apollo/client";
import { getPageById } from "../../services/getContent";
import Loader from "../../components/Loader/Loader";
import { sanitizeContent } from "../../utils/helpers";
import styles from './TabDetail.module.scss';
import './TabDetailWP.scss';
import { useEffect } from "react";

interface TabDetailProps {
  id: string;
  hash: string;
  isActive?: boolean;
}

const TabDetail = ({id, hash, isActive=false}: TabDetailProps) => {

  const { loading, error, data } = useQuery(getPageById(id));

  useEffect(() => {
    if (data && isActive) {
      const summaryList = document.querySelectorAll(".wp-summaryLink a");
      const firstShown = document.querySelector(".wp-tabDetail__content");
      firstShown?.classList.add("active");
      summaryList[0].classList.add("active");
      summaryList.forEach((summary) => {
        summary.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const target = e.target as HTMLLinkElement;
          const hash = target.getAttribute("href");
          if (hash) {
            const allContents = document.querySelectorAll(".wp-tabDetail__content");
            const links = document.querySelectorAll(".wp-summaryLink a");
            allContents.forEach((content) => content.classList.remove("active"));
            links.forEach((link) => link.classList.remove("active"));
            target.classList.add("active");
            document.querySelector(hash)?.classList.add("active");
          }
        })
      })
    }
  }, [isActive, data]);

  return (
    isActive ? <>
    {loading && <Loader />}
    {data && (
      <div id={hash} className={styles.tabDetail} dangerouslySetInnerHTML={{ __html: sanitizeContent(data.page.content) }}></div>
    )}
  </> : <></>
  )
}

export default TabDetail;