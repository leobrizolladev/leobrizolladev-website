import Container from '@/components/todo-list/container';
import Logo from '../../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <Logo className="h-9 md:h-12" />
    </Container>
  );
}
