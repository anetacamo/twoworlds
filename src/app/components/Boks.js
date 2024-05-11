export default function Boks({ color, headline, paragraphs, right }) {
  return (
    <section>
      <div className={`largetext box ${right && "right"} box-${color}`}>
        {headline && <h2>{headline}</h2>}
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
      </div>
    </section>
  );
}
