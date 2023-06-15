import {render} from '@testing-library/react-native'
import { CartIcon } from '../components/CartIcon';
import { CategoriesHerbarioCard } from '../components/CategoriesHerbarioCard';

import { item } from './mocks';

describe('CartIcon', () => {
    
    describe('component rendered', () => {
        it('show text', () => {
            const { getByText} = render(<CartIcon title={"Test"}/>);
    
            expect( getByText('Test')).toBeTruthy();
        });

        it('show bag icon', () => {
            const { getByTestId} = render(<CartIcon title={"Test"}/>);
    
            expect( getByTestId('shopping-bag')).toBeTruthy();
        });
    
    })
    
})

describe('CategoriesHerabriumCard', () => {

    it('render component', ()=>{
        render(<CategoriesHerbarioCard item={item} />)

        expect(true).toBeTruthy();
    })

    describe('component rendered', () => {
        
        it('show text', () => {
            const { getByText} = render(<CategoriesHerbarioCard item={item} />);
    
            expect( getByText('Bromélias')).toBeTruthy();
        });

        it('show bag icon', () => {
            const { getByTestId} = render(<CategoriesHerbarioCard item={item} />);
    
            expect( getByTestId('categoriesHerbariumImage')).toBeTruthy();
        });
    
    })

})