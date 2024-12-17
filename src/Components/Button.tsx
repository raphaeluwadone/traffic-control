import React from "react";
import styled from "styled-components";

// Props for styling and behavior
interface ButtonProps {
  primary?: boolean; // Prop to define the button style
  onClick?: () => void; // Optional click handler
  children: React.ReactNode; // The button content
}

// Styled component
const StyledButton = styled.button<ButtonProps>`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin: 10px 0;

  &:hover {
    background-color: darkgreen;
  }
`;

// Functional component wrapping the styled button
const Button: React.FC<ButtonProps> = ({ primary, onClick, children }) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
