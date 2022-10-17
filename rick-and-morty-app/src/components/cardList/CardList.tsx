import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { ParaphTextStyled } from '../../styled/components/text';

type ProductListProps = {
    data: Array<any>
    fetchNextPage?: any
    hasNextPage?: boolean
    renderCard: React.FunctionComponent<any>
}

const CardList: React.FC<ProductListProps> = (
    {
        data,
        fetchNextPage,
        hasNextPage,
        renderCard
    }
) => {
    if (!data?.[0].length) return (<ParaphTextStyled variant="secondary">Empty list</ParaphTextStyled>)

    return (
        <InfiniteScroll
            dataLength={data?.[0]?.length * 20}
            next={fetchNextPage}
            hasMore={hasNextPage || false}
            loader={<h4>Loading...</h4>}
        >
            {
                React.Children.toArray(
                    data?.map((page: any) => page?.map((dataCard: any) => renderCard(dataCard)))
                )
            }

        </InfiniteScroll>
    )
}

export default CardList