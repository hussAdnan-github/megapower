 export default function SafeHtmlRenderer({ rawHtml, className }) {
 
  return (
    <div
      

      className={className}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}