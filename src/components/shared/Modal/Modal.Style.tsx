import styled from 'styled-components';

export interface PropsModal {
    height: number,
    weight: number
}

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
  transition: all 500ms ease-in-out;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0; 
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;
export const StyledModal = styled.div<PropsModal>`
  z-index: 100;
  background: var(--dark);
  position: relative;
  margin: auto;
  /* border-radius: 8px;*/
  min-height: ${p => p.height ? p.height : '300px' };
  min-width: ${p => p.weight ? p.weight : '300px' };  
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
`;
export const HeaderText = styled.div`
  align-items: center;
  color: lightgray;
`;
export const CloseButton = styled.button`
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  color: lightgray;

  &:hover {
    cursor: pointer;
  }
`;
export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;