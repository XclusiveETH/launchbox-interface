'use client';

const FAQView = () => {
  return (
    <iframe
      src="https://docs.alphas.meme/"
      className="w-full min-h-screen"
      onError={(e) => console.error('Iframe failed to load:', e)}
    />
  );
};

export default FAQView;
