export default function Card(props){
    return(
        <div className = "Webpage--Card">
            <img src = {props.imageUrl} className = "Webpage--place--image" alt = "places"/>
            <div className = "Webpage--Content">
                <div className = "Webpage--Content--Level1">
                    <img src = "../pictures/location_symbol.png" className = "Webpage--Location--icon" alt = "location_symbol"/>
                    <h4 className = "Webpage--Country">{props.location}</h4>
                    <a href = {props.googleMapsUrl} className = "Webpage--Maps">View on Google Maps</a>
                </div>
                <h1 className = "Webpage--Title">{props.title}</h1>
                <b className = "Webpage--Dates">{props.startDate} - {props.endDate}</b>
                <p className = "Webpage--description">{props.description}</p>
            </div>
        </div>
    )
}