import * as React from 'react';
import {
    fluentButton,
    fluentCard,
    fluentCheckbox,
    fluentDivider,
    provideFluentDesignSystem
} from '@fluentui/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';

const { wrap } = provideReactWrapper(React, provideFluentDesignSystem());

export const FluentButton = wrap(fluentButton());
export const FluentCard = wrap(fluentCard());
export const FluentCheckbox = wrap(fluentCheckbox());
export const FluentDivider = wrap(fluentDivider());