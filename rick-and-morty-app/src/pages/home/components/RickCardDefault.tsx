import React from 'react'
import { CharacterMapper } from '../../../app/infrastructure/CharacterMapper'
import { Card } from '../../../components/Card'
import '../charactersPage.style.css';

type RickCardDefaultProps = {
    data: any
}

const RickCardDefault: React.FC<RickCardDefaultProps> = ({ data }) => {
    const cardData = CharacterMapper.toDomain(data);
    return (
        <Card
            data={cardData}
        />
    )
}

export default RickCardDefault