import tw from "tailwind-styled-components";

interface IContainerStProps {
  $hideShadow?: boolean;
}

export const ContainerSt = tw.div<IContainerStProps>`
    flex 
    gap-2 
    border 
    border-gray-300 
    rounded-full 
    py-2 
    px-4 
    ${(p) => !p.$hideShadow && "shadow-md shadow-gray-300"}
    
`;

export const DividerSt = tw.div`
    border-l 
    border-gray-300
`;
