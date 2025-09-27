'use client';

export default function Home({params}) {

  const {id} = params;

  return (
    <main className="movies-container">      
      <h1>{id}</h1>
    </main>
  );
}
