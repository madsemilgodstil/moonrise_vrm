'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getShows } from '@/lib/supabase';

const Hero = dynamic(() => import("@/components/hero/Hero"), { ssr: false });
const ShowsGallery = dynamic(() => import("@/components/shows/ShowsGallery"), { ssr: false });

export default function Shows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchShows() {
      try {
        const data = await getShows();
        setShows(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
        setError('Kunne ikke hente shows');
      } finally {
        setLoading(false);
      }
    }

    fetchShows();
  }, []);

  return (
    <>
      <Hero
        backgroundSrc="/assets/images/testimage.jpg"
        title="Shows"
        overlayOpacity={0.5}
        height="h-[40vh]"
      />
      {loading ? (
        <div className="container mx-auto px-4 py-8 text-center text-white">
          Indlæser shows...
        </div>
      ) : error ? (
        <div className="container mx-auto px-4 py-8 text-center text-red-500">
          {error}
        </div>
      ) : (
        <ShowsGallery shows={shows} />
      )}
    </>
  );
}