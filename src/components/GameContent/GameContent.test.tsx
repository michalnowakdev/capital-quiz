import { render, screen } from '@testing-library/react';
import { GameContent } from './GameContent';
import { Puzzle } from '../../interfaces/interfaces';

const options: Puzzle[] = [
  {
    id: 'France-Paris',
    name: 'France',
    type: 'country'
  },
  {
    id: 'France-Paris',
    name: 'Paris',
    type: 'capital'
  },
  {
    id: 'Poland-Warsaw',
    name: 'Poland',
    type: 'country'
  },
  {
    id: 'Poland-Warsaw',
    name: 'Warsaw',
    type: 'capital'
  },
  {
    id: 'Italy-Rome',
    name: 'Italy',
    type: 'country'
  },
  {
    id: 'Italy-Rome',
    name: 'Rome',
    type: 'capital'
  },
  {
    id: 'Germany-Berlin',
    name: 'Germany',
    type: 'country'
  },
  {
    id: 'Germany-Berlin',
    name: 'Berlin',
    type: 'capital'
  },
  {
    id: 'United Kingdom-London',
    name: 'United Kingdom',
    type: 'country'
  },
  {
    id: 'United Kingdom-London',
    name: 'London',
    type: 'capital'
  }
];

const handleSelect = jest.fn();

describe('Banners tests', () => {
  it('Loading banner', () => {
    render(
      <GameContent
        options={options}
        isLoading={true}
        error={undefined}
        isWrongSelection={false}
        onSelect={handleSelect}
        selectedOptions={[]}
      />
    );
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });
  it('Error banner', () => {
    render(
      <GameContent
        options={options}
        isLoading={false}
        error={'Error'}
        isWrongSelection={false}
        onSelect={handleSelect}
        selectedOptions={[]}
      />
    );
    const loading = screen.getByText('An error occurred while retrieving data');
    expect(loading).toBeInTheDocument();
  });
  it('Success banner', () => {
    render(
      <GameContent
        options={[]}
        isLoading={false}
        error={undefined}
        isWrongSelection={false}
        onSelect={handleSelect}
        selectedOptions={[]}
      />
    );
    const loading = screen.getByText('Congratulations!');
    expect(loading).toBeInTheDocument();
  });
});

describe('Game tests', () => {
  it('No item selected', async () => {
    render(
      <GameContent
        options={options}
        isLoading={false}
        error={undefined}
        isWrongSelection={false}
        onSelect={handleSelect}
        selectedOptions={[]}
      />
    );

    options.forEach(async (option) => {
      const puzzle = await screen.findByText(option.name);
      expect(puzzle).toHaveClass('MuiButton-outlinedPrimary');
      expect(puzzle).toBeInTheDocument();
    });
  });

  it('Item clicked', async () => {
    render(
      <GameContent
        options={options}
        isLoading={false}
        error={undefined}
        isWrongSelection={false}
        onSelect={handleSelect}
        selectedOptions={[]}
      />
    );
    const puzzle = await screen.findByText('Poland');
    puzzle.click();
    expect(handleSelect).toBeCalled();
  });
  it('Two items clicked', async () => {
    render(
      <GameContent
        options={options}
        isLoading={false}
        error={undefined}
        isWrongSelection={false}
        onSelect={handleSelect}
        selectedOptions={[options[0], options[1]]}
      />
    );
    const country = await screen.findByText('France');
    const capital = await screen.findByText('Paris');
    expect(country).toHaveClass('MuiButton-containedPrimary');
    expect(capital).toHaveClass('MuiButton-containedPrimary');
  });

  it('Error selection', async () => {
    render(
      <GameContent
        options={options}
        isLoading={false}
        error={undefined}
        isWrongSelection={true}
        onSelect={handleSelect}
        selectedOptions={[options[0], options[1]]}
      />
    );
    const country = await screen.findByText('France');
    const capital = await screen.findByText('Paris');
    expect(country).toHaveClass('MuiButton-containedError');
    expect(capital).toHaveClass('MuiButton-containedError');
  });
});
