// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Image: Story = {
  args: {
    avatar: '/images/placeholders-avatar-02.png',
  },
}

export const Letter: Story = {
  args: {
    letter: 'BC',
  },
}

export const Icon: Story = {
  args: {
    icon: 'check',
  },
}

export const WithSantaHat: Story = {
  args: {
    icon: 'check',
    isSantaHatShowing: true,
  },
}

export const WithIndicator: Story = {
  args: {
    icon: 'check',
    indicator: 'success',
  },
}
