import { useEffect, useState } from 'react';

const useGoogleSSO = () => {
  const [basePath, setBasePath] = useState('');

  useEffect(() => {
    setBasePath(window.location.origin);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return {
    basePath,
  };
};

export default useGoogleSSO;
