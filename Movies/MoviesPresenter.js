import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import { ActivityIndicator, ScrollView, Dimensions } from 'react-native'
import Slide from '../Components/Slide'
import Title from '../Components/Title'
import Vertical from '../Components/Vertical'


const {width : WIDTH, height : HEIGHT} = Dimensions.get('screen')

const Container = styled.View``;

const SlideContainer = styled.View`
    width : ${WIDTH}px;
    height : ${HEIGHT/4}px;
    margin-bottom : 30px;
`;

const MoviesPresenter = ({loading, nowPlaying, popular}) => (

    <ScrollView
        contentContainerStyle={{
            flex : 1,
            justifyContent : loading ? 'center' : 'flex-start',
            backgroundColor : 'black'
        }}
    
    >
        {loading ? (
            <ActivityIndicator color='white' size='small'/>
        ) : (
            <>
                <SlideContainer>
                    <Swiper controlsEnabled={false} loop timeout={3}>
                        {nowPlaying.map(movie => (
                            <Slide 
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                overview={movie.overview}
                                votes={movie.vote_average}
                                backgroundImage={movie.backdrop_path}
                                poster={movie.poster_path}

                            />

                        ))}
                    </Swiper>
                </SlideContainer>
                <Container>
                    <Title title={"인기상영작"} />
                    <ScrollView
                        style={{marginTop : 20}}
                        contentContainerStyle={{paddingLeft : 30}}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                            {popular.map(movie => (
                                <Vertical
                                    key={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    votes={movie.vote_average}
                                />
                            ))}
                    </ScrollView>
                </Container>
                
            </>
        )}
    </ScrollView>
)


export default MoviesPresenter

