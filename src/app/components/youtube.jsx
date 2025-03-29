const VideoEmbed = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-[370px] rounded-xl h-[220px]"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
