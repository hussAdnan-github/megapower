 export default function SafeHtmlRenderer({ rawHtml, className }) {
 
  return (
    <div
      data-aos="fade-right" data-aos-delay="100"

      className={className}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}