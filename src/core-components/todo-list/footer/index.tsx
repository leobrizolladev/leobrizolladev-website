import Text from '@/components/todo-list/text';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex gap-2 mt-2 md:mt-8 items-center justify-center">
      <Link href="/">
        <Text variant={'body-sm-bold'}>Home</Text>
      </Link>
      <Link href="/todo-list">
        <Text variant={'body-sm-bold'}>TodoList</Text>
      </Link>
      <Link href="/todo-list/componentes">
        <Text variant={'body-sm-bold'}>Componentes</Text>
      </Link>
    </footer>
  );
}
