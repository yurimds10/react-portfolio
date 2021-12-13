import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
`;

export const NavContainer =  styled.nav`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.a`
  font-size: 2rem;
`;

export const Button = styled.button`
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: .75rem;
  border-radius: .5rem;
  font-weight: var(--font-medium);
  border-radius: 30px;
`;