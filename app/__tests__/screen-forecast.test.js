import { React } from "react";
import { render } from 'react-native-testing-library';
import App from '../../App';
import imageDictionary from "../shared/images";
import Card from '../components/card';
import 'jest-styled-components';

const mockList = [
    {
        date: new Date(1610934415 * 1000),
        name: 'lun',
        temp_min: 20,
        temp_max: 30,
        icon: imageDictionary["02d"],
    },
    {
        date: new Date(1610934415 * 1000),
        name: 'mar',
        temp_min: 30,
        temp_max: 32,
        icon: imageDictionary["02d"],
    },
    {
        date: new Date(1610934415 * 1000),
        name: 'mierc',
        temp_min: 15,
        temp_max: 25,
        icon: imageDictionary["02d"],
    },
]

it("renders all our components correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
   });

describe('Testing ListItems Weather Forecast', () => {

    it('should properly render the text', () => {
        const rendered = render(
            mockList.map((day, index) => (
                <Card
                    key={index}
                    index={index}
                    icon={day.icon}
                    name={day.name.substring(0, 3)}
                    tempMax={day.temp_max}
                    tempMin={day.temp_min}
                />                                                         
            ))
        )
    
        const textComponent = rendered.UNSAFE_getAllByType(Card);
        
        expect(textComponentlength).toBe(3);
    });
})