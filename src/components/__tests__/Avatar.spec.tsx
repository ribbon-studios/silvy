import { Avatar, AvatarProps } from '../Avatar'
import { createRenderComponent } from '@rain/test-utils/render'

describe('Component(Avatar)', () => {
    const renderAvatar = createRenderComponent<AvatarProps>(Avatar, {
        src: 'https://silvy.rains.cafe'
    });

    it('should display the Avatar', () => {
        const { baseElement } = renderAvatar()

        expect(baseElement).toMatchSnapshot()
    });
});
