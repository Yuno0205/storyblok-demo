export default function DefaultPage({ blok }: any) {
  return (
    <main>
      <h1>{blok.title || "Default Page"}</h1>
    </main>
  );
}
