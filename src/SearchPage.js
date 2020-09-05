import React from 'react';
import './css/SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays &middot; 26 August to 30 August &middot; 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; wifi &middot; Kitchen &middot; Free Parking &middot; Washing Machine"
                star={4}
                price="$40/night"
                total="&117 total"
            />
            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; wifi &middot; Kitchen &middot; Free Parking &middot; Washing Machine"
                star={4.75}
                price="$35/night"
                total="&110 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; wifi &middot; Kitchen &middot; Free Parking &middot; Washing Machine"
                star={3}
                price="$10/night"
                total="&120 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; wifi &middot; Kitchen &middot; Free Parking &middot; Washing Machine"
                star={5}
                price="$30/night"
                total="&200 total"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; wifi &middot; Kitchen &middot; Free Parking &middot; Washing Machine"
                star={4.75}
                price="$20/night"
                total="&150 total"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; wifi &middot; Kitchen &middot; Free Parking &middot; Washing Machine"
                star={4}
                price="$40/night"
                total="&117 total"
            />
            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; wifi &middot; Kitchen &middot; Free Parking &middot; Washing Machine"
                star={4.75}
                price="$35/night"
                total="&110 total"
            />
        </div>
    );
};

export default SearchPage;
