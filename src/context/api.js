// دالة عامة لجلب البيانات من أي API
export async function getHome() {
  const res = await fetch(`https://megapowers.pythonanywhere.com/`,
     { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
 