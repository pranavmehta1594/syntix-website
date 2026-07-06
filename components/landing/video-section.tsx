"use client";

export function VideoSection() {
  return (
    <section id="video" className="relative w-full bg-black">
      <video
        className="block w-full h-auto object-cover max-h-[85vh]"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/video/zeeframes-process.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

