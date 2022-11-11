import { createRenderComponent } from '@rain/test-utils/render';
import { PopoverItem, PopoverItemProps } from '../PopoverItem';

describe('Component(PopoverItem)', () => {
    const renderPopoverItem = createRenderComponent<PopoverItemProps>(PopoverItem);

    it('should display the PopoverItem', () => {
        const { baseElement } = renderPopoverItem()

        expect(baseElement).toMatchSnapshot()
    });

    it('should support overriding the type', () => {
        const { baseElement } = renderPopoverItem<PopoverItemProps<'a'>>({
            as: 'a',
            href: 'https://silvy.rains.cafe'
        })

        expect(baseElement).toMatchSnapshot()
    });
});
