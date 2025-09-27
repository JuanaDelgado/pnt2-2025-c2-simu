import Image from "next/image";

export const endpoint = "https://mflixbackend.azurewebsites.net/api/movies";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1rem'
      }}>Simulación de Examen</h1>
      <p style={{ 
        fontSize: '1.25rem',
        color: '#666' 
      }}>Programación en Nuevas Tecnologías 2</p>
      {/*Punto 1*/}
      <a href="https://github.com/JuanaDelgado/pnt2-2025-c2-simu.git">Link a mi repositorio</a>
      <a href="/peliculas">Peliculas</a>
    </div>
  );
}
