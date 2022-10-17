import React from 'react';
import { CardPrimary } from '../styled/components/card';
import { SpanTextStyled } from '../styled/components/text';
import { ICharacterProps } from '../types/character';

type CardProps = {
    data: ICharacterProps;
}

export const Card: React.FC<CardProps> = ({ data: { id, name, status, species, location, image } }) => {
    return (
        <CardPrimary
            key={id}
            variant={"defaultDark"}
            className="card-custom border"
        >
            <div className="body">
                <div className="character-image">
                    <img src={image} alt="character-avatar" />
                </div>
                <div className="character-data">
                    <div className="character-data-principal">
                        <SpanTextStyled variant="default2" className="character-name">{name}</SpanTextStyled>
                        <div>
                            <SpanTextStyled variant="default2">{status} - </SpanTextStyled>
                            
                            <SpanTextStyled variant="default2">{species}</SpanTextStyled>
                        </div>
                    </div>

                    <div className="character-data-origin">
                        <SpanTextStyled variant="default2">Last known location: </SpanTextStyled>
                        <div>
                            <SpanTextStyled variant="default2">{location.name}</SpanTextStyled>
                        </div>
                    </div>
                </div>
            </div>
        </CardPrimary>
    );
};
