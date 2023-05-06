import React, { useEffect, useState } from "react";
import Photos from "../components/Photos";
import axios from "axios";

export default function PhotoLayout() {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        // console.log(response);
        setPhotoList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Photos</h1>
          {photoList.length > 0 &&
            photoList.map((val, key) => {
              return (
                <div key={key} style={{ padding: '20px 0px', width: '60%' }}>
                  <Photos
                    id={val.id} title={val.title} url={val.url} thumbnailUrl={val.thumbnailUrl}
                    />
                    </div>
                  );
                })}
            </div>
          );
        }
        