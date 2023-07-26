import styled from 'styled-components';
import theme from '../../../../styles/theme'

export const StFilterContainer = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
`;

export const StFilteredInfoList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    & > li {
        width: fit-content;
        height: fit-content;

        
        & > button {
            display: block;
            padding: 1px 8px 3px;
            font-size: 15px;
            line-height: 18px;
            font-weight: 700;
            border-radius: 26px;
            color: #fff;
            background-color: ${theme.primaryColor};
        }

        &:last-child > button {
                color: ${theme.primaryDarkColor};
                background-color: transparent;

                &:hover {
                    background-color: transparent;
                    opacity: 0.5;
                }
            }
        
    }
`;
