import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import {Tile as TileLayer} from 'ol/layer.js';
import { transformExtent, useGeographic } from "ol/proj";
import View from 'ol/View.js';
import 'ol/ol.css';
import { getPage } from "../../services/getContent";
import { sanitizeContent } from "../../utils/helpers";
import './ChurchWP.scss';
import Loader from "../../components/Loader/Loader";

const Church = () => {
  const { loading, error, data } = useQuery(getPage("our-church"));
  useGeographic();

  useEffect(() => {  
    if (data) {
      const osmLayer = new TileLayer({
        preload: Infinity,
        source: new OSM(),
      });
  
      const view = new View({
        center: transformExtent([18.0067484, 59.3629706],'EPSG:4326', new OSM().getProjection() || ""),
        zoom:15,
      });
      const map = new Map({
        target: "mapPlaceholder",
        layers: [osmLayer],
        view: view,
      });
      const size = map.getSize() || [];
      view.centerOn([18.0097484, 59.3629706], size, [size[0]/2,150]);
      return () => map.setTarget(undefined);
    }
    
  }, [data]);

  return (
    <>
      {
        loading && <Loader />
      }
      {
        data && <div dangerouslySetInnerHTML={{ __html: sanitizeContent(data.page.content) }}></div>
      }
    </>
  )
}

export default Church;