import hotelsData from '../data/hotels.json';

const HotelBokkingfetch = () => {

    return (
        <div>
         

       {hotelsData.map(hotel => (
        <div key={hotel.id}>{hotel.title}
        <p>Price: ${hotel.price}/night</p>
        
        </div>
      ))}
        </div>
    );
};

export default HotelBokkingfetch;