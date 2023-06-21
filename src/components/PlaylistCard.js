import React from 'react'
import styled from 'styled-components';
import { useContext } from 'react';
import { SpotifyAuthContext } from '../context/SpotifyAuthContext';

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: fit-content;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    background-color: #FFFFF2;
    color: #555555;
    border-radius: 10px;
`;

const InfoContainer = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    justify-content: space-between;
`;

const Img = styled.img`
    max-width: 128px;
    max-height: 128px;
`;

const PlaylistCard = ({ mood }) => {
    const { playlists } = useContext(SpotifyAuthContext);
    const { name, url, image, songs } = playlists[mood];

    return (
        <>
        {
            url 
            ? <Div>
                <Img src={image}/>
                <InfoContainer>
                    <h2>{name}</h2>
                    <p>{songs.length} songs</p>
                    <a href={url}>Spotify Link</a>
                </InfoContainer>
            </Div>
            : <Div>(None)</Div>
        }
        </>
    )
}

export default PlaylistCard;