import { Puzzle } from '../../interfaces/interfaces';

import { useEffect, useState } from 'react';

import { useFetchData } from '../../hooks/useFetchData';
import { GameContent } from '../GameContent/GameContent';

export const Game = () => {
  const [selectedOptions, setSelectedOptions] = useState<Puzzle[]>([]);
  const [options, setOptions] = useState<Puzzle[]>();
  const [isWrongSelection, setIsWrongSelection] = useState(false);
  const { data, isLoading, error } = useFetchData();

  const handleSelection = (puzzle: Puzzle) => {
    setSelectedOptions([...selectedOptions, puzzle]);
  };

  const clearSelectedOptions = () => {
    setSelectedOptions([]);
  };

  const handleWrongSelection = () => {
    setIsWrongSelection(true);
    setTimeout(() => {
      setIsWrongSelection(false);
      clearSelectedOptions();
    }, 3000);
  };

  useEffect(() => {
    if (!options && data) {
      setOptions(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (selectedOptions.length > 1) {
      const option1 = selectedOptions[0];
      const option2 = selectedOptions[1];
      if (
        option1.id === option2.id &&
        option1.name === option2.name &&
        option1.type === option2.type
      ) {
        clearSelectedOptions();
        return;
      }
      if (option1.id === option2.id) {
        clearSelectedOptions();
        setOptions(options?.filter((option) => option.id !== option1.id));
      } else {
        handleWrongSelection();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  return (
    <GameContent
      isLoading={isLoading}
      isWrongSelection={isWrongSelection}
      onSelect={handleSelection}
      options={options}
      selectedOptions={selectedOptions}
      error={error}
    />
  );
};
