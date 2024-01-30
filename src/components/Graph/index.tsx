import { VictoryPie } from "victory";
import { Container, SubtitleContainer } from "./styles";

const subtitlesLabel = [{color: "tomato", label: "A pagar"}, {color: "orange", label: "A receber"}]


const Graph = () =>(
    <Container>
         <VictoryPie data={[{x: "A pagar", y: 20}, {x: "A receber", y:80}]} innerRadius={100} colorScale={["tomato", "orange"]}
            padAngle={2} style={{labels:{display: "none"}}}
        />

        {subtitlesLabel.map(subtitle => (
             <SubtitleContainer key={subtitle.color} color={subtitle.color}>
                <div /> {subtitle.label}
            </SubtitleContainer>

        ))}
       
    </Container>
);

export default Graph