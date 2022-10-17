import React from 'react';
import CardList from '../../components/cardList/CardList';
import LoaderPrimary from '../../components/Loader';
import { useGetCards } from '../../hooks/useGetCards.hook';
import { ContainerPage } from '../../styled/components/container';
import { ParaphTextStyled, TitleTextStyled } from '../../styled/components/text';
import RickCardDefault from './components/RickCardDefault';

const ShowCharactersPage = () => {
    const {
        isSuccess,
        data,
        hasNextPage,
        fetchNextPage,
        isLoading,
        isError
    } = useGetCards()

    if (isError) {
        return <ParaphTextStyled variant="warning">Loading characters rick and morty not found</ParaphTextStyled>
    }
    
    return (
        <ContainerPage
            variant={"primary"}
        >
            <div className="header-style">
                <TitleTextStyled
                    variant="primary"
                >
                    Rick and morty Characters
                </TitleTextStyled>
                <ParaphTextStyled
                    variant="primary"
                    className="header-style-description"
                >
                    Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim
                </ParaphTextStyled>
            </div>
            {
                isLoading ? (
                    <LoaderPrimary />
                ) : (
                    <>
                            {
                                isSuccess && (
                                    <div className="container-wrapper">
                                        <CardList
                                            data={data?.pages || []}
                                            fetchNextPage={fetchNextPage}
                                            hasNextPage={hasNextPage}
                                            renderCard={(dataCard: any) => <RickCardDefault data={dataCard} />}
                                        />
                                    </div>
                                )
                            }
                    </>
                )
            }
        </ContainerPage>
    )
}

export default ShowCharactersPage;