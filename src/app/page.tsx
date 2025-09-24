import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans-calculator">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Léo Brizolla Dev
        </h1>
        <p className="text-xl text-center text-muted-foreground">Projetos</p>
        <Link
          className="mt-4 px-4 py-2 bg-primary rounded"
          href={'/calculator'}
        >
          Calculadora
        </Link>
        <Link className="mt-4 px-4 py-2 bg-primaryrounded" href={'/todo-list'}>
          Todo List
        </Link>
      </main>
    </div>
  );
}
