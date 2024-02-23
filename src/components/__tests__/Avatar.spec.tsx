import { Avatar, AvatarProps } from '../Avatar'
import { createRenderComponent } from '../../../__tests__/render'

describe('Component(Avatar)', () => {
    const renderAvatar = createRenderComponent<AvatarProps>(Avatar, {
        src: 'https://google.com'
    })

    it('should display the Avatar', () => {
        const { baseElement } = renderAvatar()

        expect(baseElement).toMatchSnapshot()
    })
})
