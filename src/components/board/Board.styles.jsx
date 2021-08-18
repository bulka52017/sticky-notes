import styled from 'styled-components';
import boardImg from '../../assets/img/retina_wood_@2X.png';
import corkImg from '../../assets/img/blank-cork-background.jpeg';

export const BoardContainer = styled.div`
    width: 100%;
    height: 100%;
    background: url(${corkImg});
    background-size: cover;
    background-repeat: repeat;
    box-shadow: inset 0 0 8px #000000;
`;

export const BorderWood = styled.div`
    width: 100%;
    height: 100%;
    background: url(${boardImg});
    padding: 30px;
    box-sizing: border-box;
    background-size: contain;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;
