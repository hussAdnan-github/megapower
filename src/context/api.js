 export async function getHome() {
  const res = await fetch(`https://megapowers.pythonanywhere.com/`,

    {
      // next: { revalidate: 86400  } // <-- التحسين هنا
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


export const truncateWords = (text, wordLimit) => {
     if (!text) return '';
    
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
};
