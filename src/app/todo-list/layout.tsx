import Container from '@/components/todo-list/container';
import Footer from '@/core-components/todo-list/footer';
import Header from '@/core-components/todo-list/header';
import MainContent from '@/core-components/todo-list/main-content';
import type React from 'react';

interface TodoListLayoutBase {
  children: React.ReactNode;
}

type TodoListLayoutProps = Readonly<TodoListLayoutBase>;

export default function TodoListLayout({ children }: TodoListLayoutProps) {
  return (
    <Container size={'md'}>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  );
}
