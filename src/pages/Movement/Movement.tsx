import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getPage, getPageById } from "../../services/getContent";
import Loader from "../../components/Loader/Loader";
import { sanitizeContent } from "../../utils/helpers";
import styles from './Movement.module.scss';
import TabDetail from "./TabDetail";

interface PageChildrenProps {
  slug: string;
  id: string;
  title: string;
}

const Movement = () => {
  const { loading, error, data } = useQuery(getPage("the-movement"));

  const [pageChildren, setPageChildren] = useState<PageChildrenProps[]>([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (data) {
      const childrenNodes = data.page.children.nodes;
      let children:PageChildrenProps[] = []
      childrenNodes.forEach((child: any) => {
        const cleanSlug = child.slug.replaceAll("-", " ");
        const childId = child.id;
        children = [{slug: child.slug, title: cleanSlug, id: childId}, ...children];
      });
      setPageChildren(children);
      setActiveTab(childrenNodes[childrenNodes.length - 1].slug);
    }
  }, [data]);
  
  return (
    <>
      {loading && <Loader />}
      {data && (
        <>
          <div className={styles.pageWrapper}>
            <h2>{data.page.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: sanitizeContent(data.page.content) }}></div>
          </div>
          <ul className={styles.tabParent}>
            {pageChildren.map((pageChild) => (
              <li key={pageChild.id}>
                <a onClick={(e) => {e.preventDefault(); setActiveTab(pageChild.slug)}} href={`#${pageChild.slug}`} className={pageChild.slug === activeTab ? styles.active : ""}>{pageChild.title}</a>
              </li>
            ))}
          </ul>
          {pageChildren.map((pageChild) => (
              <TabDetail id={pageChild.id} hash={pageChild.slug} isActive={pageChild.slug === activeTab} />
            ))}
        </>
      )}
    </>
  )
}

export default Movement;