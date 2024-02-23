import { Pride } from '../Pride'
import { createRenderComponent } from '@rain/test-utils/render'

describe('Component(Pride)', () => {
    const renderPride = createRenderComponent(Pride);

    it('should display the Pride', () => {
        const { baseElement } = renderPride()

        expect(baseElement).toMatchSnapshot()
    });
});
