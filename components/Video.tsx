"use client";
import { useState } from "react";
export default function Video({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  return (
    <figure className="videobox">
      {play ? (
        <iframe
          title={title}
          src={"https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1"}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button className="videoPoster" onClick={() => setPlay(true)}>
          {id === "ZkS8AA4Ew8M" && (
            <img src="/media/blocc-video.webp" alt="" loading="lazy" />
          )}
          <span>▶　Play {title}</span>
        </button>
      )}
      <figcaption>
        <a href={"https://www.youtube.com/watch?v=" + id}>Watch on YouTube ↗</a>
      </figcaption>
    </figure>
  );
}
