import { createRenderComponent } from '@rain/test-utils/render';
import { screen } from '@testing-library/react';
import { useOpened } from '../../../hooks/use-opened';
import { Popover, PopoverProps } from '../Popover';
import styles from '../Popover.module.scss';

jest.mock('../../../hooks/use-opened');

const mockedUseOpened = jest.mocked(useOpened);

describe('Component(Popover)', () => {
    const renderPopover = createRenderComponent<PopoverProps>(Popover, {
        children: (
            <>
                <div>Item A</div>
                <div>Item B</div>
            </>
        ),
        toggle: (
            <button>Test</button>
        )
    });

    beforeEach(() => {
        mockedUseOpened.mockReturnValue([false, {}]);
    })

    it('should display the Popover', () => {
        const { baseElement } = renderPopover();

        expect(baseElement).toMatchSnapshot();
    });

    it('should be closed by default', async () => {
        renderPopover({
            href: 'https://silvy.rains.cafe'
        });

        const element = await screen.findByTestId('popover');
        expect(Array.from(element.classList)).not.toContain(styles.opened);
    });

    it('should support being opened', async () => {
        mockedUseOpened.mockReturnValue([true, {}]);

        renderPopover({
            href: 'https://silvy.rains.cafe'
        });

        const element = await screen.findByTestId('popover');
        expect(Array.from(element.classList)).toContain(styles.opened);
    });
});
