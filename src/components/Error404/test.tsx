import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Error404 from '.';

describe('<Error404 />', () => {
  it('should render with default values', () => {
    render(<Error404 />);

    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();

    expect(screen.getByText('Pagina não encontrada !')).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: 'Voltar para Home' }),
    ).toBeInTheDocument();
  });
});
