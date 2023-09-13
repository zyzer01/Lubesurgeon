'use client';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

export default function VideoAbout({ url }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return <>{isLoaded && <ReactPlayer url={url} width="100%" />}</>;
}
