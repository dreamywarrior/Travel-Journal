export default function Card(props){
    return(
        <div className = "Webpage--Card">
            <img src = {props.imageUrl} className = "Webpage--place--image"/>
            <div className = "Webpage--Content">
                <div className = "Webpage--Content--Level1">
                    <img src = "../pictures/location_symbol.png" className = "Webpage--Location--icon"/>
                    <h4 className = "Webpage--Country">{props.location}</h4>
                    <i href = {props.googleMapsUrl} className = "Webpage--Maps">View on Google Maps</i>
                </div>
                <h1 className = "Webpage--Title">{props.title}</h1>
                <b className = "Webpage--Dates">{props.startDate} + "-" + {props.endDate}</b>
                <p className = "Webpage--description">{props.description}</p>
            </div>
        </div>
    )
}

/*
                    key: 1,
                    title: "Mount Fuji",
                    location: "Japan",
                    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
                    startDate: "12 Jan, 2021",
                    endDate: "24 Jan, 2021",
                    description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
                    imageUrl: "https://unsplash.com/photos/WLxQvbMyfas"
*/
