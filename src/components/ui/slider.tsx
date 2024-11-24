'use client'

import * as React from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div className={cn('flex w-full gap-2', className)}>
    <SliderPrimitive.Root
      ref={ref}
      className='relative flex flex-1 touch-none select-none items-center'
      {...props}
    >
      <SliderPrimitive.Track className='relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20'>
        <SliderPrimitive.Range className='absolute h-full bg-primary' />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className='block size-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50' />
    </SliderPrimitive.Root>
    <small className='w-6 text-end'>{props.value}</small>
  </div>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
