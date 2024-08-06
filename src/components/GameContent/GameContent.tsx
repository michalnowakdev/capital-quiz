import { FC } from 'react';
import { Puzzle } from '../../interfaces/interfaces';
import { BannerWrapper, ErrorButton, PuzzlesWrapper } from './styles';
import { Alert, Button } from '@mui/material';

interface GameContentProps {
  isLoading: boolean;
  error: unknown;
  options?: Puzzle[];
  selectedOptions: Puzzle[];
  isWrongSelection: boolean;
  onSelect: (puzzle: Puzzle) => void;
}

export const GameContent: FC<GameContentProps> = ({
  isLoading,
  options,
  error,
  selectedOptions,
  isWrongSelection,
  onSelect
}) => {
  const handleSelect = (puzzle: Puzzle) => {
    if (!isWrongSelection) {
      onSelect(puzzle);
    }
  };

  if (isLoading) {
    return (
      <BannerWrapper>
        <Alert icon={false} severity="info">
          Loading...
        </Alert>
      </BannerWrapper>
    );
  }
  if (error) {
    return (
      <BannerWrapper>
        <Alert severity="error">An error occurred while retrieving data</Alert>
      </BannerWrapper>
    );
  }

  if (options?.length) {
    return (
      <PuzzlesWrapper>
        {options?.map((puzzle) => {
          const isSelected = !!selectedOptions.find(
            (option) =>
              option.name === puzzle.name && option.type === puzzle.type
          );
          return isWrongSelection && isSelected ? (
            <ErrorButton
              variant={'contained'}
              key={puzzle.name}
              onClick={() => handleSelect(puzzle)}
              color="error"
            >
              {puzzle.name}
            </ErrorButton>
          ) : (
            <Button
              variant={isSelected ? 'contained' : 'outlined'}
              key={`${puzzle.name}${puzzle.type}`}
              onClick={() => handleSelect(puzzle)}
              color={'primary'}
            >
              {puzzle.name}
            </Button>
          );
        })}
      </PuzzlesWrapper>
    );
  }
  return (
    <BannerWrapper>
      <Alert severity="success">Congratulations!</Alert>
    </BannerWrapper>
  );
};
