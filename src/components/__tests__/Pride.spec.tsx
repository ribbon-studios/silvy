import { Pride } from '../Pride'
import { createRenderComponent } from '../../../__tests__/render'

describe('Component(Pride)', () => {
    const renderPride = createRenderComponent(Pride);

    it('should display the Pride', () => {
        const { baseElement } = renderPride()

        expect(baseElement).toMatchSnapshot()
    });
});
