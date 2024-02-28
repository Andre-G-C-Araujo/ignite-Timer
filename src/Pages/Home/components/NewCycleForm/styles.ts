import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.gray_100};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.gray_500};
  font-weight: bold;
  font-size: inherit; //herda font-size do father
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.gray_100};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.green_500};
  }

  &::placeholder {
    color: ${({ theme }) => theme.gray_500};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
  //flex 1 é um atalho para setar 3 propriedades...
  //flex-grow (permite crescer mais do que o tamanho orignal);
  //flex-shrink (permite diminuir o tamanho caso necessario);
  //flex-basis: (qual o ideal caso nao sirva para outras propriedades a cima  )

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;
