import styled from 'styled-components';
import variables from '@styles/theme';

export const Overview = styled.div`
  display: flex;
  padding: ${variables.text.spacing};
  margin: 2rem;
`;

export const Thumbnail = styled.div`
  flex: 1 1 0;
  padding: 1.5rem;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 5px;
`;

export const Selling = styled.div`
  flex: 1 1 0;
  padding: 1.5rem;
`;

export const SellingHeader = styled.section`
  display: flex;
  align-items: center;
`;

export const ProductActs = styled.div`
  display: flex;
  align-items: center;
`;

export const Act = styled.button`
  border: none;
  border-radius: 30px;
  font-size: 0.5rem;
  padding: 0.5rem;
`;

export const Description = styled.section`
  width: 50%;
  margin: ${variables.sideSpace.contentSmall} 0;
`;

export const DeliveryInfo = styled.div`
  margin: ${variables.sideSpace.contentSmall} 0;
`;

export const SpanStrong = styled.span`
  font-weight: 700;
  margin-right: 1rem;
`;
