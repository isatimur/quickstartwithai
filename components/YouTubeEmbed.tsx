import React from 'react';

export default function YouTubeEmbed({ url }: { url: string }) {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  );
  const videoId = match ? match[1] : null;
  if (!videoId) return <div>Invalid YouTube URL</div>;

  return (
    <div className="my-8 flex justify-center">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg w-full max-w-2xl aspect-video"
      />
    </div>
  );
}